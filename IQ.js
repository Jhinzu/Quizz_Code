fetch("IQ.json") // envoie notre dossier json dans notre serv
.then(promesse => promesse.json()) // je lui fais une prommesse
.then(data => 
{
    const screen2Elt = document.querySelector(".screen2");
    const screen1Elt = document.querySelector(".screen1");
    const textQElt = document.querySelector("#textQ");
    const pElt = document.querySelectorAll("p");
    const containerQuestionElt = document.querySelector("#containerQuestion");
    console.log (containerQuestionElt.children[6]);
    // selectioner mes 4 Label
    const reponse1QElt = document.querySelector("#reponse1Q");
    const reponse2QElt = document.querySelector("#reponse2Q");
    const reponse3QElt = document.querySelector("#reponse3Q");
    const reponse4QElt = document.querySelector("#reponse4Q");

    //je chache la deuxièmes pages
    screen2Elt.className = "hidden";
    // screen1Elt.className = "hidden";
    // screen2Elt.className = "screen2";
    
    //crée une function aléatoire pour nos élément fonctionne comme si on mélanger un jeux de carte
    let index = 0
    let result = data.sort((a, b) => 0.5 - Math.random());
    console.log (result);
    
    // ajouter cette fonction ramdom a nos élément 
    let dataQ = result[index].question;
    let dataR1 = result[index].reponse1;
    let dataR2 = result[index].reponse2;
    let dataR3 = result[index].reponse3;
    let dataR4 = result[index].reponse4;

    // afficher notre contenu json
    // ajouter les texte dans nos éléments
    pElt[0].append(dataQ);
    pElt[1].append(dataR1);
    pElt[2].append(dataR2);
    pElt[3].append(dataR3);
    pElt[4].append(dataR4);
    

    // querySelector de mes 4 radio (input)
    const radio1Elt = document.querySelector("#radio1");
    const radio2Elt = document.querySelector("#radio2");
    const radio3Elt = document.querySelector("#radio3");
    const radio4Elt = document.querySelector("#radio4");
    const radioAllElt = [radio1Elt,radio2Elt,radio3Elt,radio4Elt];

    // 4 function de changement de style pour faire le cadre de séléction de réponse quand on click sur nos input
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
    })
    radio4Elt.addEventListener("click", () => {
        // ajoute reponseSelection
        reponse4QElt.className = "reponseSelection";
        //enlève reponsseSelection
        reponse1QElt.className = "reponse1Q";
        reponse2QElt.className = "reponse2Q";
        reponse3QElt.className = "reponse3Q";
    })
    
    //QuerySelector de ma box de score
    const boxScoreELt = document.querySelector("#boxScore");
    // crée une varaible score et l'afficher a 0 au début
    let score = 0 ;
    boxScoreELt.innerHTML = "Score : " + score ; 

    //QuerySelector boutton Valider
    const bValiderElt =document.querySelector("#buttonValider")
    //crée un élément pour afficher la correction 
    const divCorrectionAdd = document.createElement("div");
    containerQuestionElt.insertBefore(divCorrectionAdd,containerQuestionElt.children[7]);
    // crée un élément boutton next
    const bouttonNextAdd = document.createElement("button");
    bouttonNextAdd.append("Next")
    containerQuestionElt.appendChild(bouttonNextAdd);
    bouttonNextAdd.className = "hidden";




    //quand je click sur valider ajoute 1 au score celon la réponse et change de class pour afficher la corréction et la deuxièmes pages
    bValiderElt.addEventListener("click",()=>
    {
        //bonne réponse
        if (result[index].correct == pElt[1].innerText && radio1Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score;
            //changement de class pour vérifier les bonne ou mauvaise question
            reponse1QElt.className = "correctionPositive";
            reponse2QElt.className = "correctionNegative";
            reponse3QElt.className = "correctionNegative";
            reponse4QElt.className = "correctionNegative";
            //Bulle de correction 
            divCorrectionAdd.className = "bulleCorrection";
            divCorrectionAdd.innerText = result[index].correction;
            //enlèves le boutton Valider
            bValiderElt.className = "hidden";
            // ajoute le bouton next
            bouttonNextAdd.className = "bouttonNext";

            
        }
        else if (result[index].correct == pElt[2].innerText && radio2Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score;
            //changement de class pour vérifier les bonne ou mauvaise question
            reponse2QElt.className = "correctionPositive";
            reponse1QElt.className = "correctionNegative";
            reponse3QElt.className = "correctionNegative";
            reponse4QElt.className = "correctionNegative";
            //Bulle de correction
            divCorrectionAdd.className = "bulleCorrection";
            divCorrectionAdd.innerText = result[index].correction;
            //enlèves le boutton Valider
            bValiderElt.className = "hidden";
            // ajoute le bouton next
            bouttonNextAdd.className = "bouttonNext";
           
        }
        else if (result[index].correct == pElt[3].innerText && radio3Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score;
            //changement de class pour vérifier les bonne ou mauvaise question
            reponse3QElt.className = "correctionPositive";
            reponse2QElt.className = "correctionNegative";
            reponse1QElt.className = "correctionNegative";
            reponse4QElt.className = "correctionNegative";
            //Bulle de correction
            divCorrectionAdd.className = "bulleCorrection";
            divCorrectionAdd.innerText = result[index].correction;
            //enlèves le boutton Valider
            bValiderElt.className = "hidden";
            // ajoute le bouton next
            bouttonNextAdd.className = "bouttonNext";
        }  
        else if (result[index].correct == pElt[4].innerText && radio4Elt.checked == true )
        {
            //prend +1 a chaque bonne réponse grace a la variable score
            boxScoreELt.innerHTML = "Score : " + ++score;
            //changement de class pour vérifier les bonne ou mauvaise question
            reponse4QElt.className = "correctionPositive";
            reponse2QElt.className = "correctionNegative";
            reponse3QElt.className = "correctionNegative";
            reponse1QElt.className = "correctionNegative";
            //Bulle de correction
            divCorrectionAdd.className = "bulleCorrection";
            divCorrectionAdd.innerText = result[index].correction;
            //enlèves le boutton Valider
            bValiderElt.className = "hidden";
            // ajoute le bouton next
            bouttonNextAdd.className = "bouttonNext";
        }
        //mauvaise réponse
        else
        {
            //prend 0 si mauvaise réponse
            console.log("non");
            boxScoreELt.innerHTML = "Score : " + score
            // changement de class pour vérifier les bonne ou mauvaise question
            // bValiderElt.className = "hidden"
            if (result[index].correct !== pElt[1].innerText)
            {
                //changement de class pour vérifier les bonne ou mauvaise question
                reponse1QElt.className = "correctionNegative";
                //Bulle de correction
                divCorrectionAdd.className = "bulleCorrection";
                divCorrectionAdd.innerText = result[index].correction;
                //enlèves le boutton Valider
                bValiderElt.className = "hidden";
                // ajoute le bouton next
                bouttonNextAdd.className = "bouttonNext";

                if (result[index].correct == pElt[2].innerText)
                {
                    reponse2QElt.className = "correctionPositive";
                    reponse3QElt.className = "correctionNegative";
                    reponse4QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[3].innerText)
                {
                    reponse3QElt.className = "correctionPositive";
                    reponse2QElt.className = "correctionNegative";
                    reponse4QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                    
                }
                else if (result[index].correct == pElt[4].innerText)
                {
                    reponse4QElt.className = "correctionPositive";
                    reponse2QElt.className = "correctionNegative";
                    reponse3QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }

            
            }
            else if (result[index].correct !== pElt[2].innerText)
            {
                //changement de class pour vérifier les bonne ou mauvaise question
                reponse2QElt.className = "correctionNegative";
                //Bulle de correction
                divCorrectionAdd.className = "bulleCorrection";
                divCorrectionAdd.innerText = result[index].correction;
                //enlèves le boutton Valider
                bValiderElt.className = "hidden";
                // ajoute le bouton next
                bouttonNextAdd.className = "bouttonNext";

                if (result[index].correct == pElt[1].innerText)
                {
                    reponse1QElt.className = "correctionPositive";
                    reponse3QElt.className = "correctionNegative";
                    reponse4QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[3].innerText)
                {
                    reponse3QElt.className = "correctionPositive";
                    reponse1QElt.className = "correctionNegative";
                    reponse4QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[4].innerText)
                {
                    reponse4QElt.className = "correctionPositive";
                    reponse1QElt.className = "correctionNegative";
                    reponse3QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
            }
            else if (result[index].correct !== pElt[3].innerText)
            {
                //changement de class pour vérifier les bonne ou mauvaise question
                reponse3QElt.className = "correctionNegative";
                //Bulle de correction
                divCorrectionAdd.className = "bulleCorrection";
                divCorrectionAdd.innerText = result[index].correction;
                //enlèves le boutton Valider
                bValiderElt.className = "hidden";
                // ajoute le bouton next
                bouttonNextAdd.className = "bouttonNext";

                if (result[index].correct == pElt[1].innerText)
                {
                    reponse1QElt.className = "correctionPositive";
                    reponse2QElt.className = "correctionNegative";
                    reponse4QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[2].innerText)
                {
                    reponse2QElt.className = "correctionPositive";
                    reponse1QElt.className = "correctionNegative";
                    reponse4QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[4].innerText)
                {
                    reponse4QElt.className = "correctionPositive";
                    reponse2QElt.className = "correctionNegative";
                    reponse1QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
            }
            else if (result[index].correct !== pElt[4].innerText)
            {
                //changement de class pour vérifier les bonne ou mauvaise question
                reponse4QElt.className = "correctionNegative";
                //Bulle de correction
                divCorrectionAdd.className = "bulleCorrection";
                divCorrectionAdd.innerText = result[index].correction;
                //enlèves le boutton Valider
                bValiderElt.className = "hidden";
                // ajoute le bouton next
                bouttonNextAdd.className = "bouttonNext";

                if (result[index].correct == pElt[1].innerText)
                {
                    reponse1QElt.className = "correctionPositive";
                    reponse2QElt.className = "correctionNegative";
                    reponse3QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[2].innerText)
                {
                    reponse2QElt.className = "correctionPositive";
                    reponse1QElt.className = "correctionNegative";
                    reponse3QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
                else if (result[index].correct == pElt[3].innerText)
                {
                    reponse3QElt.className = "correctionPositive";
                    reponse1QElt.className = "correctionNegative";
                    reponse2QElt.className = "correctionNegative";
                    
                    //enlèves le boutton Valider
                    bValiderElt.className = "hidden";
                }
            }  
        }

    })
    // quand je click sur next
    bouttonNextAdd.addEventListener("click",()=>
    {  
        //remets les réponse en vièrges
        reponse1QElt.className = "reponse1Q";
        reponse2QElt.className = "reponse2Q";
        reponse3QElt.className = "reponse3Q";
        reponse4QElt.className = "reponse4Q";

        //enlèves
        divCorrectionAdd.className = "hidden";
        bouttonNextAdd.className = "hidden";
        //ajoutes
        bValiderElt.className = "buttonValider";

        //ajoute +1 a notre variable result pour jouer a la suite les question
        console.log(index);
        index = ++index ;
        // stocker dans des variable change
        let cDataQ = result[index].question;
        let cDataR1 = result[index].reponse1;
        let cDataR2 = result[index].reponse2;
        let cDataR3 = result[index].reponse3;
        let cDataR4 = result[index].reponse4;
        let cCorrection = result[index].correction;
        console.log(index);
        // remlace nos paragraphe dans nos bulle de question 
        let changeQ = pElt[0].innerText = cDataQ;
        let changeP1 = pElt[1].innerText = cDataR1;
        let changeP2 = pElt[2].innerText = cDataR2;
        let changeP3 = pElt[3].innerText = cDataR3;
        let changeP4 = pElt[4].innerText = cDataR4;
  
        // il y a un bug ici il ne joue pas la dernières question
        //passe sur la deuxièmes page si c'est la fin
        if (index == 7)
        {
            console.log ("c'est fini !");
            screen1Elt.className = "hidden";
            screen2Elt.className = "screen2";
            LeaderboardValidation();
        }
    })
    // dans screen2
    //ciblier le boutton retry
    const buttonRetryElt = document.querySelector("#buttonRetry");
    //quand je click sur retry recommence le quizz
    buttonRetry.addEventListener("click", ()=>
    {
        //re mélanger le tableaux
        index = 0
        console.log (index);
        //mètres le score a 0
        score = 0;
        boxScoreELt.innerHTML = "Score : " + score ;
        //change d'écran
        screen1Elt.className = "containerQuestion";
        screen2Elt.className = "hidden";
    })

    //localStorage
    function LeaderboardValidation(event) {
        // CRÉER MON TABLEAU VIDE //
        if( localStorage.getItem("save") == null) {
            localStorage.setItem("save", "[]");
        }
        // CREER LES OBJETS //
        let leaderboardPlayers = {
            score: score
        }
        let old_data = JSON.parse(localStorage.getItem("save"));
        old_data.push(leaderboardPlayers);

        localStorage.setItem("save", JSON.stringify(old_data));

        let leaderboardStored = JSON.parse(localStorage.getItem("save"));

        // TRIER LE TABLEAU DES SCORES //
        leaderboardStored.sort((a, b) => {
            return b.score - a.score
        })
        console.log(leaderboardStored[0])
    }

})

