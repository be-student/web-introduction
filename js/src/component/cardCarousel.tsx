import { useState } from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import movies from "../data/movie.json";
import Card from "./card";

function NextJsCarousel() {
  const [item, setItem] = useState(0);
  function toLeft() {
    setItem((item) => (item + 4) % 5);
  }
  function toRight() {
    setItem((item) => (item + 1) % 5);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Button
        variant="outlined"
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          fontSize: "50px",
          paddingBottom: "15px",
        }}
        color="black"
        onClick={toLeft}
      >
        &lt;
      </Button>
      <div style={{ width: "500px" }}>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          selectedItem={item}
          showStatus={false}
        >
          {movies.items.map((movie) => (
            <Card
              key={movie.title}
              imageUrl={movie.imageUrl}
              title={movie.title}
              prefer={movie.prefer}
            />
          ))}
        </Carousel>
      </div>
      <Button
        variant="outlined"
        style={{
          height: "70px",
          display: "flex",
          alignItems: "center",
          fontSize: "50px",
          paddingBottom: "15px",
        }}
        color="black"
        onClick={toRight}
      >
        &gt;
      </Button>
    </div>
  );
}
export default NextJsCarousel;
