//DEFININDO OS ATRIBUTOS DA LABEL
let newElement2 = document.createElement('label');
newElement2.innerText = 'Nome: ';
newElement2.style.margin = '0 10px';
newElement2.setAttribute('for', 'Nome');
document.body.appendChild(newElement2);

//DEFININDO OS ATRIBUTOS DA INPUT
let newHTMLElement = document.createElement('input');
newHTMLElement.type = 'text';
newHTMLElement.name = 'nome';
newHTMLElement.style.borderRadius = '10px'
newHTMLElement.id = 'MyId';
document.body.appendChild(newHTMLElement);

//DEFININDO OS ATRIBUTOS DO BUTTON

let newButton = document.createElement('button');
newButton.innerText = 'Clicar';
newButton.style.margin = '0 5px';
newButton.setAttribute = ('type', 'button');
newButton.style.borderRadius = '5px'
document.body.appendChild(newButton);

//QUEBRA DE LINHA
let lineBreak = document.createElement('br');
document.body.appendChild(lineBreak);

// DEFININDO OUTRA LABEL

let myLabel = document.createElement('label');
myLabel.innerText = 'Sobrenome: ';
myLabel.id = 'myIId';
myLabel.style.margin = '0 10px';
myLabel.setAttribute('for', 'Sobrenome');
document.body.appendChild(myLabel)

//DEFININDO OUTRA INPUT

let test = document.createElement('input');
test.type = 'text';
test.name = 'nome';
test.style.borderRadius = '10px'
test.id = 'MyId';
document.body.appendChild(test);

//DEFININDO OUTRO BUTTON

let Button = document.createElement('button');
Button.innerText = 'Clicar';
Button.style.margin = '0 5px';
Button.setAttribute = ('type', 'button');
Button.style.borderRadius = '5px'
document.body.appendChild(Button);

document.body.style.display = 'flex';
