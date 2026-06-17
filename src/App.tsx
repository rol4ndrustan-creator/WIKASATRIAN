import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OpeningExperience from './components/OpeningExperience';
import HeroJourney from './components/HeroJourney';
import PendopoHub from './components/PendopoHub';
import PhilosophySection from './components/PhilosophySection';
import RoomExplorer from './components/RoomExplorer';
import ProgramJourney from './components/ProgramJourney';
import VirtualTourSection from './components/VirtualTourSection';
import WhyWikasatrian from './components/WhyWikasatrian';
import ConsultationJourney from './components/ConsultationJourney';

function App() {
  const [entered, setEntered] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => scrollTo('hero'), 50);
  };

  const handleNavigate = (id: string) => {
    if (!entered) setEntered(true);
    setTimeout(() => scrollTo(id), entered ? 0 : 80);
  };

  return (
    <>
      {!entered && <OpeningExperience onEnter={handleEnter} />}

      {entered && (
        <>
          <Navbar onNavigate={handleNavigate} />
          <main>
            <HeroJourney
              onPrimary={() => scrollTo('lobby')}
              onSecondary={() => scrollTo('rooms')}
            />
            <PendopoHub onNavigate={handleNavigate} />
            <PhilosophySection />
            <RoomExplorer onConsult={() => scrollTo('consultation')} />
            <ProgramJourney onConsult={() => scrollTo('consultation')} />
            <VirtualTourSection onConsult={() => scrollTo('consultation')} />
            <WhyWikasatrian />
            <ConsultationJourney />
          </main>
          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </>
  );
}

export default App;
