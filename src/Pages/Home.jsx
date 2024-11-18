import { useLoaderData } from "react-router-dom";
import BannerWithSlider from "../Components/BannerWithSlider";
import TopBrands from "../Components/TopBrands";
import BrandsOnSale from "../Components/BrandsOnSell";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      {/* banner with slides */}
      <BannerWithSlider></BannerWithSlider>
      {/* brands */}
      <TopBrands data={data}></TopBrands>

      <BrandsOnSale data={data}></BrandsOnSale>
    </div>
  );
};

export default Home;
