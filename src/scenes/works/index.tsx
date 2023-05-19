import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Slider from "./Slider";
import Artwork1 from "@/assets/artwork1.png";
import Artwork2 from "@/assets/artwork2.jpg";
import Artwork3 from "@/assets/artwork3.gif";
import Artwork4 from "@/assets/artwork4.jpg";
import Artwork5 from "@/assets/artwork5.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Works({ setSelectedPage }: Props) {
  return (
    <section
      id="works"
      className="mx-auto flex min-h-full w-5/6 flex-col py-20"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Works)}>
        <h1 className="mx-auto my-10 w-1/2 text-center text-4xl font-bold">
          Примеры работ
        </h1>
        <Slider
          images={[
            {
              url: Artwork1,
            },
            {
              url: Artwork2,
            },
            {
              url: Artwork3,
            },
            {
              url: Artwork4,
            },
            {
              url: Artwork5,
            },
          ]}
        ></Slider>
      </motion.div>
    </section>
  );
}

export default Works;
