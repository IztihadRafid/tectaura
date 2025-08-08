import { menu_list } from "../../assets/icons/assets";
const ExploreMenu = ({category,setCategory}) => {
    return (
        <div>
            <h1 className="md:text-5xl text-3xl text-center font-bold p-10">Explore Our Best Collection</h1>
            <div className="flex items-center justify-center">
                <div className=" grid lg:grid-cols-4 gap-10 md:grid-cols-2 max-w-7xl mx-auto">
                    {
                        menu_list.map((item, index) => {
                            return (
                                <div onClick={()=>setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)} key={index} className="">
                                    <img className={`${category === item.menu_name ? "border-4 p-2 border-gray-700" : ""} border border-gray-600 rounded-full w-52 hover:scale-110 transition duration-200 cursor-pointer`} src={item?.menu_image} alt="image" />
                                    <p className="text-center p-3">{item?.menu_name}</p>
                                </div>
                            )
                        }
                        )
                    }
                </div>
               
            </div>
            <hr className="border-1 text-gray-400 my-7 max-w-6xl mx-auto"/>
        </div>
    );
};

export default ExploreMenu;