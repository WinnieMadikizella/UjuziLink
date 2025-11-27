import { Toaster, toast } from 'sonner';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroBannerUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/085fda21-23a6-4229-836b-7eeb60dc28a7/hero-banner-zo0ykl1-1764240323909.webp";
  const intelligenceEngineUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/085fda21-23a6-4229-836b-7eeb60dc28a7/intelligence-engine-l68h4tb-1764240331699.webp";
  const mentorsShowcaseUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/085fda21-23a6-4229-836b-7eeb60dc28a7/mentors-showcase-iw0lna3-1764240339547.webp";
  const successStoriesUrl = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/085fda21-23a6-4229-836b-7eeb60dc28a7/success-stories-stc2np2-1764240347384.webp";

  const handleRequestDemo = () => {
    toast.success('Thank you for your interest! We will be in touch shortly.');
  };

  const NavLinks = () => (
    <>
      <a href="#about" className="hover:text-primary transition-colors">About</a>
      <a href="#mentors" className="hover:text-primary transition-colors">Mentors</a>
      <a href="#success" className="hover:text-primary transition-colors">Success Stories</a>
    </>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster richColors />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} navLinks={NavLinks} />
      <main>
        <HeroSection heroBannerUrl={heroBannerUrl} onRequestDemo={handleRequestDemo} />
        <AboutSection intelligenceEngineUrl={intelligenceEngineUrl} />
        <MentorsSection mentorsShowcaseUrl={mentorsShowcaseUrl} />
        <SuccessStoriesSection successStoriesUrl={successStoriesUrl} />
        <CTASection onRequestDemo={handleRequestDemo} />
      </main>
      <Footer />
    </div>
  );
};

const Header = ({ isMenuOpen, setIsMenuOpen, navLinks }) => (
  <header className="bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-primary">UjuziLink</a>
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks()}
        <button onClick={() => toast.info('Mentor sign-up will be available soon!')} className="font-semibold hover:text-primary transition-colors">Become a Mentor</button>
        <button onClick={() => toast.info('Mentee sign-up will be available soon!')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
          Join as Mentee <ArrowRight size={16} />
        </button>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden bg-background/90 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks()}
          <button onClick={() => toast.info('Mentor sign-up will be available soon!')} className="font-semibold hover:text-primary transition-colors text-left">Become a Mentor</button>
          <button onClick={() => toast.info('Mentee sign-up will be available soon!')} className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
            Join as Mentee <ArrowRight size={16} />
          </button>
        </nav>
      </div>
    )}
  </header>
);

const HeroSection = ({ heroBannerUrl, onRequestDemo }) => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: `url(${heroBannerUrl})` }}>
    <div className="absolute inset-0 bg-black/60"></div>
    <div className="relative z-10 container mx-auto px-4 text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Your Net Worth is Your Skillset.</h1>
      <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">UjuziLink is a data-driven mentorship platform transforming Africa’s skill-to-job gap into measurable, predictable career success.</p>
      <button onClick={onRequestDemo} className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transition-transform hover:scale-105">Request a Demo</button>
    </div>
  </section>
);

const AboutSection = ({ intelligenceEngineUrl }) => (
  <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">The UjuziLink Intelligence Engine</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">We are more than a platform; we are an Intelligence Engine. We leverage data to map out clear, predictable pathways from learning to earning.</p>
        <p className="text-slate-600 dark:text-slate-300">Our "Data Moat" is built on a foundation of continuous skills assessment, mentorship efficacy tracking, and real-world job market analysis. This allows us to provide a Predictive Placement Score (PPS) that guides learners on the most efficient path to their desired career.</p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-slate-600 dark:text-slate-300">
          <li>Personalized learning pathways based on your goals.</li>
          <li>Efficacy metrics for mentors to ensure quality.</li>
          <li>Predictive analytics to forecast career success.</li>
        </ul>
      </div>
      <div>
        <img src={intelligenceEngineUrl} alt="Intelligence Engine Abstract Art" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  </section>
);

const MentorsSection = ({ mentorsShowcaseUrl }) => (
  <section id="mentors" className="py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Mentors</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">Learn from the best. Our mentors are industry leaders dedicated to your success.</p>
      <div className="max-w-5xl mx-auto">
        <img src={mentorsShowcaseUrl} alt="Showcase of UjuziLink Mentors" className="rounded-lg shadow-xl" />
      </div>
    </div>
  </section>
);

const SuccessStoriesSection = ({ successStoriesUrl }) => (
  <section id="success" className="py-20 bg-slate-50 dark:bg-slate-800">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">From Learning to Leading</h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">Our data-driven approach delivers results. See the impact UjuziLink is making across the continent.</p>
        <div className="max-w-5xl mx-auto">
          <img src={successStoriesUrl} alt="Collage of successful African professionals" className="rounded-lg shadow-xl" />
        </div>
    </div>
  </section>
);

const CTASection = ({ onRequestDemo }) => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Unlock Your Potential?</h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">Join UjuziLink today and take the first step towards a predictable and successful career path. Whether you're a learner or a mentor, you have a role to play.</p>
      <div className="flex flex-wrap justify-center gap-4">
        <button onClick={onRequestDemo} className="bg-white text-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-slate-100 transition-transform hover:scale-105">Request a Demo</button>
        <button onClick={() => toast.info('Sign up will be available soon!')} className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/10 transition-transform hover:scale-105">Become a Mentor</button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-900 text-slate-400">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">UjuziLink</h3>
          <p>Transforming Africa’s skill-to-job gap.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#mentors" className="hover:text-white">Mentors</a></li>
            <li><a href="#success" className="hover:text-white">Success Stories</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} UjuziLink. All rights reserved. An African initiative for a brighter future.</p>
      </div>
    </div>
  </footer>
);

export default App;