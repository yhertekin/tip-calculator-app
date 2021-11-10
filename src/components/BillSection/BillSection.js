import Input from "./Input";
import TipAmountList from "./TipAmountList";
import { useCalculator } from "../../context/CalculatorContext";

import iconDollar from "../../icons/icon-dollar.svg";
import iconPerson from "../../icons/icon-person.svg";
import style from "./BillSection.module.css";

const BillSection = () => {
	const { bill, setBill, setNumberOfPeople, numberOfPeople } = useCalculator();

	return (
		<div className={style.bill_section}>
			<Input
				icon={iconDollar}
				header="Bill"
				placeholderText="0"
				onChangeFunc={setBill}
				value={bill}
			/>
			<TipAmountList />
			<Input
				header="Number Of People"
				icon={iconPerson}
				placeholderText="0"
				onChangeFunc={setNumberOfPeople}
				value={numberOfPeople}
			/>
		</div>
	);
};

export default BillSection;
