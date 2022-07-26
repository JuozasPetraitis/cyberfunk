import type { NextPage } from "next";
import Head from "next/head";

//! Components
import ProductDescription from "components/ProductDescription";
import About from "components/About";
import SocialMedia from "components/SocialMediaAtom";
import HeroAtom from "components/HeroAtom";
import CarouselAtom from "components/CarouselAtom";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cyberfunk</title>
      </Head>

      <main className="mx-auto max-w-screen-3xl">
        <HeroAtom />
        <ProductDescription />
        <SocialMedia />
        <CarouselAtom />
        <About />
        <footer className="border-white bg-black py-4 text-center text-white">Copyright © {new Date().getFullYear()} Labs Inc.</footer>
      </main>
    </div>
  );
};

export default Home;
