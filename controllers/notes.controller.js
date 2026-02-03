import notesModal from '../models/notes.model.js';
import { rateLimit } from 'express-rate-limit'

export const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56,
    message: "Only 5 notes will be created in a minute."
})

export const createNote = async (req, res) => {
    const { title, content } = req.body;

    try {
        const note = await notesModal.findOne({ title: title });

        if (note) {
            return res.status(409).send({ success: false, message: 'Title already exist' })
        }

        await notesModal.create({ title, content });

        return res.status(201).send({ success: true, message: "Note Created Successfully" });

    } catch (error) {
        return res.status(500).send({ success: false, messsage: "Internal Server Error" })
    }
}

export const getNotes = async (req, res) => {
    try {
        const notes = await notesModal.find({}).sort({ updatedAt: -1 });


        if (notes.length == 0) {
            return res.status(200).send({ success: true, message: "No Notes Found" })
        }

        return res.status(200).send({
            success: true,
            message: "List of notes",
            notes: notes
        })
    } catch (error) {
        return res.status(500).send({ success: false, messsage: "Internal Server Error" })
    }

}

export const searchNotes = async (req, res) => {
    try {
        const { q } = req.query;
        console.log(q);
        
        if (!q) {
            return res.status(400).send({ success: false, message: "Invalid query" })
        }


        const searchValue = q.toLowerCase();

        const notes = await notesModal.find({$text:{$search:searchValue}})

        if (notes.length == 0) {
            return res.status(200).send({ success: true, message: "No Note Found" })
        }

        return res.status(200).send({
            success: true,
            message: "List of notes",
            notes: notes
        })


    } catch (error) {
        return res.status(500).send({ success: false, messsage: "Internal Server Error" })
    }

}

export const updateNote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ success: false, message: "Invalid Id" })
        }

        const note = await notesModal.findById(id);
        

        if (!note) {
            return res.status(400).send({ success: false, message: "Id does not exist" })
        }

        const { title, content } = req.body;

        if (!title && !content) {
            return res.status(200).send({ success: true, message: "Neither title nor content is provided" })

        } else if (title && content) {
            await notesModal.findByIdAndUpdate(id,{ title, content });
        } else if (title) {
            await notesModal.findByIdAndUpdate(id,{ title });
        } else if (content) {
            await notesModal.findByIdAndUpdate(id,{ content });
        }

        return res.status(200).send({ success: true, message: 'Note Updated Successfully' })

    } catch (error) {
        return res.status(400).send({ success: false, message: "Invalid Id" })
    }
}