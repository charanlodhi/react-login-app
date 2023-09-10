import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom'; // You might need to wrap your component with MemoryRouter
import Login from './Component/Login/Login';

describe('Login Component', () => {
  it('renders without errors', () => {
    render(
    <BrowserRouter>
    <Login setAuthenticated={() => {}} />
   </BrowserRouter>
    );
  });

  it('handles email change and clears email errors', () => {
    render(
      <BrowserRouter>
      <Login setAuthenticated={() => {}} />
     </BrowserRouter>
      );
    const emailInput = screen.getByTestId('input-email');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    // Add assertions here for email input value and emailErrors
  });

  it('shows and hides password correctly', () => {
    render(
      <BrowserRouter>
      <Login setAuthenticated={() => {}} />
     </BrowserRouter>
      );
    const passwordInput = screen.getByTestId('input-password');
    const viewIcon = screen.getByTestId('view-icon');

    expect(passwordInput.getAttribute('type')).toBe('password');

    fireEvent.click(viewIcon);
    expect(passwordInput.getAttribute('type')).toBe('text');

    fireEvent.click(viewIcon);
    expect(passwordInput.getAttribute('type')).toBe('password');
  });

  it('handles form submission with valid credentials', async () => {
    const setAuthenticated = jest.fn();
    const navigate = jest.fn();

   render(
      <MemoryRouter>
        <Login setAuthenticated={setAuthenticated} />
      </MemoryRouter>
    );

    const emailInput = screen.getByTestId('input-email');
    const passwordInput = screen.getByTestId('input-password');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(emailInput, { target: { value: 'charan@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345' } });

    fireEvent.click(submitButton);

    // Wait for asynchronous actions (e.g., navigation) to complete
    await waitFor(() => {
      expect(setAuthenticated).toHaveBeenCalledWith(true);
      
    });
    // await waitFor(() =>{
    //   expect(navigate).toHaveBeenCalledWith('/dashboard');
    // })
  });

  // Add more test cases for different scenarios
});
