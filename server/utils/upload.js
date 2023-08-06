import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: `mongodb://coder:coder121@ac-18i9jla-shard-00-00.xrwagal.mongodb.net:27017,ac-18i9jla-shard-00-01.xrwagal.mongodb.net:27017,ac-18i9jla-shard-00-02.xrwagal.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-101v84-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 