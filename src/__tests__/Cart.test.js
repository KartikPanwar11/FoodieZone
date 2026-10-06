import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import foodStore from "../redux/foodStore";

test("shows the empty cart state", () => {
	render(
		<BrowserRouter>
			<Provider store={foodStore}>
				<Cart />
			</Provider>
		</BrowserRouter>
	);

	expect(screen.getByRole("heading", { name: "Your cart is empty" })).toBeInTheDocument();
});

