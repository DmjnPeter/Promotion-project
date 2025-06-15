

Funkciók:

-  Új elem hozzáadása (Cím, Leírás, Érvényességi dátum)
-  Elemek listázása
-  Törlés gombbal egyes elemek eltávolítása


Telepítés:

1. klónozd a repót
`bash
git clone https://github.com/DmjnPeter/Promotion-project.git
cd promotion-manager

2. Telepítsd a szükséges csomagokat
npm install

3. Indítsd el a dev szervert
npm run dev

Az alkalmazás elérhető lesz a http://localhost:5173 címen.


Használt technológiák:
-React (Vite)
-Bootstrap 5
-crudcrud.com

📁 src
├── App.jsx
├── Components/
│   ├── PromotionForm.jsx
│   ├── PromotionList.jsx
│   └── PromotionItem.jsx
├── Services/
│   └── api.js
├── index.css


FONTOS: A crudcrud.com API kulcsa 24 óra után lejár. Új kulcsot kell generálni, és az api.js fájlban módosítani kell a BASE_URL-t:

const BASE_URL = "https://crudcrud.com/api/292fd714cabd4bbcb2a3b12ed14cac60/promotions";
