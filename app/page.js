import Banner from "./components/Banner/Banner";
import Button from "./components/Banner/Button";
import Bestdishes from "./components/Banner/Dishes/Bestdishes";

import Nav from "./components/Banner/Nav";


export default function Home() {
  return (
  <div className="container mx-auto ">
    <Nav></Nav>
    <Banner></Banner>
    <Bestdishes></Bestdishes>
 
  </div>
  );
}
