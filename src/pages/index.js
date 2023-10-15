import Hero from "@/component/home/hero";
import Products from "@/component/home/products";
import Categories from "@/component/home/categories";
import FeateredCollections from "@/component/home/feateredCollections";
import FearedBrands from "@/component/home/fearedBrands";
import Banner from "@/component/home/banner";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeateredCollections />
      <FearedBrands />
      <Products />
      <Banner />
    </>
  );
};

export default Home;
