import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2026 Arjun Singh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
