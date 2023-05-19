import ContactButton from "./ContactButton";
import DiscordLogo from "@/assets/discordlogo.png";

type Props = {};

function TelegramButton({}: Props) {
  return (
    <ContactButton href="https://discordapp.com/users/777478898971705374">
      <img alt="discordlogo" src={DiscordLogo} className="w-full p-2" />
    </ContactButton>
  );
}

export default TelegramButton;
