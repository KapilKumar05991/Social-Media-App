
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary'
import cloudinary from './cloudinary.js';

const storage1 = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'profile_pics', // folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const profileImageUpload = multer({ storage: storage1 });

const storage2 = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'post_images', // separate folder for post images
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

const postImageUpload = multer({ storage: storage2 });

export {
  profileImageUpload,
  postImageUpload
} 
