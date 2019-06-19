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




// ici je créer un bouton noob
var noob = document.createElement("button");
noob.textContent="nooby";
document.body.appendChild(noob);
noob.addEventListener("click",btnNoob);
noob.className = "easy"

noob.style.position = "absolute";
noob.style.top= "2vh";
noob.style.left= "10vw";

// ici je créer un bouton hardcore


var hardcore = document.createElement("button");
hardcore.textContent="Hardcore";
document.body.appendChild(hardcore);
hardcore.addEventListener("click",btnhardcore);
hardcore.className = "hard"

hardcore.style.position = "absolute";
hardcore.style.top= "2vh";
hardcore.style.left= "45vw";


// ici je créer un bouton ultraviolence

var ultraviolence = document.createElement("button");
document.body.appendChild(ultraviolence);
ultraviolence.textContent=("ULTRAVIOLENT")
ultraviolence.addEventListener("click",btnultraviolence);
ultraviolence.className = "ultra"

ultraviolence.style.position = "absolute";
ultraviolence.style.top= "2vh";
ultraviolence.style.left= "80vw";


// je créer un tableau de couleur 
var black = ["black"]
var couleur = ["blue","red","pink","yellow","purple","orange","green","Aqua","Gray","silver"];

var taille = ["2vh","3vh","4vh","5vh","4.5vh","5.5vh","3.5vh","6.5vh","6vh"]



// je génére un bc de div à 20 pour le noob 
    function btnNoob(){

        for (i=0; i<20; i++){

        var newDiv = document.createElement("div");
        document.body.appendChild(newDiv);
        newDiv.classList.add("forme");

        // ON REND LA COULEUR ALEATOIRE à chaque fois que i fait un tour
        
        if (i< 3){
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
        
        var xaleatoire = Math.floor(Math.random()*90);
        var yaleatoire = Math.floor(Math.random()*95);
        newDiv.style.position = "absolute";
        newDiv.style.left = xaleatoire + "vw";
        newDiv.style.top = yaleatoire + "vh";

        }
        
    

    }


    function btnhardcore(){
        

            for (i=0; i<80; i++){
    
            var newDiv = document.createElement("div");
            document.body.appendChild(newDiv);
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
            
            var xaleatoire = Math.floor(Math.random()*90);
            var yaleatoire = Math.floor(Math.random()*95);
            newDiv.style.position = "absolute";
            newDiv.style.left = xaleatoire + "vw";
            newDiv.style.top = yaleatoire + "vh";
    
            }
            
        
    

    }


    function btnultraviolence(){

        for (i=0; i<200; i++){
    
            var newDiv = document.createElement("div");
            document.body.appendChild(newDiv);
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
            
            var xaleatoire = Math.floor(Math.random()*100);
            var yaleatoire = Math.floor(Math.random()*100+10);
            newDiv.style.position = "absolute";
            newDiv.style.left = xaleatoire + "vw";
            newDiv.style.top = yaleatoire + "vh";
    }
}

    



