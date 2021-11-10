import style from "./BillSection.module.css";

const Input = ({ value, header, icon, placeholderText, onChangeFunc }) => {
	return (
		<div className={style.input_area}>
			<div className={style.input_header}>{header}</div>
			<img className={style.icon} src={icon} alt="" />
			<input
				type="number"
				value={value}
				placeholder={placeholderText}
				onChange={(e) => onChangeFunc(e.target.value)}
			/>
		</div>
	);
};

export default Input;
