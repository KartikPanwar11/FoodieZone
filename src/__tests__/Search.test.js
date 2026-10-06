import { render, screen, waitFor } from "@testing-library/react";
import Body from "../Components/Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        ok: false
    })
});


it("Should render search bar correctly", async () => {
    render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    );

    await waitFor(() => {
        expect(screen.getByPlaceholderText("Search For Restaurants")).toBeInTheDocument();
    });
})