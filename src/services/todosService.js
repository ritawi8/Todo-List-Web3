export const getTodos = async (readContract) => {
	const todoCount = await readContract.todoCount();

	const todosTempArray = [];
	for (let i = 0; i < todoCount; i++) {
		const todo = await readContract.todos(i + 1);

		if (todo && todo.id > 0) {
			todosTempArray.push(todo); // Lägger in todos i en lista
		}
	}

	return todosTempArray;
};

export const createTodo = async (text, writeContract) => {
	try {
		const response = await writeContract.createTodo(text);
		await response.wait();

		return true;
	} catch {
		return false;
	}
};

export const removeTodo = async (id, writeContract) => {
	try {
		const response = await writeContract.removeTodo(id);
		await response.wait();

		return true;
	} catch {
		return false;
	}
};
