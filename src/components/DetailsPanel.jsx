import FilmDetails from "./details/FilmDetails";
import PeopleDetails from "./details/PeopleDetails";
import PlanetDetails from "./details/PlanetDetails";
import SpecieDetails from "./details/SpecieDetails";
import StarshipDetails from "./details/StarshipDetails";
import VehicleDetails from "./details/VehicleDetails";

const DetailsPanel = ({ selectedItem, category, onClose }) => {
  if (!selectedItem) return null;

  const getCategoryTitle = () => {
    switch (category) {
      case "people":
        return "👤 Détails du personnage";
      case "films":
        return "🎬 Détails du film";
      case "planets":
        return "🪐 Détails de la planète";
      case "species":
        return "🌱 Détails de l'espèce";
      case "vehicles":
        return "🚗 Détails du véhicule";
      case "starships":
        return "🚀 Détails du vaisseau";
      default:
        return "📄 Détails";
    }
  };

  const renderDetailsComponent = () => {
    switch (category) {
      case "people":
        return <PeopleDetails item={selectedItem} />;
      case "films":
        return <FilmDetails item={selectedItem} />;
      case "planets":
        return <PlanetDetails item={selectedItem} />;
      case "species":
        return <SpecieDetails item={selectedItem} />;
      case "vehicles":
        return <VehicleDetails item={selectedItem} />;
      case "starships":
        return <StarshipDetails item={selectedItem} />;
      default:
        return <p>Données indisponibles pour cette catégorie.</p>;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 w-full border-l-4 border-blue-400 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {getCategoryTitle()}
        </h2>
        <button
          onClick={onClose}
          className="text-sm text-red-500 hover:underline"
        >
          ✖ Fermer
        </button>
      </div>

      <div className="text-gray-700">{renderDetailsComponent()}</div>
    </div>
  );
};

export default DetailsPanel;
