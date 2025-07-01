import { useEffect } from "react";
import { useSelector } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";

const Layout = () => {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className='min-h-screen h-full w-full relative'>
      <Head />
      <Body />
    </div>
  );
};

export default Layout;
