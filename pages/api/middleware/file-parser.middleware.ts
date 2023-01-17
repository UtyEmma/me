import nextConnect, { NextHandler } from "next-connect";
import multiparty from 'multiparty'
import formidable from "formidable";
import path from "path";
import multer from "multer";

const upload = multer({
    storage: multer.diskStorage({
      destination: path.join(process.cwd(), "public/uploads"),
      filename: (req, file, cb) => cb(null, file.originalname),
    }),
  });

const fileParser = nextConnect({
    onError(error, req: any, res: any) {
      res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});
  
fileParser.use(upload.any());

fileParser.use((req, res, next) => {
    const files = {}
    if(req.files && req.files.length > 0){
        for (const file of req.files) {
            const {fieldname, ...items} = file
            Object.assign(files, {
                [fieldname]: items
            })
        }
    }

    req.files = files

    return next()
})

export default fileParser