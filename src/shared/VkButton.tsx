import ContactButton from "./ContactButton";
import VkLogo from "@/assets/vklogo.png";

type Props = {};

function VkButton({}: Props) {
  return (
    <ContactButton href="https://vk.com/jrqoff">
      <img alt="vklogo" src={VkLogo} className="w-full p-2" />
    </ContactButton>
  );
}

export default VkButton;
