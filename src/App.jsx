import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { address, abi } from './config';
import { getTodos } from './services/todosService';
import Todos from './components/Todos';
import { AddTodos } from './components/AddTodos';

if (!window.ethereum) {
	alert('You must install Metamask!');
}

function App() {
	const [readContract, setReadContract] = useState(); // Läser in kontrakt
	const [writeContract, setWriteContract] = useState(); // Skriver i ett kontrakt
	const [todos, setTodos] = useState([]); // Lista med todos

	useEffect(() => {
		if (readContract && writeContract) return;

		const setupContracts = async () => {
			const provider = new ethers.BrowserProvider(window.ethereum); // Skapar en provider

			const rContract = new ethers.Contract(address, abi, provider); // Skapar ett kontrakt baserat på vad vi har installerat på kedjan

			const signer = await provider.getSigner();
			const wContract = new ethers.Contract(address, abi, signer);
			setReadContract(rContract); // Sätt kontrakt till mitt state
			setWriteContract(wContract);
		};
		setupContracts();
	}, [readContract, writeContract]);

	const getTodosFromChain = async () => {
		const todos = await getTodos(readContract);
		setTodos(todos);
	};

	return (
		<>
			<button onClick={getTodosFromChain}>
				Get your todo list from a blockchain
			</button>

			<AddTodos
				writeContract={writeContract}
				getTodos={getTodosFromChain}
			/>

			<Todos
				todos={todos}
				getTodos={getTodosFromChain}
				writeContract={writeContract}
			/>
		</>
	);
}

export default App;
