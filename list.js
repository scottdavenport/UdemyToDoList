var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit") {
	//handle input
	if(input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();
	}
	//ask again for new input
	var input = prompt("What would you like to do?");
}

console.log("OK you quit");

function listTodos(){
	console.log("**********")
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("**********")
}

function addTodo(){
	//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add todos array
		todos.push(newTodo);
		console.log("Added Todo")
}

function deleteTodo(){
	//ask for index of todo to be deleted
		var index = prompt("What is the index?");
		//delete that todo
		//splice(position & number of items)
		todos.splice(index, 1);
		console.log("Deleted Todo");
}