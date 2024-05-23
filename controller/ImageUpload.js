import cloudinary from "cloudinary"

cloudinary.config({
    cloud_name:"dd3w7bf9n",
    api_key:"725374276846571",
    api_secret:"9EkqTEh2oUgqyF2butkxy6XToxY"
})
const imageUploadController = async (req,res) =>{
    try{
        const result = await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url:result.secure_url,
            public_id:result.public_id,
        })
    }catch(error){
        console.log(error);
    }
}
export default imageUploadController