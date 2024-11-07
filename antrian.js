
let antrian = ["ray", "fiki", "fadhilla", "farah"];
antrian.push("nabila");
antrian.push("maza", "elsi");
antrian.pop(); 
antrian.shift();
antrian.shift(); 
antrian.unshift("tomi"); 

let antrianList = document.getElementById("antrian-list");

antrianList.innerHTML = '';
antrian.forEach(function(pembeli) {
    let li = document.createElement("li");
    li.textContent = pembeli;
    antrianList.appendChild(li);
});