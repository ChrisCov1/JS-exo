//2.3.1. Startup Nation

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log ("Voici la liste des entrepreneurs nés dans les années 70")
const result = entrepreneurs.filter(new_list);
function new_list (entrepreneur) {
  return entrepreneur.year> 1969 && entrepreneur.year < 1980
}
console.log(result);

//Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("Ceci liste uniquement les prénoms et noms des entrepreneurs de la liste")
const new_entrepreneurs = [ ]
entrepreneurs.forEach((list) => {
new_entrepreneurs.push ( list.first + ' ' + list.last)
})
console.log (new_entrepreneurs)


//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("En 2022, voici l'age de chaque entrepreneurs de la liste")
entrepreneurs.forEach(guy => {
  age = ( 2022 - guy.year)
  console.log("En 2022, " + guy.first + " " + guy.last + " a soufflé ses " + age + " bougies.")
  });


//Trie les entrepreneurs par ordre alphabétique du nom de famille .
console.log("Voici la liste des entrepreneurs par ordre alphabetique")
function SortArray(x, y){
  if (x.last < y.last) {return -1;}
  if (x.last > y.last) {return 1;}
  return 0;
}
let s = entrepreneurs.sort(SortArray);
console.log(s);