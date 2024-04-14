import { useParams } from "react-router-dom";

export const ReservationPage = () => {
    const { numberReservation } = useParams();

    return (
        <><h2>Rezervacni stranka ;-)</h2>
        {numberReservation}
        </>
    );
}