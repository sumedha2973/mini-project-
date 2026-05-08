document.getElementById("bookForm")
.addEventListener("submit", async function(e){

e.preventDefault();

let name = document.getElementById("name").value;

let response = await fetch("http://localhost:5000/book", {

method: "POST",

headers: {
   "Content-Type": "application/json"
},

body: JSON.stringify({
   name: name
})

});

let data = await response.json();

alert(data.message);

});