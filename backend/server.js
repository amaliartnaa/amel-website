const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const Contact = require('models/contact.js');
const uri = "mongodb+srv://dbUser:lemacantik4321@atlascluster.sk30kqe.mongodb.net/?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// koneksi ke mongodb
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// penanganan kesalahan koneksi
const db = mongoose.connection;
db.on('open', () => {
    console.log('MongoDB connected successfully');
})

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phoneNumber, message } = req.body;

        // validasi data
        if (!name || !email || !phoneNumber || !message) {
            return res.status(400).json({ success: false, message: 'Harus diisi semua'});
        }

        console.log('Received data:', { name, email, phoneNumber, message});

        // simpan data ke mongodb
        const newContact = new Contact({ name, email, phoneNumber, message });
        await newContact.save();

        // konfigurasi nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'amaliartnaa41@gmail.com',
                pass: 'lemacantik4321'
            },
        });

        // konfigurasi email yg akan dikirim
        const mailOptions = {
            from: 'amaliartnaa41@gmail.com',
            to: email,
            subject: 'New Contact From Submission',
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone Number: ${phoneNumber}</p>
                <p>Message: ${message}</p>
            `,
        }

        // kirim email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        // respon ke fe
        res.status(200).json({ success: true, message: 'Pesan berhasil dikirim!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Terjadi kesalahan'});
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));