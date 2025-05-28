const StarshipDetails = ({ item }) => {
  return (
    <div>
      <p>
        <strong>Nom :</strong> {item.name}
      </p>
      <p>
        <strong>Modèle :</strong> {item.model}
      </p>
      <p>
        <strong>Constructeur :</strong> {item.manufacturer}
      </p>
      <p>
        <strong>Cout en crédits :</strong> {item.cost_in_credits}
      </p>
      <p>
        <strong>Vitesse max dans l'atmosphère :</strong>{" "}
        {item.max_atmosphering_speed}
      </p>
      <p>
        <strong>Taille de l'équipage :</strong> {item.crew}
      </p>
      <p>
        <strong>Passagers max:</strong> {item.passengers}
      </p>
    </div>
  );
};

export default StarshipDetails;
