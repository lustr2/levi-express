
export const CityOptions = ( {cities} ) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map(c => <option key={c.code} value={c.code}>{c.name}</option> )}
    </>
  );
}