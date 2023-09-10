import SplitWithImage from "./components/features/2-cols-with-img";
import GridListWithHeading from "./components/features/grid-listing";
import SimpleThreeColumns from "./components/features/simple-3-columns";
import SimpleCardWrapper from "./components/features/simple-card-wrapper";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitWithImage />
      <SimpleThreeColumns />
      <GridListWithHeading />
      <SimpleCardWrapper />
      <Footer />
    </>
  );
}
