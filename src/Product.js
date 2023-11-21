import React from 'react';

const ProductItem = ({ imageSrc, roomType }) => {
    return (
        <div className="product-item">
            <img src={imageSrc} alt={`Image of ${roomType}`} />
            <p>{roomType}</p>
        </div>
    );
};

const Product = () => {

    const product = [
        { roomType: 'Standard', imageSrc: require('./Standar.jpeg') },
        { roomType: 'Deluxe', imageSrc: require('./Deluxe.jpg') },
        { roomType: 'Family', imageSrc: require('./Family.jpg') },
    ];


    return (
        <div className="product">
            {product.map((product, index) => (
                <ProductItem key={index} roomType={product.roomType} imageSrc={product.imageSrc} />
            ))}
        </div>
    );
};

export default Product;