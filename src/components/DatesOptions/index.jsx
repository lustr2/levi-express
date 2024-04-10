
export const DatesOptions = ( { dates } ) => {
    return (
        <>
          <option value="">Vyberte</option>
          {/* format DD.MM.YYYY */}
          {dates.map(d => <option key={d.dateBasic} value={d.dateBasic}>{d.dateCs}</option> )}
        </>
           
    );
}