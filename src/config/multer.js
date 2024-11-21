import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

const uploadFolder = path.resolve(new URL('.', import.meta.url).pathname, '..', '..', 'uploads');

export default {
    storage: multer.diskStorage({
        destination: uploadFolder,
        filename: (req, file, cb) => {
            const fileName = `${uuidv4()}-${file.originalname}`
            cb(null, fileName)
        },
    }),
    limits: {
        fileSize: 2 * 1024 * 1024, // 2MB
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error('Invalid file type.'))
        }
    },
}
