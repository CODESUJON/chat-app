import {v2 as cloudinay} from 'cloudinary'
import { config } from 'dotenv'
config();

cloudinay.config({
    cloud_name:process.env.CLOUDINAR_CLOUD_NAME,
    api_key:process.env.COULDINAR_API_KEY,
    api_secret: process.env.COULDINAR_API_SESRET,
});

export default cloudinay;