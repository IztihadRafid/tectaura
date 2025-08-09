import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { menu_list } from "../../assets/icons/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div>
      <h1 className="md:text-5xl text-3xl text-center font-bold p-10">
        Explore Our Best Collection
      </h1>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4} // show 4 at a time (desktop)
        navigation
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {menu_list.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="flex flex-col items-center"
            >
              <img
                className={`${
                  category === item.menu_name
                    ? "border-4 p-2 border-gray-700"
                    : ""
                } border border-gray-600 rounded-full w-52 hover:scale-110 transition duration-200 cursor-pointer`}
                src={item?.menu_image}
                alt="image"
              />
              <p className="text-center p-3">{item?.menu_name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <hr className="border-1 text-gray-400 my-7 max-w-6xl mx-auto" />
    </div>
  );
};

export default ExploreMenu;
