import React, { useState } from "react";

export const AddCalculator = () => {

    const [total, setTotal] = useState(0)

    const additionHandler = (num) => {
        setTotal(total+num)
    }

    return (
			<>
				<button
					onClick={() => {
						additionHandler(1);
					}}
				>
					Add 1
				</button>
				<button
					onClick={() => {
						additionHandler(2);
					}}
				>
					Add 2
				</button>
				<button
					onClick={() => {
						additionHandler(3);
					}}
				>
					Add 3
				</button>
				<br></br>
				<p>
					Total: <span>{total}</span>
				</p>
			</>
		);
}