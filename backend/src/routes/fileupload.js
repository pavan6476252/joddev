const express = require('express')

const router = express.Router();

// Routes
app.post('upload', upload.single('image'), (req, res) => {
    if (req.file) {
        return res.json({ ok: "okay", file: req.file.filename });
    }
    return res.json({ failed: "fail" });
});


module.exports = router;