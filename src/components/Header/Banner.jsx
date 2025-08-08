import keyboard from "../../assets/keyboards/A4tech FK25 Fstyler Wired White Multimedia Keyboard.webp";
import headphone from "../../assets/headphones/a4tech-bloody-mr720-naraka-rgb-white-wireless-11736167136.webp";
import mouse from "../../assets/mouses/A4TECH Bloody J95s 2-FIRE RGB ANIMATION Black Wired Gaming Mouse.webp";
import monitor from "../../assets/monitors/Dell Alienware 34 Inch (34.18 Inch Diagonal) 3K UWQHD QD-OLED Display Dual HDMI, DP, USB Curved Gaming Monito.webp";
import { useKeenSlider } from "keen-slider/react";
import "./style.css";
import "keen-slider/keen-slider.min.css";

// ✅ Custom carousel plugin with auto-rotate and slow transition
const carousel = (slider) => {
    const z = 300;
    let interval;

    function rotate() {
        const deg = 360 * slider.track.details.progress;
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }

    slider.on("created", () => {
        const deg = 360 / slider.slides.length;
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
        });
        rotate();

        // ✅ Auto-rotate every 2 seconds
        interval = setInterval(() => {
            slider.next();
        }, 2500);
    });

    slider.on("detailsChanged", rotate);

    slider.on("destroyed", () => {
        clearInterval(interval);
    });
};

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    );

    return (
        <div className="lg:flex items-center justify-center mx-auto mt-16 mb-32 w-[100%]">
            <div className="lg:w-[48%] text-center lg:text-left">
                <h2 className="lg:text-5xl md:text-3xl font-bold mb-3">Gear That Powers <br />Your Passion</h2>
                <p className="text-xl text-gray-600 mb-3">Explore cutting-edge accessories built for creators, <br />gamers, and pros. Every click, every detail—upgraded.</p>
                
            </div>
            <div className="wrapper ">
                <div className="scene ">
                    <div className="carousel keen-slider " ref={sliderRef}>
                        <div className="carousel__cell number-slide1 ">
                            <img className="transition duration-150 hover:scale-75 lg:hover:scale-125 w-80" src={keyboard} alt="Keyboard"/>
                        </div>
                        <div className="carousel__cell number-slide2">
                            <img className="transition duration-150 hover:scale-75 lg:hover:scale-125" src={mouse} alt="Mouse"/>
                        </div>
                        <div className="carousel__cell number-slide3">
                            <img className="transition duration-150 hover:scale-75 lg:hover:scale-125" src={headphone} alt="Headphone"/>
                        </div>
                        <div className="carousel__cell number-slide4">
                            <img className="transition duration-150 hover:scale-75 lg:hover:scale-125" src={monitor}alt="Monitor"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
