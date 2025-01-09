//console.log("test")


let imageNumber;
imageNumber = [];


//différentes div
let image = document.querySelector("#image");
let text = document.querySelector("#text");
let button = document.querySelector("#bouton");

//console.log(image, text, button);

let i = 0;


//fonction (bouton change texte et image)
function changeElements(){

for(let i = 0; i<imageNumber.lenght; i++){

}

    if(i=1){
        image.innerHTML = '<img src="./asset/image/image2.webp" alt="apparition" class="img-fluid">';
        text.innerHTML = '<p>La crypte se cachait au fond de la cave et d\'inquiétant murmures sans échappait</p> <p>Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires.</p>';
    }

    if(i=false){ //le gros du problème est clairement ici
        image.innerHTML = '<img src="./asset/image/image3.webp" alt="combat" class="img-fluid">';
        text.innerHTML = '<p>La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien</p> <p>Le combat allait être sans merci!</p>';
    }



    /*if(i=2){
        image.innerHTML = '<img src="./asset/image/image1.png" alt="aventure" class="img-fluid">';
        text.innerHTML = '<p> comme souvent, cette histoire commence dans une auberge...</p> <p> Celle-ci est miteuse, inquiètante, perdue au fin fond du marais sans retour, pas de quoi effrayer de vaillants aventuriers</p>';
        
    }*/

}

button.addEventListener('click', changeElements);


