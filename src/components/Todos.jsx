import { removeTodo } from '../services/todosService';

const Todos = ({ todos, getTodos, writeContract }) => {
	const handleRemoveTodo = async (id) => {
		const success = await removeTodo(id, writeContract);

		if (success) {
			await getTodos();
		} else {
			console.error('Can not delete todo with id:', id);
		}
	};

	return (
		<ul>
			{todos.map((todo) => {
				return (
					<li key={todo.id}>
						<span>{todo.text}</span>
						<button
							onClick={() => {
								handleRemoveTodo(todo.id);
							}}>
							Delete
						</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Todos;
