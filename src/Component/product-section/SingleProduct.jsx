/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const SingleProduct = ({ product }) => {
    // eslint-disable-next-line no-unused-vars
    const { brand, category, createdAt, description, image, name, price, rating } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} className="rounded-xl h-[300px] w-full" />
                </figure>
                <div className="card-body relative">
                    <h2 className="card-title"> {name} </h2>
                    <div className="flex justify-between">
                        <h3>Brand: {brand} </h3>
                        <h3 className="">Created At- {new Date(createdAt).toLocaleDateString()} </h3>
                    </div>
                    <h2>Category: {category} </h2>
                    {/* <p> {description} </p> */}
                    <p className="font-bold">Price: ${price} </p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Product details</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;