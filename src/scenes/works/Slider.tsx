import { Slide } from "react-slideshow-image";

type Image = {
  url: string;
};

type Props = {
  images: Array<Image>;
};

function Slider({ images }: Props) {
  return (
    <div className="slide-container">
      <Slide>
        {images.map((image, index) => (
          <div key={index}>
            <div
              className="w-full justify-center bg-cover bg-no-repeat align-middle"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            >
              <img className="w-full overflow-hidden" src={image.url}></img>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slider;
