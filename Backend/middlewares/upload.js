import multer from 'multer';
import GredFsStorage from "multer-gridfs-storage";

const storage = new GredFsStorage({
    url:process.env.DB_URL,
    options: { useNewUrlParser: true, useUnifiedTopology: true },

    //checking file type
    file:(req, file) => {
        const match  = ["image/png", "image/jpeg"];

        if(match.indexOf(file.mimetype) === -1){
            const filename = `${Date.now()}-profile-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-profile-${file.originalname}`
        }
    },
});

export const upload = multer({ storage });