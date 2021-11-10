import style from "./PaymentSection.module.css";

const PaymentArea = ({ header, value }) => {
	return (
		<div className={style.payment_area}>
			<div>
				<div className={style.header}>{header}</div>
				<div className={style.person}>/person</div>
			</div>
			<div className={style.value}>
				$
				{isNaN(value) || value === undefined || value === "Infinity"
					? "0.00"
					: value}
			</div>
		</div>
	);
};

export default PaymentArea;
