const produits = [
  { nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 },
];

for (const prod of produits) {
  console.log(`${prod.nom} - ${prod.prix} MAD`);
}


const disponibles = produits.filter((p) => p.stock > 0);
const nombre = disponibles.length;
console.log(`Produits disponibles : ${nombre}`);


const valeurStock = produits.reduce((somme, p) => somme + p.prix * p.stock, 0);
console.log(`Valeur du stock : ${valeurStock} MAD`);


if (disponibles.length === 0) {
  console.log("Aucun produit disponible");
} else {
  const moinsCher = disponibles.reduce((min, p) => p.prix < min.prix ? p : min, disponibles[0]);
  console.log(`Le moins cher : ${moinsCher.nom} - ${moinsCher.prix} MAD`);
}


const lignes = produits.map((p) => `${p.nom} - ${p.prix} MAD - ${p.stock} unités`);
for (const ligne of lignes) {
  console.log(ligne);
}