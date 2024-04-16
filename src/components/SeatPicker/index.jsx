import { SeatRow } from "../SeatRow";

export const SeatPicker = ( {seats, selectedSeat , onSeatSelected} ) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats"> 
          {seats.map((s, index) => 
              <SeatRow
                  key={index} 
                  row={s} 
                  rowSelectedSeat={selectedSeat}
                  onSeatSelected={onSeatSelected}
              />)
          }
      </div>
    </div>
  );
}
