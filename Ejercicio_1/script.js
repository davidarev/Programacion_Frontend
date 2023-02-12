// Funcion para cargar los personajes de la API
var pag =1;
function fetchChars(page) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)/*{             */
        .then(data => data.json()) //Convierto la respuesta en un objeto JSON
        .then(chars => { //Recibo el objeto JSON
            var container = document.getElementById("results"); //Obtengo el elemento por el id
            container.innerHTML = ""; //Limpio el contenido del elemento
            chars.results.forEach(char => { //Recorro el array de personajes
                var div = document.createElement("div"); //Creo un elemento div
                div.innerHTML = `<img src="${char.image}" /><h3>${char.name}</h3>`; //Agrego el contenido al elemento div con una fuente h3
                container.appendChild(div);
            });
        })
/*  }            */
}

//Funcion para buscar personajes por nombre
var findPag =1;
function finder() {
    var name = document.getElementById("name").value;
    if(name==null){
        return;
    }

    //Hago la busqueda por nombre y se muestra en el buscador por defecto
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}&page=${findPag}`)/*{             */
        .then(data => data.json())
        .then(chars => {
            var container = document.getElementById("results");
            container.innerHTML = "";
            chars.results.forEach(char => {
                var div = document.createElement("div");
                div.innerHTML = `<img src="${char.image}" /> <h3>${char.name}</h3>`;
                container.appendChild(div);
            });
        })
/*  }            */
}

//Funcion para pasar de pagina en el buscador por defecto
function nextPage(){
    pag += 1;
    fetchChars(pag);
}

//Funcion para pasar de pagina en el buscador
function nextPageFinder(){
    findPag += 1;
    finder();
}

//Funcion para retroceder de pagina en el buscador por defecto
function prevPageFinder(){
    findPag -= 1;
    finder();
}

//Funcion para retroceder de pagina en el buscador
function prevPage(){
    pag -= 1;
    fetchChars(pag);
}
