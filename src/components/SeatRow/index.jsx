import { Seat } from "../Seat";

export const SeatRow = ({ row }) => {
    return(
      <>
        <div className="seat-row">
            <div>
                {row.map(r => <Seat key={r.number} number={r.number} isOccupied={r.isOccupied} />)}
            </div>
        </div>
      </>
    );
}