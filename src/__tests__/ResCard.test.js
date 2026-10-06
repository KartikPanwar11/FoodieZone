import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../Components/Card";
import restaurantList from "../Data/res-list";


it("ResCard renders correctly",()=>{
    render(
        <Card resData={restaurantList[0]}/> 
    )

    const resName = screen.getByText("Free India Restaurant");
    expect(resName).toBeInTheDocument();

})