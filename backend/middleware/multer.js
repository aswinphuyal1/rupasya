import multer from "multer"
//yo ta basupload garna ho to cloud kina ki photos cant be uploaded in cloud
  const storage =multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)}
 }) 

 const upload =multer({storage})

 export default upload
 //