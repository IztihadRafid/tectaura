import { useContext } from "react";
import { assets } from "../../assets/icons/assets";
import { StoreContext } from "../../context/StoreContext";

const AccessoriesItem = ({ id, name, image, description, price }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
    return (
        <div className="card bg-base-100 w-80  shadow-xl">
            <figure><img className='w-52 ' src={image} alt="accessories" /> </figure>
            {
                !cartItems[id] ?
                    <img className="w-[35px] ml-3 border-2 border-gray-400 rounded-full " onClick={() => addToCart(id)} src={assets.add_icon_white}></img> :
                    <div className="flex justify-around w-1/3 items-center ml-3 rounded-4xl px-4 py-2 bg-gray-100">
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
            }
            <div className="card-body">
                <h2 className="font-semibold">{name}</h2>
                <p>{description.length > 150 ? description.slice(0, 150) + "..." : description}</p>
                <p className='font-semibold mt-2'>Price {price}Tk</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-soft ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AccessoriesItem;