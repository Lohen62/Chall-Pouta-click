// pseudo code : 

// chose à réaliser : 

// générée des formes  ( carrer rond etc)
// Leurs tailles doit etre aléatoire
// leurs position doit ere aléatoire
// leurs couleur doit être aléatoire

// Cliquer sur une couleur autre que noir donne un point
// Cliquer sur une couleur noir vous fait perdre instantannément.

//si toutes les couleurs ont disparut, victoire

// faire 3 niveau de difficulté :
// noob : 20 objet, 3 noir, 60 secondes

// hardcore : 80 objets, 20 noirs, 45 secondes
// ultraviolence 200 objets, 70 noirs, 30 secondes

// quand on clique sur un objet, la position change aléatoiremment.

// si défaites pour time out, afficher le score
// si  victoire : afficher le temps réaliser




var haut = document.createElement("div");
document.body.appendChild(haut);
haut.className = "haut";

var jeux = document.createElement("div");
document.body.appendChild(jeux);
jeux.className = "jeux";


// ici je créer un bouton noob
var noob = document.createElement("button");
noob.textContent="nooby";
haut.appendChild(noob);
noob.addEventListener("click",btnNoob);
noob.className = "easy"

noob.style.position = "absolute";
noob.style.top= "2vh";
noob.style.left= "25vw";


// ici je créer un bouton hardcore


var hardcore = document.createElement("button");
hardcore.textContent="Hardcore";
haut.appendChild(hardcore);
hardcore.addEventListener("click",btnhardcore);

hardcore.className = "hard"
hardcore.style.position = "absolute";
hardcore.style.top= "2vh";
hardcore.style.left= "50vw";


// ici je créer un bouton ultraviolence

var ultraviolence = document.createElement("button");
haut.appendChild(ultraviolence);
ultraviolence.textContent=("ULTRAVIOLENT")
ultraviolence.addEventListener("click",btnultraviolence);
ultraviolence.className = "ultra"

ultraviolence.style.position = "absolute";
ultraviolence.style.top= "2vh";
ultraviolence.style.left= "85vw";

// on créer une fonction pour refresh
function remove(nimporte) {
    while(nimporte.firstChild){
        nimporte.removeChild(nimporte.firstChild);
    }
}



// je créer un tableau de couleur 
var black = ["black"]
var couleur = ["blue","red","pink","yellow","purple","orange","green","Aqua","Gray","silver"];
// var forme = ["carrer","rond","triangle"]
var taille = ["2vh","3vh","4vh","5vh","4.5vh","5.5vh","3.5vh","6.5vh","6vh"];
var compteur= 0
var nbDivNoir = ["3","20","70"];
var nbNiveaux = 0;
var temps = 0;
var intervalTimer = null;

var score = document.createElement("div");
haut.appendChild(score);
score.className = "score";
// je génére un bc de div à 20 pour le noob 

    function btnNoob(){
        clearInterval(intervalTimer);
        nbNiveaux = 0;
        temps = 90;
        remove(document.querySelector(".jeux"));
        intervalTimer = setInterval(timer,1000);   
        compteur = 0;
        
        for (i=0; i<20; i++){

        var newDiv = document.createElement("div");
        jeux.appendChild(newDiv);
        newDiv.classList.add("forme");
        // ON REND LA COULEUR ALEATOIRE à chaque fois que i fait un tour
        
        if (i< 3){
            newDiv.style.backgroundColor = black[0]
        }else{
        
        var couleurAleatoire= Math.floor(Math.random()*couleur.length);

        
        newDiv.style.backgroundColor = couleur[couleurAleatoire]
                }
                
            // je vais à présent lui donner une taille aléatoire
        var heightAleatoire = Math.floor(Math.random()*taille.length);
        var widthAleatoire = Math.floor(Math.random()*taille.length);
    
        
        newDiv.style.height = taille[heightAleatoire];
        newDiv.style.width = taille[widthAleatoire];

        // on va placer  aléatoirement les formes
        
        var xaleatoire = Math.floor(Math.random()*90+5);
        var yaleatoire = Math.floor(Math.random()*80+10);
        newDiv.style.position = "absolute";
        newDiv.style.left = xaleatoire + "vw";
        newDiv.style.top = yaleatoire + "vh";
                
             
        
        }
        var game = document.body.querySelector(".jeux");
        var carrer = game.querySelectorAll("div");
 
        for(i=0;i<carrer.length;i++){
        carrer[i].addEventListener("click", function(){
            destruction(this);
            bouger(carrer);
            console.log(compteur+ " ceci est le compteur");

            score.textContent=("timer: "+temps+ " score : "+compteur+" points ");
        });
        
        
    }

    }

    function btnhardcore(){
        clearInterval(intervalTimer);
        nbNiveaux = 1;
        temps = 45;
        intervalTimer = setInterval(timer,1000); 
         remove(document.querySelector(".jeux"));
         compteur = 0;
            for (i=0; i<80; i++){
    
            var newDiv = document.createElement("div");
            jeux.appendChild(newDiv);
            newDiv.classList.add("forme");
    
            // ON REND LA COULEUR ALEATOIRE à chaque fois que i fait un tour
            
            if (i< 20){
                newDiv.style.backgroundColor = black[0]
            }else{
            
            var couleurAleatoire= Math.floor(Math.random()*couleur.length);
    
            console.log(couleurAleatoire);
            newDiv.style.backgroundColor = couleur[couleurAleatoire]
                    }
                    
                // je vais à présent lui donner une taille aléatoire
            var heightAleatoire = Math.floor(Math.random()*taille.length);
            var widthAleatoire = Math.floor(Math.random()*taille.length);
            console.log(heightAleatoire + "taille");
            console.log(widthAleatoire + " largueur");
            
            newDiv.style.height = taille[heightAleatoire];
            newDiv.style.width = taille[widthAleatoire];
    
            // on va placer  aléatoirement les formes
            
            var xaleatoire = Math.floor(Math.random()*90+5);
            var yaleatoire = Math.floor(Math.random()*80+10);
            newDiv.style.position = "absolute";
            newDiv.style.left = xaleatoire + "vw";
            newDiv.style.top = yaleatoire + "vh";
    
            }
            var game = document.body.querySelector(".jeux");
        var carrer = game.querySelectorAll("div");
        
        for(i=0;i<carrer.length;i++){
            carrer[i].addEventListener("click", function(){
                destruction(this);
                bouger(carrer);
                console.log(compteur+ " ceci est le compteur");

                score.textContent=("timer: " + temps +" score "+compteur+" points ");
        });
    }
            
        
    

    }


    function btnultraviolence(){
        clearInterval(intervalTimer);
        nbNiveaux = 2;
        temps = 30;
        intervalTimer = setInterval(timer,1000); 
        remove(document.querySelector(".jeux"));
        compteur = 0;
            for (i=0; i<200; i++){
    
            var newDiv = document.createElement("div");
            jeux.appendChild(newDiv);
            newDiv.classList.add("forme");
    
            // ON REND LA COULEUR ALEATOIRE à chaque fois que i fait un tour
            
            if (i< 70){
                newDiv.style.backgroundColor = black[0]
            }else{
            
            var couleurAleatoire= Math.floor(Math.random()*couleur.length);
    
            console.log(couleurAleatoire);
            newDiv.style.backgroundColor = couleur[couleurAleatoire]
                    }
                    
                // je vais à présent lui donner une taille aléatoire
            var heightAleatoire = Math.floor(Math.random()*taille.length);
            var widthAleatoire = Math.floor(Math.random()*taille.length);
            console.log(heightAleatoire + "taille");
            console.log(widthAleatoire + " largueur");
            
            newDiv.style.height = taille[heightAleatoire];
            newDiv.style.width = taille[widthAleatoire];
    
            // on va placer  aléatoirement les formes
            
            var xaleatoire = Math.floor(Math.random()*90+5);
            var yaleatoire = Math.floor(Math.random()*80+10);
            newDiv.style.position = "absolute";
            newDiv.style.left = xaleatoire + "vw";
            newDiv.style.top = yaleatoire + "vh";
    
            }
            var game = document.body.querySelector(".jeux");
        var carrer = game.querySelectorAll("div");
        
        for(i=0;i<carrer.length;i++){
            carrer[i].addEventListener("click", function(){
                destruction(this);
                bouger(carrer);
                console.log(compteur+ " ceci est le compteur");
                score.textContent=("timer: " +temps +" score "+compteur+" points ");
        });
    }
            
        
    

    }



function destruction(autrechose) {
    autrechose.remove();
    var nombreDeDiv = document.getElementsByClassName("forme");
    console.log(nombreDeDiv.length);
    console.log(nbDivNoir[nbNiveaux]);
    if (autrechose.style.backgroundColor == black){
        alert("TA PERDU! tu as fait " + compteur + " points !");
        remove(document.querySelector(".jeux"));
        clearInterval(intervalTimer);
    } else {
        compteur = compteur + 1;
    }
    if (nombreDeDiv.length == nbDivNoir[nbNiveaux]) {
        alert("win");
        clearInterval(intervalTimer);
    }


    // si nb forme = nb forme noire = victoire + score
}

function bouger(parametre){


   console.log(parametre);
   for(i=0;i<parametre.length;i++){
    var xaleatoire = Math.floor(Math.random()*100);
    var yaleatoire = Math.floor(Math.random()*100+10);
   parametre[i].style.position = "absolute";
   parametre[i].style.left = xaleatoire + "vw";
   parametre[i].style.top = yaleatoire + "vh";
}}



// function timer(){


// var temps = ["90","60","30"];

// }


function timer() {
    temps--;
    console.log(temps);
    score.textContent=("timer: "+temps+ " score : "+compteur+" points " )
    if (temps == 0) {
        alert("perdu");
        clearInterval(intervalTimer);
    }
}