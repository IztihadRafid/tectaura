import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Banner from "../../components/Header/Banner";
import Header from "../../components/Header/Header";
import AccessoriesDisplay from "../../components/AccessoriesDisplay/AccessoriesDisplay";

const Home = () => {
    const [category,setCategory] = useState("All")
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
           <AccessoriesDisplay category={category}></AccessoriesDisplay>
        </div>
    );
};

export default Home;