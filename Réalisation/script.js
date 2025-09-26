
let personalp = prompt("veuillez entrer votree nom pour commencer le jeu :")


let tablo=["c1","c2","c3","c4","c5","c6","c7","c8"];
let noms= [ "Maquettage","HTML/CSS","js","SQL","AccèsBDD","php","cms","FrameworkJS	"];

let score=0;

function jeu () {

for(let i=0;i< noms.length ; i++) {
    console.log("question"+(i+1))

   let repence = prompt("quel est le code de la compétence: " +noms[i]);
    if (repence  !=="" && repence.toUpperCase() === tablo[i]) {
        console.log (" la réponse est bien"+tablo[i])

        score++;

 
}else(
   console.log ("la bonne réponse"+ noms [i]+ "est"+tablo[i])
)


}
 console.log ("score total "+score +" /8")
 if( score <= noms.length / 2) { 
   console.log( `Merci d'avoir joué,  ${personalp}! vous pouvez réessayer pour améliorer votre score` ) 
 }
 else if ( score === noms. length) {}
}

jeu ();

