/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}


const result = add(2, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"
function greeter(name) {
  return ("hallo" + " " + name).toLowerCase();
}

const greet = greeter("marie");
console.log(greet);



/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(int) {
  return (int * 60);
}

const minutes = minutesToSeconds(5);


console.log(minutes / 60 + " " + "minutes is " + minutes + " seconds");


/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"
function merge(a, b) {
  return a + b;

}
const mergedText = merge("abra", "cadabra");

console.log(mergedText)



/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."
function calculateDogYears(humanAge, dogAge = null) {
  if (dogAge > 0 && humanAge > 0) {
    const humanToDog = humanAge * 7;
    const dogToHuman = dogAge / 7;

    console.log("You are " + humanToDog + " in dog years");
    console.log("Your dog is " + dogToHuman  + " in human years");

    return [humanToDog, dogToHuman];
  } else if (dogAge === null && humanAge > 0) {
    const humanToDog = humanAge * 7;

    console.log("You are " + humanToDog + " in dog years");

    return humanToDog;
  } else if (dogAge > 0 && humanAge === null) {
    const dogToHuman = dogAge / 7;

    console.log("Your dog is " + dogToHuman  + " in human years");

    return dogToHuman;
  } else {
    console.log("No age provided");

    return "No age provided";
  }
}

// Voorbeeld 1: Beide parameters opgegeven
const [humanAge1, dogAge1] = calculateDogYears(30, 5);
console.log(humanAge1, dogAge1); // Output: 210, 0.7142857142857143

// Voorbeeld 2: Alleen humanAge opgegeven
const humanAge2 = calculateDogYears(30);
console.log(humanAge2); // Output: 210

// Voorbeeld 3: Alleen dogAge opgegeven
const dogAge3 = calculateDogYears(null, 7);
console.log(dogAge3); // Output: 1





/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper(word, char){
  return (char + word.toLowerCase() + char);

}
const wrapper_Input = wrapper("abra", "#");
console.log(wrapper_Input);

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

function createDetailString(person) {
  const { firstName, lastName, profession } = person;
  return `Het beroep van ${firstName} ${lastName} is ${profession}.`;
}

// Voorbeeld 1
const person1 = { firstName: 'Jan', lastName: 'Jansen', profession: 'docent' };
const detailString1 = createDetailString(person1);
console.log(detailString1); // Output: "Het beroep van Jan Jansen is docent."

// Voorbeeld 2
const person2 = { firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman' };
const detailString2 = createDetailString(person2);
console.log(detailString2); // Output: "Het beroep van Kees Klaasen is brandweerman."
