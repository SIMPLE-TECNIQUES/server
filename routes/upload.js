import express from 'express';
import multer from 'multer';

const router=express.Router();
const storage=multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'public/images');
    },
    filename : (req,file,cb)=>{
        cb(null,req.body.name);
    }
})
const upload=multer({storage});

router.post('/',upload.single("file"),(req,res)=>{
    try {
        res.status(200).json({msg : "File Uploaded Successfully"});
    } catch (error) {
        res.status(500).json({err : error.message});
    }
})

export default router;