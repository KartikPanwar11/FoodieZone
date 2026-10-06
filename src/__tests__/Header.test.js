import {render,screen} from "@testing-library/react"
import Header from "../Components/Header";
import { Provider } from "react-redux";
import foodStore from "../redux/foodStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



it("Header renders correctly", () => {

    render(
        <BrowserRouter>
            <Provider store={foodStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
});

it("Header renders cart items correctly", () => {

    render(
        <BrowserRouter>
            <Provider store={foodStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItm = screen.getByText("🛒");
    expect(cartItm).toBeInTheDocument();
});