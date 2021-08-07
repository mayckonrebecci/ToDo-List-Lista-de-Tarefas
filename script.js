const array = [];

const container = document.querySelector("#container");
const input = document.querySelector("#todoInput");
const inputBox = document.querySelector("#item");
const buttonPlus = document.querySelector("#item .buttonPlus");
const createErroP = document.createElement("p");

// Coloca a cor do background do body no botão do ToDo Input
const getBodyColor = getComputedStyle(document.body);

buttonPlus.style.backgroundColor = "#777";

// Se a caixa de texto estiver vazia, o botão fica cinza. Se tiver caracteres, ele fica azul
// Precisa do 'oninput:"buttonPlusWork()"' no body para funcionar
// 'oninput' faz com que o evento se realize a cada caracter pressionado no teclado
function buttonPlusWork() {
	if (!input.value) {
		buttonPlus.style.cursor = "default";
        buttonPlus.style.backgroundColor = "#777";
	} else {        
		buttonPlus.style.cursor = "pointer";
		buttonPlus.style.backgroundColor = "#5c67ff";        
	}
}

// Faz o botão de ENTER funcionar no input
input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        buttonPlus.click();
    }
})

function addItem() {
    //Se caixa de texto estiver vazia, o botão não funciona. Se tiver caracteres, ele adiciona o item
	if (!input.value) {
	} else {
		array.push(input.value);

		// COMEÇA
		/* 
            Cria a 'div#createdItem' e coloca dentro da 'article#container'
            article#container > div#createdItem 
        */
		const createdItemDiv = document.createElement("div");
		createdItemDiv.classList.add("createdItem");

		container.appendChild(createdItemDiv);

		/* 
            Cria uma 'div', depois cria um 'p' e coloca dentro da div#createdItem
            div#createdItem > div > p 
        */
		const createDiv = document.createElement("div");
        const createPComp = document.createElement("p");
		const createP = document.createElement("p");    
		createP.innerText = array[array.length - 1];

		createdItemDiv.appendChild(createDiv);

		createDiv.appendChild(createP);

		/* 
            Cria uma 'div#createdButton' e coloca dentro da 'div#createdItem'
            div#createdItem > div#createdButton
        */
		const createDivCreatedButton = document.createElement("div");
		createDivCreatedButton.classList.add("createdButton");

		createdItemDiv.appendChild(createDivCreatedButton);

		/* 
            Cria um 'button.buttonPlus' e coloca dentro da 'div#createdButton'
            Coloca um style="margin-left: 3px" no button.buttonPlus
            Cria um 'span.material-icons{edit}' e coloca dentro da 'button.buttonPlus'
            div#createdButton > button.buttonPlus > span.material-icons{edit}
        */
		const createButtonPencil = document.createElement("button");
		createButtonPencil.classList.add("buttonPlus");

        // ? EVENT LISTENER
		createButtonPencil.addEventListener("click", function () {

            let editItem = prompt("Insira novo valor:");
            
            if (!editItem) {

            }else{
            createP.innerText = editItem;            
            }
        });

		createButtonPencil.style.marginLeft = "3px";

		createDivCreatedButton.appendChild(createButtonPencil);

		const createIconPencil = document.createElement("span");
		createIconPencil.classList.add("material-icons");
        createIconPencil.innerText = "edit";

		createButtonPencil.appendChild(createIconPencil);

		/* 
            Cria um 'button.buttonPlus' e coloca dentro da 'div#createdButton'
            Coloca um style="margin-left: 3px" no button.buttonPlus
            Cria um 'span.material-icons{done}' e coloca dentro da 'button.buttonPlus'
            div#createdButton > button.buttonPlus > span.material-icons{done}
        */
		const createButtonCheck2 = document.createElement("button");
		createButtonCheck2.classList.add("buttonPlus");

        // ? EVENT LISTENER
		let count = 0;
		createButtonCheck2.addEventListener("click", function () {
			count++;

			if (count % 2 === 0) {                
				createdItemDiv.style.width = "";
				createdItemDiv.style.opacity = "";    
                createdItemDiv.style.boxShadow = "";    
                createButtonPencil.style.visibility = "";
                createButtonCheck2.style.backgroundColor = "";
                createButtonTrash.style.backgroundColor = "";
				createP.style.textDecoration = "";

                createPComp.remove();
			} else {
                createdItemDiv.style.width = "80%";
				createdItemDiv.style.opacity = "40%";
                createdItemDiv.style.boxShadow = "none";   
                createButtonCheck2.style.backgroundColor = "#777";
                createButtonTrash.style.backgroundColor = "#777";
                createButtonPencil.style.visibility = "hidden";
				createP.style.textDecoration = "line-through";

                
                createDiv.appendChild(createPComp);
                createDiv.appendChild(createP);
                createPComp.innerHTML = "✔";  
                createPComp.style.textAlign = "right";  
                createPComp.style.color = "red";
                createPComp.style.fontSize = "25px";
                createPComp.style.fontFamily = "Times New Roman";
                createDiv.style.display = "flex";
		        
		        
			}
		});
        
		createButtonCheck2.style.marginLeft = "3px";

		createDivCreatedButton.appendChild(createButtonCheck2);

		const createIconCheck2 = document.createElement("span");
		createIconCheck2.classList.add("material-icons");
        createIconCheck2.innerText = "done";

        createButtonCheck2.appendChild(createIconCheck2);

		/* 
            Cria um 'button.buttonPlus' e coloca dentro da 'div#createdButton'
            Coloca um style="margin-left: 3px" no button.buttonPlus
            Cria um 'span.material-icons{clear}' e coloca dentro da 'button.buttonPlus'
            div#createdButton > button.buttonPlus > span.material-icons{clear}
        */
		const createButtonTrash = document.createElement("button");
		createButtonTrash.classList.add("buttonPlus");

        // ? EVENT LISTENER
		createButtonTrash.addEventListener("click", function () {
			createdItemDiv.remove();
		});

		createDivCreatedButton.appendChild(createButtonTrash);

		createButtonTrash.style.marginLeft = "3px";

		const createIconTrash = document.createElement("span");
		createIconTrash.classList.add("material-icons");
        createIconTrash.innerText = "clear";


		createButtonTrash.appendChild(createIconTrash);
	}

	input.focus();
	input.value = "";
	buttonPlus.style.backgroundColor = "#777";
    buttonPlus.style.cursor = "default";
}

