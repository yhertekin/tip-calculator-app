import { useCalculator } from "../../context/CalculatorContext";
import style from "./BillSection.module.css";

const TipButton = ({ value }) => {
	const { setTipAmount } = useCalculator();

	return (
		<button className={style.tip_button} onClick={() => setTipAmount(value)}>
			{value}%
		</button>
	);
};

export default TipButton;
