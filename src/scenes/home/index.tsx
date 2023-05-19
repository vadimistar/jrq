import { SelectedPage } from "@/shared/types";
import HomePage from "@/assets/homepage.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  return (
    <section id="home" className="gap-16 py-10 pb-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className="z-10 mt-32 flex flex-col gap-5 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-6xl font-bold">jrq?</p>
            <p className="text-md mt-8">Красивые арты по низким ценам 😍</p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <img alt="homePage" src={HomePage} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
