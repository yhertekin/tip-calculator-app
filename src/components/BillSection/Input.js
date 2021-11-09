import { useEffect, useState } from "react";
import { useCalculator } from "../../context/CalculatorContext";

const Input = ({ value, header, icon, placeholderText, blurFunction }) => {
	const [inputValue, setInputValue] = useState();

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return (
		<div>
			<div>{header}</div>
			<i>{icon}</i>
			<input
				value={inputValue}
				placeholder={placeholderText}
				onChange={(e) => setInputValue(e.target.value)}
				onBlur={() => blurFunction(inputValue)}
			/>
		</div>
	);
};

export default Input;
