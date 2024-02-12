import { Button, Carousel } from "antd";
import { Link } from "react-router-dom";
import "../Styles/home.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Home = () => {
    const carouselItems = [
        {
            id: 1,
            image: "/images/background2.webp",
        },
        {
            id: 2,
            image: "/images/background1.webp",
        }
    ]
    return (
        <div className="home">
            <Carousel
                autoplay
                autoplaySpeed={2000}
                effect="fade"
            >
                {carouselItems.map((item) => (
                    <div key={item.id}>
                        <LazyLoadImage
                            src={item.image}
                            alt={`Img${item.id + 1}`}
                            effect="blur"
                        />
                        <div className="overlay">
                            Stronger Everyday!
                            <Button>
                                <Link to="/exercise" >EXPLORE EXERCISES</Link>
                            </Button>
                        </div>
                    </div>

                ))}
            </Carousel>
        </div>
    );
}

export default Home;