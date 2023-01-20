fetch("IQ.json") // envoie notre dossier json dans notre serv
.then(promesse => promesse.json()) // je lui fais une prommesse
.then(data => 
{
    const screen2Elt = document.querySelector(".screen2");
    const screen1Elt = document.querySelector(".screen1");
    const textQElt = document.querySelector("#textQ");
    const pElt = document.querySelectorAll("p");
    console.log (pElt);
    // selectioner mes 4 Label
    const reponse1QElt = document.querySelector("#reponse1Q");
    const reponse2QElt = document.querySelector("#reponse2Q");
    const reponse3QElt = document.querySelector("#reponse3Q");
    const reponse4QElt = document.querySelector("#reponse4Q");

    screen2Elt.className = "hidden";
    
    //fonction random de 0 a 7 donc 8
    const random = (number) =>
    {
        return Math.floor(Math.random() * (number));
    }

    // ajouter cette fonction ramdom a nos élément
    const result = random(8); // result sert a jouer notre fonction et avoir les mème résultat sur notre json
    const dataQ = data[result].question;
    const dataR1 = data[result].reponse1
    const dataR2 = data[result].reponse2
    const dataR3 = data[result].reponse3
    const dataR4 = data[result].reponse4
    console.log (result);

    // afficher notre contenu json
    // crée des élément pour mieux disposé nos élémment json

    // ajouter les texte dans nos éléments
    // textQElt.append(dataQ);
    // reponse1QElt.append(dataR1);
    // reponse2QElt.append(dataR2);
    // reponse3QElt.append(dataR3);
    // reponse4QElt.append(dataR4);
    pElt[0].append(dataQ);
    pElt[1].append(dataR1);
    pElt[2].append(dataR2);
    pElt[3].append(dataR3);
    pElt[4].append(dataR4);
    

    // quand je click sur une bonne réponse séléctioner mes 4 radio
    const radio1Elt = document.querySelector("#radio1");
    const radio2Elt = document.querySelector("#radio2");
    const radio3Elt = document.querySelector("#radio3");
    const radio4Elt = document.querySelector("#radio4");
    const radioAllElt = [radio1Elt,radio2Elt,radio3Elt,radio4Elt];

    // 4 function de changement de style pour faire le cadre de séléction de réponse
    radio1Elt.addEventListener("click", () => {
        // ajoute reponseSelection
        reponse1QElt.className = "reponseSelection";
        //enlève reponsseSelection
        reponse2QElt.className = "reponse2Q";
        reponse3QElt.className = "reponse3Q";
        reponse4QElt.className = "reponse4Q";
    })
    radio2Elt.addEventListener("click", () => {
        // ajoute reponseSelection
        reponse2QElt.className = "reponseSelection";
        //enlève reponsseSelection
        reponse1QElt.className = "reponse1Q";
        reponse3QElt.className = "reponse3Q";
        reponse4QElt.className = "reponse4Q";
    })
    radio3Elt.addEventListener("click", () => {
        // ajoute reponseSelection
        reponse3QElt.className = "reponseSelection";
        //enlève reponsseSelection
        reponse1QElt.className = "reponse1Q";
        reponse2QElt.className = "reponse2Q";
        reponse4QElt.className = "reponse4Q";

        // console.log
        // (radio1Elt.checked,radio2Elt.checked,radio3Elt.checked,radio4Elt.checked);
    })
    radio4Elt.addEventListener("click", () => {
        // ajoute reponseSelection
        reponse4QElt.className = "reponseSelection";
        //enlève reponsseSelection
        reponse1QElt.className = "reponse1Q";
        reponse2QElt.className = "reponse2Q";
        reponse3QElt.className = "reponse3Q";

        // console.log
        // (radio1Elt.checked,radio2Elt.checked,radio3Elt.checked,radio4Elt.checked);
    })

    console.clear() //Attention j'ai clear la console 
    const boxScoreELt = document.querySelector("#boxScore");
    // crée une varaible score et l'afficher
    let score = 0 ;
    boxScoreELt.innerHTML = "Score : " + score ; 

    //boutton Valider
    const bValiderElt =document.querySelector("#buttonValider")
    console.log(bValiderElt);

    //quand je click sur valider ajoute 1 au score celon la réponse
    bValiderElt.addEventListener("click",()=>
    {
        //bonne réponse
        if (data[result].correct == pElt[1].innerText && radio1Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score
            //changement de class pour vérifier les bonne ou mauvaise question

            
        }
        else if (data[result].correct == pElt[2].innerText && radio2Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score
           
        }
        else if (data[result].correct == pElt[3].innerText && radio3Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score
        }  
        else if (data[result].correct == pElt[4].innerText && radio4Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score
        }
        //mauvaise réponse
        else
        {
            //prend 0 si mauvaise réponse
            console.log("non");
            boxScoreELt.innerHTML = "Score : " + score
            //changement de class pour vérifier les bonne ou mauvaise question
            // bValiderElt.className = "hidden"
            // if (data[result].correct !== pElt[1].innerText)
            // {
            //     reponse1QElt.className = "correctionNegative";
            // }
            // else if (data[result].correct !== pElt[2].innerText)
            // {
            //     reponse2QElt.className = "correctionNegative";
            // }
            
        }

    })
    console.log (radioAllElt[0].innerText);
    console.log (pElt)
})


