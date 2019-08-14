function responder() {
	var container_resposta = document.querySelector(".container_resposta");
	var mensagem = document.querySelector("#mensagem");
		
	var n1 = parseInt(document.querySelector("#n1").innerHTML);
	var n2 = parseInt(document.querySelector("#n2").innerHTML);
	var resposta = parseInt(document.querySelector("#resposta").value);
	var multiplicacao = n1 * n2;


	if(multiplicacao === resposta) {
		var txt = "Acertou";
		var ancora = document.createElement("a");
		ancora.innerText = txt;
		mensagem.appendChild(ancora);

	} else {
		var txt = "Errou, o resultado era: "+multiplicacao+".";
		var ancora = document.createElement("a");
		ancora.innerText = txt;
		mensagem.appendChild(ancora);

	}
	
	setTimeout(sortear, 1000);
}

function sortear() {
	x = Math.floor(Math.random() * 100);
	y = Math.floor(Math.random() * 100);

	var mensagem = document.querySelector("#mensagem");
	mensagem.innerHTML = '';

	var txt = "";
	var ancora = document.querySelector("#mensagem a");
	ancora.innerText = txt;

	mensagem.appendChild(ancora);
}