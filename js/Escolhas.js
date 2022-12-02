var valorant;
var leagueoflegends;
var csgo;

function cV(){
    valorant = document.getElementById('valorant');
    if(valorant){
        valorant = 1;
    }
    console.log(valorant,leagueoflegends,csgo);

    if(valorant == 1 || leagueoflegends == 1 || csgo ==1){
        location.href = "Perfil.html";
    }
}

function cL(){
    leagueoflegends = document.getElementById('leagueoflegends');
    if(leagueoflegends){
        leagueoflegends = 1;
    }
    console.log(valorant,leagueoflegends,csgo);

    if(valorant == 1 || leagueoflegends == 1 || csgo ==1){
        location.href = "Perfil.html";
    }

}

function cC(){
    csgo = document.getElementById('csgo');
    
    if(csgo){
        csgo = 1;
    }
    console.log(valorant,leagueoflegends,csgo);

    if(valorant == 1 || leagueoflegends == 1 || csgo ==1){
        location.href = "Perfil.html";
    }
}

function rV(){
    valorant = document.getElementById('valorant');
    if(valorant = 1){
        valorant = undefined;
    }else{
        valorant= undefined;
    }
    console.log(valorant,leagueoflegends,csgo);
}

function rL(){
    leagueoflegends = document.getElementById('leagueoflegends');
    if(leagueoflegends =1){
        leagueoflegends = undefined;
    }else{
        leagueoflegends = undefined;
    }
    console.log(valorant,leagueoflegends,csgo);
}

function rC(){
    csgo = document.getElementById('csgo');
    if(csgo = 1){
        csgo = undefined;
    }else{
        csgo = undefined;
    }
    console.log(valorant,leagueoflegends,csgo);
}
