import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';
import { SeatPicker } from '../../components/SeatPicker'; 
import { useNavigate } from "react-router-dom";


export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (cesta) => {
//    console.log("Poslano do rodice: " + cesta.journeyId);
    setJourney(cesta);
  };


  const handleBuy = async() => {

    try {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      });
      const numberRes = await response.json();

      navigate(`/reservation/${numberRes.results.reservationId}`);
      console.log("Cislo rezervace: " + numberRes.results.reservationId);

    } catch (ex) {
      console.log("Chyba pri odesilani rezervace");
    }    

  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {journey?.journeyId && 
        <>
          <JourneyDetail journey={journey?.stops} />
          <SeatPicker number={journey?.autoSeat} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>


        </>}
      
    </main>
  );
};
