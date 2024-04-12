import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (cesta) => {
    console.log("Poslano do rodice: " + cesta.journeyId);
//    alert(cesta.code);
    setJourney(cesta);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey?.journeyId && <JourneyDetail journey={journey?.stops} />}
      
    </main>
  );
};
