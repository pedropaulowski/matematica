function responder() {
	var container_resposta = document.querySelector(".container_resposta");
	var mensagem = document.querySelector("#mensagem");
		
	var n1 = parseInt(document.querySelector("#n1").innerHTML);
	var n2 = parseInt(document.querySelector("#n2").innerHTML);
	var resposta = parseInt(document.querySelector("#resposta").value);
	var divisao = n1 / n2;


	if(divisao === resposta) {
		var txt = "Acertou";
		var ancora = document.createElement("a");
		ancora.innerText = txt;
		mensagem.appendChild(ancora);

	} else {
		var txt = "Errou, o resultado era: "+divisao+".";
		let ancora = document.createElement("a");
		ancora.innerText = txt;
		mensagem.appendChild(ancora);
	}
	
	setTimeout(sortear, 1000);
}

function sortear() {
	x = Math.floor(Math.random() * 100);
	y = Math.floor(Math.random() * 100);

	document.querySelector("#n1").innerHTML = x;
	document.querySelector("#n2").innerHTML = y;

	var mensagem = document.querySelector("#mensagem");
	mensagem.innerHTML = '';

}