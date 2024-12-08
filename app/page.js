import About from "./components/Banner/About/About";
import Banner from "./components/Banner/Banner";
import Button from "./components/Banner/Button";
import Bestdishes from "./components/Banner/Dishes/Bestdishes";

import Nav from "./components/Banner/Nav";
import Category from "./components/Banner/Shop/Category";
import Shop from "./components/Banner/Shop/Shop";


export default function Home() {
  return (
  <div className="container mx-auto ">
    <Nav></Nav>
    <Banner></Banner>
    <Bestdishes></Bestdishes>
   <About></About>
 <Shop></Shop>
 <Category></Category>
  </div>
  );
}
