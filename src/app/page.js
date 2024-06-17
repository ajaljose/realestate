import Apartments from "./components/Apartments";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './styles/main.scss';
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Apartments/>
    </main>
  );
}
