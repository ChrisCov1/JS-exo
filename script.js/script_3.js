//2.2.2 Pyramide de Mario

let n = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let string = "";
for (let i = 0; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - 1; j++) {
    string += " ";
  }
  // printing symbol
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
console.log(" Ma fiche pyrammide refuse de se mettre à l'envers")