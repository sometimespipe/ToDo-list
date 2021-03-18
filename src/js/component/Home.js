import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	// const [inputValue, setInputValue] = React.useState("");

	// const validateInput = () => {
	// 	if (inputValue.trim() === "") alert("The input cannot be empty");
	// };

	return (
		<div className="card text-center">
			<div className="card-header">Featured</div>
			<div className="card-body">
				<input type="text" className="card-title">
					Special title treatment
				</input>
				<p className="card-text">
					With supporting text below as a natural lead-in to
					additional content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
			<div className="card-footer text-muted float-left">2 days ago</div>
		</div>
	);
}
