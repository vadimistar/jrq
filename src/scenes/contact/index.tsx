import TelegramButton from "@/shared/TelegramButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import DiscordButton from "@/shared/DiscordButton";
import VkButton from "@/shared/VkButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Contact({ setSelectedPage }: Props) {
  return (
    <section id="contact" className="mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="rounded-md border-4 border-background-50">
          <div className="m-10 flex flex-col text-center">
            <div className="text-2xl font-bold">Связаться со мной</div>
            <div className="m-10 flex justify-center gap-10 align-middle">
              <TelegramButton />
              <DiscordButton />
              <VkButton />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
