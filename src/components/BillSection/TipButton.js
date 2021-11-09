import { useCalculator } from "../../context/CalculatorContext";

const TipButton = ({ value }) => {
	const { setTipAmount } = useCalculator();

	return <button onClick={() => setTipAmount(value)}>{value}%</button>;
};

export default TipButton;
