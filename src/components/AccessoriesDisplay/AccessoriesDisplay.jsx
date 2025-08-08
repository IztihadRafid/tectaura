import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import AccessoriesItem from "../AccessoriesItem/AccessoriesItem";


const AccessoriesDisplay = ({category}) => {
    const {accessories_list}= useContext(StoreContext)
  
    return (
        <div className="md:grid lg:grid-cols-4  md:grid-cols-2 flex flex-col justify-center items-center gap-5 mx-auto md:w-[90%] lg:w-[90%] ">
            {
                accessories_list.map((item,index)=>{
                    return <AccessoriesItem key={index} id={item?.id} name={item?.name} description={item?.description} image={item?.image} price={item?.price} category={item?.category}></AccessoriesItem>
                })
            }
        </div>
    );
};

export default AccessoriesDisplay;