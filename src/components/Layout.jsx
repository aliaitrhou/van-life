import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mt-6 w-full flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
