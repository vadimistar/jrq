import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Logo from "@/assets/logo.jpg";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import TelegramButton from "@/shared/TelegramButton";
import DiscordButton from "@/shared/DiscordButton";
import VkButton from "@/shared/VkButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Navbar({ isTopOfPage, selectedPage, setSelectedPage }: Props) {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navbarBackground = isTopOfPage ? "" : "bg-background-50 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} className={`w-10 rounded-full`} />

            {/* RIGHT SIDE*/}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* INNER LEFT */}
                <div className={`${flexBetween} gap-6 text-sm`}>
                  <Link
                    page={SelectedPage.Home}
                    text="Главная"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.Works}
                    text="Мои работы"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page={SelectedPage.Contact}
                    text="Связаться со мной"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* INNER RIGHT */}
                <div className={`${flexBetween} gap-4`}>
                  <TelegramButton />
                  <DiscordButton />
                  <VkButton />
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-background-50 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
            </button>
          </div>

          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page={SelectedPage.Home}
              text="Главная"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Works}
              text="Мои работы"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page={SelectedPage.Contact}
              text="Связаться со мной"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
