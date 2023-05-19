import ContactButton from "./ContactButton";
import TelegramLogo from "@/assets/telegramLogo.png";

type Props = {};

function TelegramButton({}: Props) {
  return (
    <ContactButton href="https://t.me/Generator483849">
      <img alt="tglogo" src={TelegramLogo} className="w-full p-2" />
    </ContactButton>
  );
}

export default TelegramButton;
