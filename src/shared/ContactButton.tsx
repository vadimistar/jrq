type Props = {
  children: React.ReactNode;
  href: string;
};

function ContactButton({ children, href }: Props) {
  return (
    <a
      className="h-10 w-10 rounded-full bg-secondary-500 hover:bg-primary-500"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
}

export default ContactButton;
