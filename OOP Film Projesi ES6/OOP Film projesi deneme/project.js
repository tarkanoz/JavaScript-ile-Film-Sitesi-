

const  form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");



const ui = new UI();

const storage = new Storage();


eventListeners();

function eventListeners(){

    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

    function addFilm(e){ //e eventtan gelirparametreden gelen olayı yakalamak için verilen değişken yani submit edildiğinde yani klavyeden gelen o etkileşim o olayı yakalamak için verilen değişken

         const title = titleElement.value;
         const director = directorElement.value;
         const url = urlElement.value;

         if(title ==="" || director === "" || url === ""){
            
            ui.displayMessages("tüm alanları doldurun...","danger");
         }
         else{

            const newFilm = new Film(title,director,url);

            ui.addFilmToUI(newFilm);
            storage.addFilmToStorage(newFilm);

            ui.displayMessages("film başarıyla eklendi...","success");
         }



         ui.clearInputs(titleElement,urlElement,directorElement);
        e.preventDefault();
    }
    
    function deleteFilm(e){
             
        if(e.target.id === "delete-film"){

            ui.deleteFilmFormUI(e.target);
        
        Storage.prototype.deleteFilmFormStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("film başarıyla silindi...","success");
    }
}
function clearAllFilms(){

    if(confirm("emin misinz..")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        
    }
   
}