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
                    <img
                        src="https://i.ibb.co/GTG2zjz/images-1.png"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <div className="flex justify-between">
                        <h2 className="card-title"> {name} </h2>
                        <h3 > {new Date(createdAt).toLocaleDateString()} </h3>
                    </div>
                    <h2> {category} </h2>
                    <p> {description} </p>
                    <p>Price: ${price} </p>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <div className="card-actions">
                        <button className="btn btn-primary">Product details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;