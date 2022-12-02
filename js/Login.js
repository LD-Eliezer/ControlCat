document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

var Email;
var Senha;
var email;
var senha;

function cad(){

	var Csenha = document.getElementById('Csenha').value;
	email = document.getElementById('email').value;
	senha = document.getElementById('senha').value;	

	if(Csenha == senha){
		alert('Cadastrado');
	}else{
		alert('Senhas não Compatíveis');
		exit();
	}

}

function log(){

	Email = document.getElementById('Email').value;
	Senha = document.getElementById('Senha').value;	

	if(Email == email && Senha == senha){
		alert('Login Feito')
		location.href = "Escolhas.html";
	}else{
		alert('Login Incorreto');
	}
}
