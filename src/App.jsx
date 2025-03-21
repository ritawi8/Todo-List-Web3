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

		const provider = new ethers.BrowserProvider(window.ethereum); // Skapar en provider

		const todoContract = new ethers.Contract(address, abi, provider); // Skapar ett kontrakt baserat på vad vi har installerat på kedjan

		setReadContract(todoContract); // Sätt kontrakt till mitt state
	}, [readContract]);

	const handleClick = async () => {
		const todoCount = await readContract.todoCount();

		const todosTempArray = [];
		for (let i = 0; i < todoCount; i++) {
			const todo = await readContract.todos(i + 1);

			todosTempArray.push(todo); // Lägger in todos i en lista
		}

		setTodos(todosTempArray);
	};

	return (
		<>
			<button onClick={handleClick}>
				Get your todo list from a blockchain
			</button>

			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.text}</li>;
				})}
			</ul>
		</>
	);
}

export default App;
