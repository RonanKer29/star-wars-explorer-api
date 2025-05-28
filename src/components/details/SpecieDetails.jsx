const SpecieDetails = ({ item }) => {
  return (
    <div>
      <p>
        <strong>Nom :</strong> {item.name}
      </p>
      <p>
        <strong>Classification :</strong> {item.classification}
      </p>
      <p>
        <strong>Désignation :</strong> {item.designation}
      </p>
      <p>
        <strong>Taille moyenne :</strong> {item.average_height}
      </p>
      <p>
        <strong>Durée de vie moyenne :</strong> {item.average_lifespan}
      </p>
      <p>
        <strong>Langue parlée :</strong> {item.language}
      </p>
      <p>
        <strong>Couleur de peau :</strong> {item.skin_colors}
      </p>
    </div>
  );
};

export default SpecieDetails;
