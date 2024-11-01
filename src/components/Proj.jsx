

import React from 'react';

function Proj() {
    const products = [
        { id: 8, name: "laptop", price: "$900" },
        { id: 9, name: "biscuits", price: "$9" },
        { id: 11, name: "apples", price: "$2" }
    ];

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h1>Name: {product.name}</h1>
                    <h1>Price: {product.price}</h1>
                </div>
            ))}
        </div>
    );
}

export default Proj;
