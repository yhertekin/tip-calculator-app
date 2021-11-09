import React from "react";
import BillSection from "./components/BillSection/BillSection";
import PaymentSection from "./components/PaymentSection/PaymentSection";
import { CalculatorProvider } from "./context/CalculatorContext";

import style from "./App.module.css";
const App = () => {
	return (
		<div className={style.main}>
			<CalculatorProvider>
				<BillSection />
				<PaymentSection />
			</CalculatorProvider>
		</div>
	);
};

export default App;
