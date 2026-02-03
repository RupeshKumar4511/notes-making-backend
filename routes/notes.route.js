import express from 'express'
import {checkSchema} from 'express-validator'
import {notesCreateSchema, notesUpdateSchema, searchNoteQuerySchema } from '../utils/notes.schema.js'
import validateSchema from '../middleware/schema.validation.js'
import { rateLimiter,createNote, getNotes, searchNotes, updateNote } from '../controllers/notes.controller.js';

const router = express.Router();

router.route('/notes').post(rateLimiter,checkSchema(notesCreateSchema),validateSchema,createNote).get(getNotes);

router.route('/notes/:id').put(checkSchema(notesUpdateSchema),validateSchema,updateNote);

router.route('/notes/search').get(checkSchema(searchNoteQuerySchema),validateSchema,searchNotes)


export default router;