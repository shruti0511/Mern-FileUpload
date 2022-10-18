const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFiletypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFiletypes.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;