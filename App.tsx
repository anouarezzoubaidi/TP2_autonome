import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 },
];

export default function App() {
  const disponibilite = produits.filter((p) => p.stock > 0);
  const valeurstock = produits.reduce((somme, p) => somme + p.prix * p.stock, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Catalogue CampusStock</Text>
      <Text style={styles.ligne}>Produits disponibles : {disponibilite.length}</Text>
      <Text style={styles.ligne}>Valeur du stock : {valeurstock} MAD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titre: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ligne: {
    fontSize: 20,
    marginBottom: 10,
  },
});