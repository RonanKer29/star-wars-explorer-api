const PlanetDetails = ({ item }) => {
  return (
    <div>
      <p>
        <strong>Nom :</strong> {item.name}
      </p>
      <p>
        <strong>Diamètre :</strong> {item.diameter} km
      </p>
      <p>
        <strong>Climat :</strong> {item.climate}
      </p>
      <p>
        <strong>Faune-Flore :</strong> {item.terrain}
      </p>
      <p>
        <strong>Population :</strong> {item.population} habitants
      </p>
    </div>
  );
};

export default PlanetDetails;
