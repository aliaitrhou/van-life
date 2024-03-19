import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-6 w-full flex flex-col items-center">
        <div className="max-w-4xl">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
