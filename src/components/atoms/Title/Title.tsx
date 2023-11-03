type ITitleProps = {
  children: React.ReactNode
};

function Title({ children }: ITitleProps) {
  return (
    <h1 className="font-sans text-2xl text-white  font-bold">{children}</h1>
  );
}

export default Title;
