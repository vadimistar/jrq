import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: SelectedPage;
  text: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, text, selectedPage, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className={`${selectedPage === page ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300
            `}
      href={`#${page}`}
      onClick={() => setSelectedPage(page)}
    >
      {text}
    </AnchorLink>
  );
}

export default Link;
