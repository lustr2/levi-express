import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';
import { SelectedSeat } from '../../components/SelectedSeat';
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (cesta) => {
    console.log("Poslano do rodice: " + cesta.journeyId);
//    alert(cesta.code);
    setJourney(cesta);
  };

  const handleBuy = () => {
    console.log('Funguju!!');
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey?.journeyId && 
        <>
          <JourneyDetail journey={journey?.stops} />
          <SelectedSeat number={journey?.autoSeat} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>


        </>}
      
    </main>
  );
};
