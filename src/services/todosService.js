export const getTodos = async (readContract) => {
	const todoCount = await readContract.todoCount();

	const todosTempArray = [];
	for (let i = 0; i < todoCount; i++) {
		const todo = await readContract.todos(i + 1);

		todosTempArray.push(todo); // Lägger in todos i en lista
	}

	return todosTempArray;
};
