const FilmDetails = ({ item }) => {
  return (
    <div>
      <p>
        <strong>Nom :</strong> {item.title}
      </p>
      <p>
        <strong>Année :</strong> {item.release_date}
      </p>
      <p>
        <strong>Réalisateur :</strong> {item.director}
      </p>
      <p>
        <strong>Ordre du film dans l'histoire :</strong> {item.episode_id}
      </p>
      <p>
        <strong>Intro :</strong> {item.opening_crawl}
      </p>
    </div>
  );
};

export default FilmDetails;
