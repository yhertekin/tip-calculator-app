import PaymentArea from "./PaymentArea";

import { useCalculator } from "../../context/CalculatorContext";

import style from "./PaymentSection.module.css";

const PaymentSection = () => {
	const { paymentTotal, tipTotal, reset } = useCalculator();

	return (
		<div className={style.payment_section}>
			<PaymentArea header="Tip Amount" value={tipTotal} />
			<PaymentArea header="Total" value={paymentTotal} />
			<button className={style.reset} onClick={reset}>
				RESET
			</button>
		</div>
	);
};

export default PaymentSection;
