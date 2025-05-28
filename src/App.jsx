import { useEffect, useState } from "react";
import Header from "./components/Header";
import DetailsList from "./components/DetailsList";
import DetailsPanel from "./components/DetailsPanel";
import Button from "./components/ui/Button";
import Pagination from "./components/ui/Pagination";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = {
    people: "Personnages",
    planets: "Planètes",
    films: "Films",
    species: "Espèces",
    vehicles: "Véhicules",
    starships: "Vaisseaux",
  };

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://swapi.py4e.com/api/${selectedCategory}/`
        );
        if (!res.ok) throw new Error("Erreur chargement");
        const loadedData = await res.json();
        setData(loadedData.results);
        setNextPageUrl(loadedData.next);
        setPrevPageUrl(loadedData.previous);
        setTotalCount(loadedData.count);
      } catch (err) {
        console.error("Erreur fetch:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  useEffect(() => {
    if (searchTerm === "" || selectedCategory === "") return;

    const fetchAllPages = async () => {
      try {
        setIsSearching(true);

        // 1. Fetch page 1
        const firstRes = await fetch(
          `https://swapi.py4e.com/api/${selectedCategory}/?page=1`
        );
        const firstData = await firstRes.json();
        const totalCount = firstData.count;
        const totalPages = Math.ceil(totalCount / 10);

        // 2. Prépare les fetch pour les pages suivantes
        const pagePromises = [];
        for (let i = 2; i <= totalPages; i++) {
          pagePromises.push(
            fetch(
              `https://swapi.py4e.com/api/${selectedCategory}/?page=${i}`
            ).then((res) => res.json())
          );
        }

        const remainingPages = await Promise.all(pagePromises);

        // 3. Combine tous les résultats
        const allResults = [
          ...firstData.results,
          ...remainingPages.flatMap((page) => page.results),
        ];

        setAllData(allResults);
      } catch (err) {
        console.error("Erreur lors du fetch multi-pages:", err);
      } finally {
        setIsSearching(false);
      }
    };

    fetchAllPages();
  }, [searchTerm, selectedCategory]);

  function fetchNextPage() {
    if (!nextPageUrl) return;
    const fetchNextPageData = async () => {
      try {
        const res = await fetch(nextPageUrl);
        if (!res.ok) throw new Error("erreur chargement page suivante");
        const loadedNextPageData = await res.json();
        setData(loadedNextPageData.results);
        setNextPageUrl(loadedNextPageData.next);
        setPrevPageUrl(loadedNextPageData.previous);
        setCurrentPage(currentPage + 1);
      } catch (err) {
        console.error("Erreur fetch:", err);
      }
    };
    fetchNextPageData();
  }

  function fetchPrevPage() {
    if (!prevPageUrl) return;
    const fetchPrevPageData = async () => {
      try {
        const res = await fetch(prevPageUrl);
        if (!res.ok) throw new Error("erreur chargement page précédente");
        const loadedPrevPageData = await res.json();
        setData(loadedPrevPageData.results);
        setPrevPageUrl(loadedPrevPageData.previous);
        setNextPageUrl(loadedPrevPageData.next);
        setCurrentPage(currentPage - 1);
      } catch (err) {
        console.error("Erreur fetch:", err);
      }
    };
    fetchPrevPageData();
  }

  function handlePageClick(pageNumber) {
    const fetchPage = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://swapi.py4e.com/api/${selectedCategory}/?page=${pageNumber}`
        );
        if (!res.ok) throw new Error("Erreur chargement page");
        const loadedData = await res.json();
        setData(loadedData.results);
        setNextPageUrl(loadedData.next);
        setPrevPageUrl(loadedData.previous);
        setCurrentPage(pageNumber);
      } catch (err) {
        console.error("Erreur fetch page:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPage();
  }

  function handleSearch(term) {
    setSearchTerm(term);
    setCurrentPage(1);
  }

  const filteredData = (searchTerm === "" ? data : allData).filter((item) => {
    const nameOrTitle = item.name || item.title || "";
    return nameOrTitle.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log("data:", data);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌌 StarWars Explorer
      </h1>

      <Header
        categories={categories}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {isLoading && <p className="text-center text-gray-500">Chargement...</p>}

      <div className="flex gap-4">
        <div className="w-1/3">
          {selectedCategory && (
            <SearchBar onFilterChange={handleSearch} searchTerm={searchTerm} />
          )}
          <DetailsList
            data={filteredData}
            category={selectedCategory}
            onItemClick={setSelectedItem}
          />
        </div>

        <div className="w-2/3">
          {selectedItem !== null ? (
            <DetailsPanel
              selectedItem={selectedItem}
              category={selectedCategory}
              onClose={() => setSelectedItem(null)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {searchTerm === "" && !isSearching && (
        <div className="flex justify-center gap-4 mt-4">
          {prevPageUrl !== null && (
            <Button handleClick={fetchPrevPage}>⬅ Page précédente</Button>
          )}
          {nextPageUrl !== null && (
            <Button handleClick={fetchNextPage}>➡ Page suivante</Button>
          )}
        </div>
      )}

      {searchTerm === "" && !isSearching && (
        <Pagination
          totalCount={totalCount}
          currentPage={currentPage}
          onPageClick={handlePageClick}
        />
      )}
    </div>
  );
};

export default App;
