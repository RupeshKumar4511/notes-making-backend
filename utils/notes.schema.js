export const notesCreateSchema = {
    title: {
        trim: true,
        notEmpty: {
            errorMsg: "title is required"
        },
        isString: {
            errorMsg: "title must be string"
        }

    },
    content: {
        trim: true,
        notEmpty: {
            errorMsg: "content is required"
        },
        isString: {
            errorMsg: "content must be string"
        }

    }
}

export const notesUpdateSchema = {
    title: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        trim: true,
        notEmpty: {
            errorMsg: "title is required"
        },
        isString: {
            errorMsg: "title must be string"
        }

    },
    content: {
        optional: {
            options: {
                checkFalsy: true
            }
        },
        trim: true,
        notEmpty: {
            errorMsg: "content is required"
        },
        isString: {
            errorMsg: "content must be string"
        }

    }
}

export const searchNoteQuerySchema = {
    q: {
        in: ['query'],
        trim: true,
        notEmpty: {
            errorMsg: "value is required"
        },
        isString: {
            errorMsg: "value must be string"
        }

    }
}