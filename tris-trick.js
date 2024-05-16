//variabili da tenersi strette strette al culetto
let turno = false;//per gestire i turni
let turnoSuccessivo = '';//direi che è scontato
let casella = "";//contiene id casella
let casellaNum = 0;//contine il numero dell'id della casella
let casellaGrande = '';//contiene la casella grade
let vecchiaCasellaGrande = '';//variabile temporanea per far ritornare normale il colore della casella grande usata
let contaTurni = 0;
const caselleUsate = [];//array che contine tutte le caselle che sono già state premute in precedenza 
const caselleRosse = [];
const caselleBlue = [];
const caselleGrandiUsate = [];//array che contine tutte le caselle grandi che sono già state premute in precedenza
const caselleGrandiRosse = [];
const caselleGrandiBlue = [];


//funzione per piazzare i segni e gestire il gioco
function place() {

    //individuo la cella che viene cliccata e prelevo il numero del suo id
    casella = event.target.id;
    casellaNum = parseInt(casella.replace('i',""));
    
    
    //if per l'inversione dei turni
    if (turno == true) {


        //segno rosso + controllo caselle già usate
        if (in_array(casellaNum, caselleUsate) == false) {
            if (contaTurni>0 && turnoSuccessivo==riconosciGrande(casellaNum) && in_array(turnoSuccessivo.replace('grande',''),caselleGrandiUsate)==false) { 
                //turno normale
                mossa(caselleRosse,caselleGrandiRosse,'rosso')
            } else if (in_array(turnoSuccessivo.replace('grande',''),caselleGrandiUsate)==true && riconosciGrande(casellaNum)!==turnoSuccessivo) { 
                //caso in cui hai la mossa libera
                mossa(caselleRosse,caselleGrandiRosse,'rosso')
            } else {
                //questo avviene solo per il primo turno
                if (contaTurni<1) {
                    primaMossa(caselleBlue,'rosso')
                }
                return 0;
            }
        } else {
            return 0;
        }


    } else if (turno == false) {


        //segno blu + controllo caselle già usate
        if (in_array(casellaNum, caselleUsate) == false) {
            if (contaTurni>0 && turnoSuccessivo==riconosciGrande(casellaNum) && in_array(turnoSuccessivo.replace('grande',''),caselleGrandiUsate)==false) { 
                //turno normale
                mossa(caselleBlue,caselleGrandiBlue,'blue')
            } else if (in_array(turnoSuccessivo.replace('grande',''),caselleGrandiUsate)==true && riconosciGrande(casellaNum)!==turnoSuccessivo) { 
                //caso in cui hai la mossa libera
                mossa(caselleBlue,caselleGrandiBlue,'blue')
            } else {
                //questo avviene solo per il primo turno
                if (contaTurni<1) {
                    primaMossa(caselleBlue,'blue')
                }
                return 0;
            }
        } else {
            return 0;
        }
    }
    turnoSuccessivo = portaGrande(casellaNum);
}


//funzione per ricercare un valore in un array
function in_array(valoreIngresso, arrayIngresso) {
    for(i = 0; i<arrayIngresso.length; i++) {
        if(valoreIngresso == arrayIngresso[i]) {
            return true;
        }
    }
    return false;
}


//funzione per controllare a quale casella grande corrisponde la casella piccola appena cliccata
function portaGrande(valoreIngresso) {
    for (i=1; i<10; i++) {
        let cont = i;
        for (a=i; a<(10+i); a++) {
            if (i== (valoreIngresso-(9*(a-i)))) {
                return 'grande' + cont;
            }
        }
    }
}


//funzione per capire in quale casella grande ci troviamo partendo dalla casella piccola
function riconosciGrande(valoreIngresso) {
    return 'grande' + (Math.floor((valoreIngresso-1)/9)+1);
}


//funzione per controllare se un giocatore ha vinto in uno dei 9 quadranti
function controllaVittoriaPiccolo(valoreIngresso, arrayIngresso) {
    let grandeNum = parseInt((riconosciGrande(valoreIngresso)).replace("grande",""));
    if (in_array((9*(grandeNum-1))+1, arrayIngresso) == true && in_array((9*(grandeNum-1))+2, arrayIngresso) == true && in_array((9*(grandeNum-1))+3, arrayIngresso) == true) {
        return grandeNum;  
    } else if (in_array((9*(grandeNum-1))+1, arrayIngresso) == true && in_array((9*(grandeNum-1))+5, arrayIngresso) == true && in_array((9*(grandeNum-1))+9, arrayIngresso) == true) {
        return grandeNum;   
    } else if (in_array((9*(grandeNum-1))+1, arrayIngresso) == true && in_array((9*(grandeNum-1))+4, arrayIngresso) == true && in_array((9*(grandeNum-1))+7, arrayIngresso) == true) {
        return grandeNum;   
    } else if (in_array((9*(grandeNum-1))+2, arrayIngresso) == true && in_array((9*(grandeNum-1))+5, arrayIngresso) == true && in_array((9*(grandeNum-1))+8, arrayIngresso) == true) {
        return grandeNum;    
    } else if (in_array((9*(grandeNum-1))+3, arrayIngresso) == true && in_array((9*(grandeNum-1))+5, arrayIngresso) == true && in_array((9*(grandeNum-1))+7, arrayIngresso) == true) {
        return grandeNum;   
    } else if (in_array((9*(grandeNum-1))+3, arrayIngresso) == true && in_array((9*(grandeNum-1))+6, arrayIngresso) == true && in_array((9*(grandeNum-1))+9, arrayIngresso) == true) {
        return grandeNum;
    } else if (in_array((9*(grandeNum-1))+4, arrayIngresso) == true && in_array((9*(grandeNum-1))+5, arrayIngresso) == true && in_array((9*(grandeNum-1))+6, arrayIngresso) == true) {
        return grandeNum;
    } else if (in_array((9*(grandeNum-1))+7, arrayIngresso) == true && in_array((9*(grandeNum-1))+8, arrayIngresso) == true && in_array((9*(grandeNum-1))+9, arrayIngresso) == true) {
        return grandeNum;
    } else {
        return 0;
    }
}


//funzione per controllare se un giocatore ha vinto la partita
function controllaVittoriaGrande(arrayIngresso) {
    if (in_array(1, arrayIngresso) == true && in_array(2, arrayIngresso) == true && in_array(3, arrayIngresso) == true) {
        return true;  
    } else if (in_array(1, arrayIngresso) == true && in_array(5, arrayIngresso) == true && in_array(9, arrayIngresso) == true) {
        return true;   
    } else if (in_array(1, arrayIngresso) == true && in_array(4, arrayIngresso) == true && in_array(7, arrayIngresso) == true) {
        return true;   
    } else if (in_array(2, arrayIngresso) == true && in_array(5, arrayIngresso) == true && in_array(8, arrayIngresso) == true) {
        return true;    
    } else if (in_array(3, arrayIngresso) == true && in_array(5, arrayIngresso) == true && in_array(7, arrayIngresso) == true) {
        return true;   
    } else if (in_array(3, arrayIngresso) == true && in_array(6, arrayIngresso) == true && in_array(9, arrayIngresso) == true) {
        return true;
    } else if (in_array(4, arrayIngresso) == true && in_array(5, arrayIngresso) == true && in_array(6, arrayIngresso) == true) {
        return true;
    } else if (in_array(7, arrayIngresso) == true && in_array(8, arrayIngresso) == true && in_array(9, arrayIngresso) == true) {
        return true;
    } else {
        return 0;
    }
}


//inizio gioco
function inizio() {
    let temp = prompt('chi comincia rosso/blue');
    if (temp == 'rosso') {
        return true;
    } else if (temp == 'blue') {
        return false;
    } else {
        inizio();
    }
}


//funzione per far avvenire e segnare ogni mossa dei giocatori
function mossa(casellePiccole, caselleGrandi, colore) {
    //fare il segno 
    if (colore == 'rosso') {
        document.getElementById(casella).style.backgroundColor = 'rgb(119, 52, 52)';
        document.getElementById(casella).style.borderRadius = '15px';
    } else if (colore == 'blue') {
        document.getElementById(casella).style.backgroundColor = 'rgb(26, 58, 80)';
        document.getElementById(casella).style.borderRadius = '100%';
    }
    //cambio turno
    if (colore == 'rosso') {
        turno = false;
    } else if (colore == 'blue') {
        turno = true;
    }
    contaTurni++;
    //caselle già usate
    caselleUsate.push(casellaNum);
    casellePiccole.push(casellaNum);
    //caselle grandi già usate 
    if (controllaVittoriaPiccolo(casellaNum, casellePiccole)!==0) {
        caselleGrandi.push(controllaVittoriaPiccolo(casellaNum, casellePiccole));
        caselleGrandiUsate.push(controllaVittoriaPiccolo(casellaNum, casellePiccole));
    }
    //fare il segno  grande 



    
    //cambio colore sfondo del turno
    document.getElementById(turnoSuccessivo).style.backgroundColor = 'rgb(97, 96, 96)';
    document.getElementById(portaGrande(casellaNum)).style.backgroundColor = 'rgb(150, 150, 150)';
    //controllo per la vittoria o il pareggio
    if (controllaVittoriaGrande(caselleGrandi)==true) {
        if (colore == 'rosso') {
            alert('complimenti giocatore rosso hai vinto la partita!!! E ricorda sempre che sei vai in bagno dopo il messicano ed il water è rosso non è mai un buon segno')
            location.reload()
        } else if (colore == 'blue') {
            alert("complimenti giocatore blue hai vinto la partita!!! E ricorda sempre che se ti svegli e sei blue, si sarai come un puffo, però meglio che corri all'ospedale")
            location.reload()
        }
    } else if (caselleGrandiUsate.length==9) {
        alert('La partita si è conclosa con un pareggio')
        location.reload()
    }
}


//funzione per fare il primo turno di gioco
function primaMossa(casellePiccole, colore) {
    document.getElementById(portaGrande(casellaNum)).style.backgroundColor = 'rgb(150, 150, 150)';
    document.getElementById(casella).style.backgroundColor = 'rgb(26, 58, 80)';
    document.getElementById(casella).style.borderRadius = '100%';
    turnoSuccessivo = portaGrande(casellaNum);
    caselleUsate.push(casellaNum);
    casellePiccole.push(casellaNum);
    if (colore == 'rosso') {
        turno = false;
    } else if (colore == 'blue') {
        turno = true;
    }
    contaTurni++;
}



/*
COMANDI UTILI:
-event.target.id
-parseInt()
-nome_oggetto.replace("parola da sostituire","sostituente")
-Nome_array.length
-prompt()
-math.floor(a/b)
-reload()


---Colore segno blue:  rgb(26, 58, 80);
---Colore segno rosso:  rgb(119, 52, 52);
---Colore dello sfondo per indicare il turno: rgb(150, 150, 150); 
*/ 




                //console.log(controllaVittoriaPiccolo(casellaNum, caselleRosse));
                //console.log(controllaVittoriaPiccolo(casellaNum, caselleBlue));