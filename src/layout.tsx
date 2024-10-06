import Header from "./components/navbar";

interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
