type Props = {
  children: React.ReactNode;
  href: string;
};

function LinkButton({ children, href }: Props) {
  return (
    <a
      className="text-md rounded-lg bg-secondary-500 p-4 font-bold text-gray-200 hover:bg-primary-500"
      href={href}
    >
      {children}
    </a>
  );
}

export default LinkButton;
