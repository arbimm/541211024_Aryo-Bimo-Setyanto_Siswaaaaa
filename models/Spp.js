const mongoose = require('mongoose')

const SppSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Isikan nama'],
    },
    bulan: {
        type: String,
        required: [true, 'Isikan bulan'],
    },
    spp: {
        type: Number,
        required: [true, 'masukan spp bulan ini'],
    },
    nis: {
        type: Number,
        required: [true, 'masukan spp bulan ini'],
    },
    email: {
        type: String,
        required: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Silahkan isikan valid!']
    }
})

module.exports = mongoose.model('Spp', SppSchema)

