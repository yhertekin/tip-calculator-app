import React from "react";
import Input from "./Input";
import TipButton from "./TipButton";

import { useCalculator } from "../../context/CalculatorContext";

const TipAmountList = () => {
	const { tipAmounts, setTipAmount } = useCalculator();
	return (
		<div>
			{tipAmounts.map((value, key) => (
				<TipButton value={value} key={key} />
			))}
			<Input
				header=""
				icon=""
				placeholderText="Custom"
				blurFunction={setTipAmount}
			/>
		</div>
	);
};

export default TipAmountList;
