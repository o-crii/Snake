var blocksize = 25; //dimensione del singolo blocco del canvas//
var rows = 20; //righe canvas//
var cols = 20; //colonne canvas//
var Board;
var context; //sarà l'oggetto che utilizzeremo per disegnare//

//disegno la testa del serpente//
var SnakeX = blocksize * 7; 
var SnakeY = blocksize * 7;
var SnakeVX = 0; //velocità del serpente sull'asse x = 0//
var SnakeVY = 0; //velocità del serpente sull'asse y = 0//
//facendo così facciamo spawnare il serpente nel punto 7, 7, del nostro canvas all'inizio del gioco//

//disegnamo la mela//
var MelaX;
var MelaY;
//settiamo lo spawn della mela//

window.onload = function() {
	Board = document.getElementById('Board')  //la variabile Board ha un tag canvas//

	Board.height = rows * blocksize; //impostiamo l'altezza del canvas moltiplicando le righe per la dimensione del singolo blocco//

	Board.width = cols * blocksize; //impostiamo la larghezza del canvas moltiplicando le colonne per la dimensione del singolo blocco//

	context = Board.getContext('2d') //otteniamo il contesto: board prendi contesto 2d (dimensione); tutto questo è usato per disegnare sulla lavagna//

	//funzione di aggiornamento che aggiornerà la lavagna//

	PosizioneMela();

	//facciamo muovere il serpente//

	document.addEventListener("keyup", changeDirection); //changeDirection è il richiamo della funzione//

	//update(); //ripetiamo la funzione update più volte perché sennò non si accocchia mentre il serpente si muove
	setInterval(update, 1000/10); //ogni 100 millisecondi eseguirà la funzione di aggiornamento
}

function update() {
	context.fillStyle="black" //setta il riempimento nero del contesto//
	context.fillRect(0, 0, Board.width, Board.height) //partiamo dall'angolo 0,0 che dovrebbe rappresentare il primo quadratino in alto a sinistra e riempiamo di nero il canvas fino all'ultimo quadratino//

	context.fillStyle="lime" //setta il riempimento del blocco lime per il colore del serpente//
	SnakeX += SnakeVX * blocksize //faccio muovere il serpente di un blocco sull'asse x
	SnakeY += SnakeVY * blocksize //faccio muovere il serpente di un blocco sull'asse y
	context.fillRect(SnakeX, SnakeY, blocksize, blocksize) //disegnamo la testa del serpente nel canvas settando larghezza e altezza//

	context.fillStyle="red" //setta il riempimento del blocco rosso per il colore della mela//
	context.fillRect(MelaX, MelaY, blocksize, blocksize)
}

function changeDirection() {

	//condizione se premiamo la freccia//

	if (e.code == "ArrowUp") {
		SnakeVX = 0; //muovendosi in alto la velocità del serpente sull'asse x non cambierà//
		SnakeVY = -1; //muovendosi in alto la velocità del serpente sull'asse y cambierà e passerà a -1//
	}

	else if (e.code == "ArrowDown") {
		SnakeVX = 0; //muovendosi in basso la velocità del serpente sull'asse x non cambierà//
		SnakeVY = 1; //muovendosi in basso la velocità del serpente sull'asse y cambierà e passerà a 1//
	}

	else if (e.code == "ArrowLeft") {
		SnakeVX = -1; //muovendosi a sinistra la velocità del serpente sull'asse x cambierà e passerà a -1//
		SnakeVY = 0; //muovendosi in alto la velocità del serpente sull'asse y non cambierà//
	}

	else if (e.code == "ArrowRight") {
		SnakeVX = 1; //muovendosi a sinistra la velocità del serpente sull'asse x cambierà e passerà a 1//
		SnakeVY = 0; //muovendosi in alto la velocità del serpente sull'asse y non cambierà//
	}
}

//creiamo una funzione che faccia spawnare il cibo in un punto a caso nel canvas//
function PosizioneMela() {

	//Math.random restituisce un numero compreso tra 0 e 1 e lo moltiplica per il numero di colonne o righe del canvas così diventerà un numero compreso tra 0 e 19 e lo moltiplichiamo per la dimensione del blocco (25)//
	//urilizziamo Math.floor per eliminare le cifre decimali//

	MelaX = Math.floor(Math.random() * cols) * blocksize;
	MelaY = Math.floor(Math.random() * rows) * blocksize;
}

