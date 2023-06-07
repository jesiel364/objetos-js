

// Write Javascript code!
const appDiv = document.getElementById('app');


const produtos = [];
const produto1 = new Object();
produto1.id = 1;
produto1.titulo = 'Arroz';
produto1.preco = 4.99;

const produto2 = new Object();
produto2.id = 2;
produto2.titulo = 'Feijão';
produto2.preco = 10.0;

const produto3 = new Object();
produto3.id= 3;
produto3.titulo= 'Peixe';
produto3.preco = 15.99;

produtos.push(produto1, produto2, produto3)
console.log(produtos);

let tbody = document.getElementById('tbody')

for(let i = 0; i < produtos.length; i++){
	let tr = tbody.insertRow()
	let td_id = tr.insertCell()
	let td_titulo = tr.insertCell()
	let td_preco = tr.insertCell()
	
	td_id.innerText = produtos[i].id
	td_titulo.innerText = produtos[i].titulo
	td_preco.innerText = produtos[i].id
	appDiv.innerHTML += `<h1>${produtos[i].titulo}</h1>`;
	appDiv.innerHTML += `<p>${produtos[i].preco}</>`;
}
