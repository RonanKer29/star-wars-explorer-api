const PeopleDetails = ({ item }) => {
  return (
    <div>
      <p>
        <strong>Nom :</strong> {item.name}
      </p>
      <p>
        <strong>Taille :</strong> {item.height} cm
      </p>
      <p>
        <strong>Masse :</strong> {item.mass} kg
      </p>
      <p>
        <strong>Année de naissance :</strong> {item.birth_year}
      </p>
      <p>
        <strong>Genre :</strong> {item.gender}
      </p>
    </div>
  );
};

export default PeopleDetails;
