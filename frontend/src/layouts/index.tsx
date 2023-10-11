import Navbar from "../components/navbar";
const Layout = ({
  children,
  navbarValue,
  setNavbarValue,
  backdropHanlder,
  setBackdropHanlder,
}: any) => {
  return (
    <>
      <Navbar
        setNavbarValue={setNavbarValue}
        navbarValue={navbarValue}
        backdropHanlder={backdropHanlder}
        setBackdropHanlder={setBackdropHanlder}
      />
      <div className="absolute top-[68px] bg-gray-50 w-full h-full">
        {children}
      </div>
    </>
  );
};

export default Layout;
