import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="font-sans antialiased text-brand-black bg-white selection:bg-brand-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <CTA />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
