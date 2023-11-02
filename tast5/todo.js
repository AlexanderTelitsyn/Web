const input = document.getElementById('todoInput');

function addTodo() {

	const ul = document.getElementById('todoList');
	const li = document.createElement('li');
	const hint = document.getElementById('hint')
	if(input.value.trim() === '')
	{	
		hint.textContent = "Введи текс, ОГРЫЗОК"
		return;
	}
	let str = input.value;
	str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	li.textContent = str;
	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'Удалить';
	deleteButton.onclick = function() {
		ul.removeChild(li)
	}
	li.appendChild(deleteButton)
	input.value = '';
	ul.appendChild(li);
	hint.textContent = '';
}

input.addEventListener(

	'keydown',

	function(event) {
		if(event.key ==='Enter')
			addTodo();
			}
	);

