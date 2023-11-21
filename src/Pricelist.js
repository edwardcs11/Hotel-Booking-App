import React from 'react';
import './Pricelist.css';
const PriceList = () => {

    const priceData = [
        { nomor: 1, tipeKamar: 'Standar', harga: 500000 },
        { nomor: 2, tipeKamar: 'Deluxe', harga: 800000 },
        { nomor: 3, tipeKamar: 'Family', harga: 1200000 },
    ];

    return (
        <div className="price-list">
            <h2>Daftar Harga</h2>
            <table>
                <thead>
                <tr>
                    <th>Nomor</th>
                    <th>Tipe Kamar</th>
                    <th>Harga</th>
                </tr>
                </thead>
                <tbody>
                {priceData.map((item) => (
                    <tr key={item.nomor}>
                        <td>{item.nomor}</td>
                        <td>{item.tipeKamar}</td>
                        <td>{new Intl.NumberFormat('id-ID').format(item.harga)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default PriceList;
