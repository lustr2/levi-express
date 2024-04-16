import { Seat } from "../Seat";

export const SeatRow = ({ row , rowSelectedSeat}) => {
    return(
      <>
        <div className="seat-row">
            <div>
                {row.map(r => 
                  <Seat 
                    key={r.number} 
                    number={r.number} 
                    isOccupied={r.isOccupied} 
                    isSelected={r.number===rowSelectedSeat} />)}
            </div>
        </div>
      </>
    );
}