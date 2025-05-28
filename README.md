# 🌌 StarWars Explorer

StarWars Explorer est une application React permettant d’explorer les données de l’univers Star Wars via l’API publique SWAPI.

L’utilisateur peut naviguer par catégories, consulter les détails des éléments (personnages, planètes, films, etc.), paginer les résultats et effectuer une recherche avancée sur l’ensemble des données.

---

## 🚀 Fonctionnalités principales

### 🧭 Navigation par catégorie
- Sélectionnez une catégorie (Personnages, Planètes, Films, Espèces, Véhicules, Vaisseaux).
- Affichage dynamique des données selon la catégorie choisie.

### 📄 Liste des éléments avec panneau de détails
- Chaque élément (personnage, planète…) est affiché sous forme de carte cliquable.
- Affichage des détails complets dans un panneau latéral.

### 🔁 Pagination
- Chargement progressif par page de 10 résultats.
- Boutons “Page suivante” / “Page précédente”.
- Pagination par numéro de page.
- Pagination désactivée automatiquement lors d’une recherche.

### 🔍 Barre de recherche intelligente
- Recherche en temps réel dans tous les champs `name` ou `title`.
- Récupération automatique de **toutes les pages** de la catégorie lors d’une recherche.
- Affichage de tous les résultats correspondants, quel que soit leur emplacement dans la pagination initiale.
- Interface fluide et responsive, avec feedback de chargement.

### ♿ Accessibilité & UI/UX
- Label pour les champs de saisie.
- Composants stylisés avec Tailwind CSS.
- Mise en surbrillance claire des interactions.

---

## 🛠️ Stack technique

- **Frontend** : React
- **UI** : Tailwind CSS
- **API** : [SWAPI](https://swapi.py4e.com/)
- **Gestion d’état** : `useState`, `useEffect`
- **Déploiement** : local uniquement (à adapter selon usage)

---

## 📁 Structure des composants

- `App.jsx` : Composant principal avec gestion de l’état global.
- `Header.jsx` : Sélection de la catégorie.
- `DetailsList.jsx` : Affichage de la liste des éléments.
- `DetailsPanel.jsx` : Affichage des détails d’un élément.
- `Pagination.jsx` : Contrôles de pagination.
- `SearchBar.jsx` : Barre de recherche stylisée.

---

## 📸 Aperçu

*(Ajouter ici des screenshots ou un GIF de démonstration de l’app si possible)*

---

## 🧪 Améliorations possibles

- Ajout d’un système de favoris ou de notation.
- Ajout d’un thème sombre.
- Amélioration de l’accessibilité (navigation clavier, ARIA).
- Intégration de debounce pour la recherche (ex: `useDebounce` ou `lodash.debounce`).

---

## 📄 Licence

Ce projet est open-source à but pédagogique. Les données proviennent de [SWAPI](https://swapi.py4e.com/), une API publique gratuite dédiée à l’univers Star Wars.

---

## 🤝 Contact

Développé par [Ronan Kervella](https://ronankervella.vercel.app)

Github : [@RonanKer29](https://github.com/RonanKer29)
