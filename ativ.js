let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.length);
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);
console.log(numeros[8]);

let filmes = ['infinite', 'luca', 'black mirror', 'venom', 'espace room'];
console.log(filmes.length);
console.log(filmes[2]);
console.log(filmes[4]);
console.log(filmes[0]);

var music = ['magic - rude', 'Gotye - Somebody That I Used To Know', 'magic - no way no', 'The kid Laroi, Justin Bieber - Stay', 'surf curse - freaks'];
console.log(music[1]);
console.log(music[3]);
console.log(music[5]);//Deu undefined, pois a posição quinta não recebeu nenhum valor.
console.log(music[8]);//Deu undefined, pois a posição oitava não recebeu nenhum valor.
var ultima = music[music.length -1];
console.log(ultima);

//Atividade de fixação - 02 
//01
var numericos = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
var ordenadas = numericos.sort();
console.log(ordenadas); 

//02
var times = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];
var novoTimeNoFinal01 = times.push('Flamengo');
var tirarOprimeiroTime = times.shift();
var novoTimeNoComeco01 = times.unshift('Palmeiras');
var novoTimeNoFinal02 = times.push('Grêmio');
var novoTimeNoComeco02 = times.unshift('São Paulo', 'Santos');
var quantidadesDeItens = times.length;
console.log(quantidadesDeItens);
var tirarOultimoTime = times.pop();
var ordenadasDosTimes = times.sort();
console.log(times);

//03
var atividadesDoMeuDia_a_Dia = ['tomei banho', 'coloquei comida para a minha gata(luna)', 'coloquei as plantas no sol', 'fiz o meu café da manhã', 'arrumei a minha', 'arrumei o meu quarto', 'lavei os pratos sujos', 'leguei o pc para estudar'];
console.log(atividadesDoMeuDia_a_Dia.reverse());
console.log(atividadesDoMeuDia_a_Dia[3]); 
console.log(atividadesDoMeuDia_a_Dia[6]);
var atividadesDoMeuDia_a_DiaTodaEmString = atividadesDoMeuDia_a_Dia.join(' - ');
console.log(atividadesDoMeuDia_a_DiaTodaEmString);
var maisGostoDeFazer = ['comer', 'Dormir'];
var conecta = atividadesDoMeuDia_a_Dia.concat(maisGostoDeFazer);
console.log(conecta);

//04
var cidades = ['Recife', 'Cabo', 'Gaibu', 'Boa viagem', 'Abreu e Lima']
console.log(cidades.sort());
var removerAprimeiraCidade = cidades.shift();
var remvorAultimaCidade = cidades.pop();
console.log(cidades.sort());