import { Seat } from "../Seat";

export const SeatPicker = () => {
    return (
        <>
          <div className="seat-picker container">
            <h2>Vyberte sedadlo</h2>
            <div className="seats"> 
                <div><Seat number={1} /></div>
                <div><Seat number={17} /></div>
                <div><Seat number={33} /></div>
            </div>
          </div>
        </>
    );
}
