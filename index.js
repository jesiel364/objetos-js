

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const produtos = [];
const produto1 = new Object();
produto1.titulo = 'Arroz';
produto1.preco = 4.99;

const produto2 = new Object();
produto2.titulo = 'Feijão';
produto2.preco = 10.0;

const produto3 = new Object();
produto1.titulo3 = 'Peixe';
produto1.preco3 = 15.99;

produtos.push(produto1, produto2, produto3)
console.log(produtos);
