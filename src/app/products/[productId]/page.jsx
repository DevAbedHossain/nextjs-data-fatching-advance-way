import Image from 'next/image';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    return products.map(product => ({ productId: product.id }))
}

const ProductDetailsPage = async ({ params }) => {
    const { productId } = await params;

    const res = await fetch(`http://localhost:5000/products/${productId}`);
    const product = await res.json();

    const { id, name, image, price, description, category, rating } = product;

    return (
        <div>
            <h2>Product Details Page</h2>
            <hr />
            <div className="card card-side bg-base-100 w-6/12 shadow-sm mx-auto my-5">
                <figure>
                    <Image src={image} width={500} height={500} alt={name} className="w-full h-80 object-cover"></Image>
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{rating}</p>
                    <p>{category}</p>
                    <p>{price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;