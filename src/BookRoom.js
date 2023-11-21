    import React, { useState, useEffect } from 'react';
    import './BookRoom.css';

    const BookRoom = () => {
        const [hargaStandar] = useState(500000);
        const [formData, setFormData] = useState({
            namaPemesan: '',
            jenisKelamin: 'laki',
            nomorIdentitas: '',
            tipeKamar: 'standar',
            harga: 0,
            tanggalPemesanan: '',
            durasi: '',
            termasukBreakfast: false,
        });
        const [totalBayar, setTotalBayar] = useState(0);
        const [error, setError] = useState('');
        const [savedData, setSavedData] = useState([]);

        useEffect(() => {
            setHargaTipeKamar(formData.tipeKamar);
        }, [formData.tipeKamar]);

        const setHargaTipeKamar = (tipeKamar) => {
            let harga = 0;
            switch (tipeKamar) {
                case 'standar':
                    harga = hargaStandar;
                    break;
                case 'deluxe':
                    harga = 800000;
                    break;
                case 'family':
                    harga = 1200000;
                    break;
                default:
                    harga = 0;
            }
            setFormData({ ...formData, harga });
        };

        const handleInputChange = (e) => {
            const { name, value } = e.target;


            if (name === 'nomorIdentitas' && value.length !== 16) {
                setError('Nomor Identitas wajib 16 digit');
            } else {
                setError('');
            }

            setFormData({ ...formData, [name]: value });

            if (name === 'tipeKamar') {
                setHargaTipeKamar(value);
            }
        };


        const handleCheckboxChange = (e) => {
            const { name, checked } = e.target;
            setFormData({ ...formData, [name]: checked });
        };
        const handleSimpan = () => {
            if (totalBayar > 0) {
                setSavedData((prevData) => [
                    ...prevData,
                    {
                        namaPemesan: formData.namaPemesan,
                        nomorIdentitas: formData.nomorIdentitas,
                        tanggalPemesanan: formData.tanggalPemesanan,
                        totalBayar: totalBayar,
                    },
                ]);

                // Reset formulir
                resetFormulir();
            } else {
                alert('Total bayar harus dihitung terlebih dahulu sebelum menyimpan.');
            }
        };

        const handleCancel = () => {

            resetFormulir();
        };

        const resetFormulir = () => {
            setFormData({
                namaPemesan: '',
                jenisKelamin: 'laki',
                nomorIdentitas: '',
                tipeKamar: 'standard',
                harga: 0,
                tanggalPemesanan: '',
                durasi: '',
                termasukBreakfast: false,
            });
            setTotalBayar(0);
            setError('');
        };

        const hitungTotalBayar = () => {
            let total = parseInt(formData.durasi, 10) * formData.harga;

            if (parseInt(formData.durasi, 10) > 3) {
                total *= 0.9;
            }

            if (formData.termasukBreakfast) {
                total += 80000;
            }

            setTotalBayar(total);
        };

        const handleHitungTotalBayar = () => {
            setError('');
            hitungTotalBayar();
        };


        const handleSubmit = (e) => {
            e.preventDefault();
            setError('');
            hitungTotalBayar();
        };


        return (
            <div className="App">
                <h1>Pemesanan Kamar Kempinski</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <div className="horizontal-label">
                            <label className="input-label">Nama Pemesan:</label>
                            <input
                                type="text"
                                name="namaPemesan"
                                value={formData.namaPemesan}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>

                        <div className="horizontal-label">
                            <label className="input-label">Jenis Kelamin:</label>
                            <div className="radio-group">
                                <label>
                                    <input
                                        type="radio"
                                        name="jenisKelamin"
                                        value="laki"
                                        checked={formData.jenisKelamin === 'laki'}
                                        onChange={handleInputChange}
                                    />
                                    Laki-laki
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="jenisKelamin"
                                        value="perempuan"
                                        checked={formData.jenisKelamin === 'perempuan'}
                                        onChange={handleInputChange}
                                    />
                                    Perempuan
                                </label>
                            </div>
                        </div>

                        <div className="horizontal-label">
                            <label className="input-label">Nomor Identitas:</label>
                            <input
                                type="text"
                                name="nomorIdentitas"
                                value={formData.nomorIdentitas}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                            {error && <p className="error">{error}</p>}
                        </div>

                        <div className="horizontal-label">
                            <label className="input-label">Tipe Kamar:</label>
                            <select
                                name="tipeKamar"
                                value={formData.tipeKamar}
                                onChange={handleInputChange}
                                className="input-field"
                            >
                                <option value="standard">Standard</option>
                                <option value="deluxe">Deluxe</option>
                                <option value="family">Family</option>
                            </select>
                        </div>

                        <div className="horizontal-label">
                            <label className="input-label">Harga:</label>
                            <input
                                type="text"
                                name="harga"
                                value={new Intl.NumberFormat('id-ID').format(formData.harga)}
                                readOnly
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className="form-data">
                        <div className="horizontal-label">
                            <label className="input-label">Tanggal Pemesanan:</label>
                            <input
                                type="text"
                                name="tanggalPemesanan"
                                value={formData.tanggalPemesanan}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>

                        <div className="horizontal-label">
                            <label className="input-label">Durasi Menginap:</label>
                            <input
                                type="text"
                                name="durasi"
                                value={formData.durasi}
                                onChange={handleInputChange}
                                className="input-field"
                            />
                        </div>

                        <div className="horizontal-label">
                            <label className="input-label">Termasuk Breakfast:</label>
                            <input
                                type="checkbox"
                                name="termasukBreakfast"
                                checked={formData.termasukBreakfast}
                                onChange={handleCheckboxChange}
                            />
                        </div>

                        <div className="button-container">
                            <button type="button" className="calculate-button" onClick={handleHitungTotalBayar}>
                                Hitung Total Bayar
                            </button>
                            <button type="button" className="save-button" onClick={handleSimpan}>
                                Simpan
                            </button>
                            <button type="button" className="cancel-button" onClick={handleCancel}>
                                Batal
                            </button>
                        </div>


                    </div>
                </form>

                <div className="saved-data">
                    <h2>Data Tersimpan</h2>
                    <ul>
                        {savedData.map((data, index) => (
                            <li key={index}>
                                <strong>{data.namaPemesan}</strong> - {data.tanggalPemesanan} - {data.nomorIdentitas}- Total Bayar: Rp{' '}
                                {new Intl.NumberFormat('id-ID').format(data.totalBayar)}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3>Total Bayar: Rp {totalBayar.toLocaleString('id-ID')}</h3>
                </div>
            </div>
        );
    };

    export default BookRoom;
