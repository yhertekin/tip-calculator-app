import React from "react";
import BillSection from "./components/BillSection/BillSection";
import PaymentSection from "./components/PaymentSection/PaymentSection";
import { CalculatorProvider } from "./context/CalculatorContext";
import logo from "./icons/logo.svg";

import style from "./App.module.css";

const App = () => {
	return (
		<CalculatorProvider>
			<img src={logo} alt="" className={style.logo} />
			<div className={style.main}>
				<BillSection />
				<PaymentSection />
			</div>
		</CalculatorProvider>
	);
};

export default App;
