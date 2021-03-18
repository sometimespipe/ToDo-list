//import react into the bundle
import React, { useState } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
//import { useState } from "react/cjs/react.production.min";

//import your own components

const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [todo, setTodo] = useState([]);
	let [counter, setCounter] = useState(0);

	//const { handleAddItem } = props;
	const handleSubmit = e => {
		//listElements.append(setInputValue);
		//setCounter(counter++);
		e.preventDefault();
		if (inputValue != null) {
			let newTask = [...todo, inputValue];
			setTodo(newTask);
		}

		setInputValue("");
	};

	const removeTask = element => {
		let removeFromArray = todo.filter(
			item => todo.indexOf(item) !== element
		);
		setTodo(removeFromArray);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="card text-center">
					<div className="card-header">
						<input
							type="text"
							className="mx-auto w-70"
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							autoFocus
						/>

						<button
							type="submit"
							className="btn btn-primary"
							disabled={inputValue.trim() ? "" : "disabled"}>
							Add task
						</button>
					</div>
					<div className="card-body">
						<div>
							{todo.map(item => {
								return (
									<li key={Math.random() * 60}>
										{item}
										<span
											className="float-right"
											onClick={() =>
												removeTask(todo.indexOf(item))
											}>
											<i
												className="fas fa-times"
												style={{ color: "red" }}></i>
										</span>
									</li>
								);
							})}
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

//render your react application
ReactDOM.render(<ToDoList />, document.querySelector("#app"));
