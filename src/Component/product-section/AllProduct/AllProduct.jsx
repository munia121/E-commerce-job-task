/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct";

const AllProduct = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://job-task-server-lyart.vercel.app/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    console.log(products)

    return (
        <div className="mt-28 lg:w-[1400px] mx-auto">
            <h1 className="text-center text-3xl font-bold"></h1>
            <div className="grid lg:grid-cols-3 gap-10 mt-8">
                {
                    // eslint-disable-next-line no-undef
                    products?.map(product=> <SingleProduct product={product}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default AllProduct;