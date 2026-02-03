import mongoose from 'mongoose'

const notesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    content:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    }
},{timestamps:true})

notesSchema.index({title:'text',content:'text'})

const notesModal = mongoose.model('notes',notesSchema);

export default notesModal;