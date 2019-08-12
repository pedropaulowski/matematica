function responder() {
	var container_resposta = document.querySelector(".container_resposta");
	var mensagem = document.createElement("div");

	mensagem.setAttribute("class", "mensagem");
	
	
	
	var n1 = parseInt(document.querySelector("#n1").innerHTML);
	var n2 = parseInt(document.querySelector("#n2").innerHTML);
	var resposta = parseInt(document.querySelector("#resposta").value);
	var divisao = n1 / n2;


	if(divisao === resposta) {
		var txt = "Acertou";
		container_resposta.appendChild(mensagem);
		mensagem.innerText = txt;
	} else {
		var txt = "Errou, o resultado era: "+divisao+".";
		container_resposta.appendChild(mensagem);		
		mensagem.innerText = txt;
	}
	
	setTimeout(sortear, 2000);
}

function sortear() {
	x = Math.floor(Math.random() * 100);
	y = Math.floor(Math.random() * 100);

	document.querySelector("#n1").innerHTML = x;
	document.querySelector("#n2").innerHTML = y;

	var mensagem = document.querySelector(".mensagem")
    mensagem.innerText = "";
}