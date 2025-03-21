import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { address, abi } from './config';

if (!window.ethereum) {
	alert('You must install Metamask!');
}

function App() {
	const [readContract, setReadContract] = useState(); // Läser in kontrakt
	const [todos, setTodos] = useState([]); // Lista med todos

	useEffect(() => {
		if (readContract) return;

		const provider = new ethers.BrowserProvider(window.ethereum);

		const todoContract = new ethers.Contract(address, abi, provider);

		setReadContract(todoContract);
	}, [readContract]);

	const handleClick = async () => {
		const todoCount = await readContract.todoCount();
		console.log('Antal todos:', todoCount);

		for (let i = 0; i < todoCount; i++) {
			// kan inte använda length här...
			const todo = await readContract.todos(1); // Fixar inte att hämta hela listan , bara 1 objekt
			console.log('Todo:', todo.id, todo.text, todo.completed);
		}

		setTodos();
	};

	return (
		<>
			<button onClick={handleClick}>Get your todo list</button>
		</>
	);
}

export default App;
