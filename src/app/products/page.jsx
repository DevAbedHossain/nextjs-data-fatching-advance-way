import React from 'react';
import ProductsCard from '../components/ProductsCard';
import { error } from 'next/dist/build/output/log';

const getProducts = async () => {
    // const res = await fetch("http://localhost:5000/products", { cache: "force-cache" }); //Cache change after hard refresh
    const res = await fetch("http://localhost:5000/products", { cache: "no-store" }); // data change instantly
    if (!res.ok) {
        throw new Error("Failed to fetch Products")
    }
    return res.json();
}

const ProductPage = async () => {

    const products = await getProducts();

    return (
        <div>
            <h2>All Products: {products.length}</h2>

            <div className="grid grid-cols-4 gap-4">
                {
                    products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }
            </div>
        </div>
    );
};

export default ProductPage;