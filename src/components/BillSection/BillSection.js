import React, { useEffect } from "react";
import Input from "./Input";
import TipAmountList from "./TipAmountList";
import { useCalculator } from "../../context/CalculatorContext";

const BillSection = () => {
	const { bill, setBill, setNumberOfPeople, numberOfPeople } = useCalculator();

	return (
		<div>
			<Input
				header="Bill"
				icon="$"
				placeholderText="0"
				blurFunction={setBill}
				value={bill}
			/>
			<TipAmountList />
			<Input
				header="Number Of People"
				icon="#"
				placeholderText="0"
				blurFunction={setNumberOfPeople}
				value={numberOfPeople}
			/>
		</div>
	);
};

export default BillSection;
