import Input from "./Input";
import TipButton from "./TipButton";

import { useCalculator } from "../../context/CalculatorContext";

import style from "./BillSection.module.css";

const TipAmountList = () => {
	const { setTipAmount } = useCalculator();
	const tipAmounts = [5, 10, 15, 25, 50];
	return (
		<div className={style.tip_list}>
			{tipAmounts.map((value, key) => (
				<TipButton value={value} key={key} />
			))}
			<input
				type="number"
				className={style.custom_tip}
				onChangeFunc={setTipAmount}
				placeholder="Custom"
			/>
		</div>
	);
};

export default TipAmountList;
