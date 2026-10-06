import {fireEvent, render,screen} from "@testing-library/react"
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

test("Header shows the logged-in user name after login", () => {

    render(
        <BrowserRouter>
            <Provider store={foodStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const loggedInUser = screen.getByRole("button", { name: "Hi, Default User" });

    expect(loggedInUser).toBeInTheDocument();

})