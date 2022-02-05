import type { NextPage } from 'next';
import Head from 'next/head';

//! Components
import Hero from '../components/Hero';
import ProductDescription from 'components/ProductDescription';
import About from 'components/About';
import FeaturedOn from 'components/FeaturedOn';
import Carousel from 'components/Carousel';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cyberpunk</title>
      </Head>
      <main className="m-auto max-w-[3000px] scroll-smooth bg-black">
        <Hero />
        <ProductDescription />
        <FeaturedOn />
        <Carousel />
        <About />
      </main>

      <footer className="m-auto max-w-[3000px] border-t border-white bg-black">
        <div className="flex items-center justify-center py-4 text-white">
          <p>Copyright © {new Date().getFullYear()} Labs Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
