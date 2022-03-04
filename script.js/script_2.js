//2.2.1 Calculs rapides
// Un prompt s'affiche avec la question suivante
"De quel nombre veux-tu calculer la factorielle ?"
// Utilisateur rentre un nombre (par ex 4)
// Dans la console le résultat suivant est affiché
"Le résultat est : 24"
console.log("Ne compte pas sur moi pour 'expliquer la factorielle")
let number = prompt ("De quel nombre veux-tu calculer la factorielle ?")

  if(number > 0) {
  console.log("Bravo, ce nombre est positif");
} else if (number < 0) {
  console.log("Oups ce nombre est négatif, merci de choisir un autre nombre");

} else if (number === 0) 
  console.log("Ce nombre est nul");
  
let fact = 1
for (i = 1; i <= number; i++) {
  fact *= i
}

console.log ("Le résultat est : " + fact);
