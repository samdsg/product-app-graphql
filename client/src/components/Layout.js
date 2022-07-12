const Layout = ({ children }) => {
  return (
    <div className="container mx-auto h-screen overflow-hidden">
      <div className="lg:w-5/12 lg:border-2 md:mx-auto px-5 py-10 md:my-10">{children}</div>
    </div>
  );
};

export default Layout;
