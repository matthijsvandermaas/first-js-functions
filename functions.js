/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"
function getSchoolNames() {
  return "Novi Hogeschool";


}
const schoolNames = getSchoolNames();

console.log(schoolNames);
console.log(getSchoolNames());

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"
function compliment() {
  return "Lekker bezig met die functies, Jan!";
}

console.log(compliment());


/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwacht uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]
const getGrades = new Array(8, 8.5, 9, 7);

const grade = getGrades[1];
console.log(grade);

let highestGrade = -Infinity;
let highestGradeIndex = -1;

for (let i = 0; i < getGrades.length; i++) {
  if (getGrades[i] > highestGrade) {
    highestGrade = getGrades[i];
    highestGradeIndex = i;
  }
}

console.log(highestGrade); // Hoogste grade
console.log(highestGradeIndex); // Index van de hoogste grade



/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }
function getDetails() {
  let updatedFirstName = "Edje";
  const updatedLastName = "Bedelaar";
  return updatedFirstName +" " + updatedLastName;
}

console.log(getDetails()); // geeft "Edje Bedelaar" weer

updatedFirstName = "Maarten";
updatedLasttName = "Watson";
console.log(updatedFirstName + " " + updatedLasttName);

