const Todos = ({ todos }) => {
	return (
		<ul>
			{todos.map((todo) => {
				return <li key={todo.id}>{todo.text}</li>;
			})}
		</ul>
	);
};

export default Todos;
