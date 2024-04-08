
export const DatesOptions = ( { dates } ) => {
    return (
        <>
          <option value="">Vyberte</option>
          {dates.map(d => <option key={d.dateBasic} name={d.dateBasic}>{d.dateCs}</option> )}
        </>
           
    );
}