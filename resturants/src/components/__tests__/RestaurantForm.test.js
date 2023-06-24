import { render, screen, cleanup } from "@testing-library/react";
import RestaurantForm from "../RestaurantForm";

test("should create a restaurant", () => {
  render(<RestaurantForm />);
  const RestaurantFormElement = screen.getByTestId("create-1");
  expect(RestaurantFormElement).toBeInTheDocument();
});
