/* ========== konsol och manipulera DOM ========== */

// 1
const mittNamn = "Martin"
console.log(mittNamn)

// 2
const rubrik = document.getElementById("minRubrik")
rubrik.innerText = "Hello world"

// 3
rubrik.classList.add("blueish")

/* ========== lägg till i DOM ========== */

// 1
const p = document.createElement("p")
const t = document.createTextNode(
  "En text skapat med createElement och createTextNode"
)
p.appendChild(t)

rubrik.after(p)

// 2
rubrik.insertAdjacentHTML(
  "afterend",
  "<p>Ett annat textstycke, tillagt med <code>.insertAdjacentHTML()</code></p>"
)

/* ========== arrays och loopar ========== */

// 1
let arr = ["en sträng", 12, 42, true, 3.14]
arr.forEach(function (element) {
  // värdet i element kommer vara det första elementet i arrayen på första varvet.
  // under andra varvet kommer värdet vara det andra elementet i arrayen.
  console.log(element)
})

// 2
arr.push("ett nytt element")
console.log(arr)

// 3
const detBorttagna = arr.pop()
console.log(arr)
console.log("Det som togs bort från arrayen: ", detBorttagna)

// 4
const finns12 = arr.includes(12)
console.log("Finns 12? ", finns12)

const finns13 = arr.includes(13)
console.log("Finns 13? ", finns13)

/* ========== strängar ========== */

// 1
const firstName = "Martin"
const lastName = "Loman"

console.log("Välkommen " + firstName + " " + lastName)

// 2
console.log(`Välkommen ${firstName} ${lastName}`)

// 3
rubrik.insertAdjacentHTML(
  "afterend",
  `<div>
<strong>Förnamn:</strong> ${firstName} 
<strong>Efternamn:</strong> ${lastName}
</div>
`
)

/* ========== objekt ========== */

// 1
let person = { firstName: "Kalle", lastName: "Anka" }
console.log(person)

// 2
person.firstName = "Kajsa"
console.log(person)

// 3
// man kan också göra så här
person["firstName"] = "Knatte"
console.log(person)

// 4
console.log(person.lastName)

// 5
delete person.lastName
console.log(person)

/* ========== funktioner, villkor ========== */

// 1
function sum(a, b) {
  return a + b
}
let result = sum(3, 4)
console.log(result)

// 2
function even(a) {
  let evenOrOdd = a % 2
  if (evenOrOdd === 0) {
    console.log("jämnt")
  } else {
    console.log("udda")
  }
}

even(7)
even(8)

/* ========== objekt i arrays ========== */

// 1
let persons = [
  { name: "Kalle Anka", age: 40 },
  { name: "Kajsa Anka", age: 41 },
]

// 2
// Funktionen .filter() tar en funktion som argument och filtrerar ut
// (väljer ut) alla element i arrayen för vilken funktionen
// returnerar true.
const oldPeople = persons.filter(function (p) {
  return p.age > 40 // Returnerar true för alla personer över 40
})
console.log(oldPeople)

// 3
// Att summera kan göras på många sätt. Här är ett.
let sumAge = 0
persons.forEach(function (pers) {
  sumAge += pers.age
})
console.log("Totala åldern är: ", sumAge)

// 4
// Jag väljer att använda .insertAdjacentHTML() för att
// lägga in personerna i div en med id="personer"
const personer = document.getElementById("personer")
persons.forEach(function (pers) {
  personer.insertAdjacentHTML(
    "beforeend",
    `<div>
    <span class="phat">Namn:</span> ${pers.name} 
    <span class="phat">Ålder:</span> ${pers.age}
  </div`
  )
})

/* ========== eventlyssnare ========== */
// 1
const klickaHar = document.getElementById("klickaHar")
klickaHar.addEventListener("click", (event) => {
  console.log("Element klickat", event.target)
})

// 2 mousemove
window.addEventListener("mousemove", (event) => {
  let div = document.getElementById("muskoordinater")
  div.innerText = `(${event.clientX},${event.clientY})`
})
