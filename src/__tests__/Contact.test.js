import {render,screen} from '@testing-library/react'
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";


describe("Contact form tests", () => { 
    test("Contact form renders correctly", () => {
    // Test implementation
      render(<Contact/>);

      const heading = screen.getByRole("heading");
      expect(heading).toBeInTheDocument();
  });

  it("Contact form renders button correctly", () => {
    // Test implementation
      render(<Contact/>);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
  });
});



