import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting Component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        // ... nothing
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders good to see you when button has NOT been clicked', () => {
        // Arrange
        render(<Greeting />)

        // Act
        // ... nothing

        // Assert
        const pElement = screen.getByText("good to see you!", {exact: false});
        expect(pElement).toBeInTheDocument();
    });


    test('renders "Changed!" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const pElement = screen.getByText("Changed!");
        expect(pElement).toBeInTheDocument();
    });

    test('should NOT render "good to see you" if the button was clicked', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert
        const pElement = screen.queryByText("good to see you!", {exact: false});
        expect(pElement).toBeNull()
    });
});