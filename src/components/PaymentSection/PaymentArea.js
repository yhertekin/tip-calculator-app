import React from "react";

const PaymentArea = ({ header, paymentValue }) => {
	return (
		<div>
			<div>{header}</div>
			<div>/person</div>
			<div>{paymentValue}</div>
		</div>
	);
};

export default PaymentArea;
