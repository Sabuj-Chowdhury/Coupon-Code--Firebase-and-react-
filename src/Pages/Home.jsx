import { useLoaderData } from "react-router-dom";
import BannerWithSlider from "../Components/BannerWithSlider";
import TopBrands from "../Components/TopBrands";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      {/* banner with slides */}
      <BannerWithSlider></BannerWithSlider>
      {/* brands */}
      <TopBrands data={data}></TopBrands>
    </div>
  );
};

export default Home;
