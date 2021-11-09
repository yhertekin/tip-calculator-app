import { createContext, useContext, useEffect, useState } from "react";

const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
	const [bill, setBill] = useState();
	const [numberOfPeople, setNumberOfPeople] = useState();
	const [tipAmounts, setTipAmounts] = useState([5, 10, 15, 25, 50]);
	const [tipAmount, setTipAmount] = useState();
	const [paymentTotal, setPaymentTotal] = useState();
	const [tipTotal, setTipTotal] = useState();

	useEffect(() => {
		setTipTotal(
			(
				(Number(bill) * (Number(tipAmount) / 100)) /
				Number(numberOfPeople)
			).toFixed(2)
		);
		setPaymentTotal(
			(
				(Number(bill) * (Number(tipAmount) / 100)) / Number(numberOfPeople) +
				Number(bill) / Number(numberOfPeople)
			).toFixed(2)
		);
	}, [bill, numberOfPeople, tipAmount]);

	const reset = () => {
		setBill("");
		setNumberOfPeople("");
		setTipAmount("");
	};

	const values = {
		bill,
		setBill,
		numberOfPeople,
		setNumberOfPeople,
		tipAmount,
		setTipAmount,
		tipAmounts,
		paymentTotal,
		setPaymentTotal,
		tipTotal,
		setTipTotal,
		reset,
	};

	return (
		<CalculatorContext.Provider value={values}>
			{children}
		</CalculatorContext.Provider>
	);
};

export const useCalculator = () => useContext(CalculatorContext);
