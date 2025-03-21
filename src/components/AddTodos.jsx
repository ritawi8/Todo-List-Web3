import { useState } from 'react';

export const AddTodos = () => {
	const [text, setText] = useState('');

	return (
		<form>
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
