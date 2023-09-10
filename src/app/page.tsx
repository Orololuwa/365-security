"use client";

import SplitWithImage from "./components/features/2-cols-with-img";
import GridListWithHeading from "./components/features/grid-listing";
import SimpleThreeColumns from "./components/features/simple-3-columns";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Hero />
      <SplitWithImage />
      <SimpleThreeColumns />
      <GridListWithHeading />
      <Footer />
    </>
  );
}
