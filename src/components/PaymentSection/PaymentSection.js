import React from "react";
import PaymentArea from "./PaymentArea";

import { useCalculator } from "../../context/CalculatorContext";

import style from "./PaymentSection.module.css";

const PaymentSection = () => {
	const { paymentTotal, tipTotal, reset } = useCalculator();

	const buttonHandler = () => {
		console.log("button clicked");
	};
	return (
		<div className={style.payment_section}>
			<PaymentArea
				header="Tip Amount"
				paymentValue={
					isNaN(tipTotal) || tipTotal === undefined || tipTotal === "Infinity"
						? 0.0
						: tipTotal
				}
			/>
			<PaymentArea
				header="Total"
				paymentValue={
					isNaN(paymentTotal) ||
					paymentTotal === undefined ||
					paymentTotal === "Infinity"
						? 0.0
						: paymentTotal
				}
			/>
			<button onClick={reset}>RESET</button>
		</div>
	);
};

export default PaymentSection;
