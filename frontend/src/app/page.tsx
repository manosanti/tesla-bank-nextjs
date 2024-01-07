// Components
import Advantages from "./components/Advantages";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OpenYourAccount from "./components/OpenYourAccount";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <OpenYourAccount />
      <Advantages />
      <Testimonials />
    </div>
  );
}
