import { SeatRow } from "../SeatRow";

export const SeatPicker = ({ seats, selectedSeat }) => {
    const testRow = [
        [{
          number: 33,
          isOccupied: false,
        },
        {
          number: 29,
          isOccupied: true,
        },
        {
          number: 25,
          isOccupied: false,
        }],
        [{
            number: 3,
            isOccupied: false,
          },
          {
            number: 9,
            isOccupied: true,
          },
          {
            number: 5,
            isOccupied: false,
          }],
        ];

        console.log(seats);        
    return (
        <>
          <div className="seat-picker container">
            <h2>Vyberte sedadlo</h2>
            <div className="seats"> 
               { seats.map((s, index) => 
                    <SeatRow
                        key={index} 
                        row={s} 
                        rowSelectedSeat={selectedSeat}
                    />)}
            </div>
          </div>
        </>
    );
}
