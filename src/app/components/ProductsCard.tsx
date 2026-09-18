import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsCard = ({ product }) => {

    const { id, name, image, description } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image src={image} width={500} height={500} alt={name} className="w-full h-80 object-cover" />
                    {/* <img
                        src={image} className="w-full h-[350px] object-cover"
                        alt="Shoes" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link href={`/products/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;