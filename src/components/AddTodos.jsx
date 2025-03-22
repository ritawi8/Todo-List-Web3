import { useState } from 'react';
import { createTodo } from '../services/todosService';

export const AddTodos = ({ writeContract, getTodos }) => {
	const [text, setText] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const success = await createTodo(text, writeContract);

		if (success) {
			console.log('Todo skapad');
			getTodos();
		} else {
			console.log('Todo är inte skapad');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button>Save</button>
		</form>
	);
};
