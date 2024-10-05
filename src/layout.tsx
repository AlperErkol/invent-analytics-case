interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <header className=" flex items-center gap-12">
        <div>
          <a href="/">
            <img
              src="https://www.inventanalytics.com/Content/images/logo.svg"
              alt="Invent Analytics Logo displaying on Invent Analytics Frontend Case application."
            />
          </a>
        </div>
        <div className="flex gap-6 h-full py-6">
          <div className="p-2 rounded-md">
            <a href="/">Home Page</a>
          </div>
          <div className="p-2 rounded-md">
            <a href="/content?page=1">All Contents</a>
          </div>
        </div>
      </header>
      {children}
      <footer className="footer"></footer>
    </main>
  );
};

export default Layout;
