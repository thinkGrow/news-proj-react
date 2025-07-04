import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/leftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";
// import Navbar from "daisyui/components/navbar";

const HomeLayout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>

        <nav className="w-11/12 mx-auto my-3 sticky">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="grid grid-cols-12 w-11/12 mx-auto my-3">
        <aside className="col-span-3 top-2 h-fit sticky">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>

        <aside className="col-span-3 sticky top-2 h-fit ">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
