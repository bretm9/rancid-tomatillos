import React from 'react';
import  { render, screen } from '@testing-library/react';
import Login from './Login';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Login', () => {
  const mockUpdateLoginData = jest.fn()

  beforeEach(() => {
    render(<Login updateLoginData={mockUpdateLoginData}/>);
  });

  it('should render Login', () => {
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
    expect(screen.getByTestId('login-button')).toBeInTheDocument();
  });

  it('should update login data', () => {
    userEvent.type(screen.getByPlaceholderText('email'), 'this_is_my_email@email.com');
    userEvent.type(screen.getByPlaceholderText('password'), 'this_is_my_password');
    userEvent.click(screen.getByTestId('login-button'));
    expect(mockUpdateLoginData).toHaveBeenCalled();
    expect(mockUpdateLoginData).toHaveBeenCalledWith({ email: 'this_is_my_email@email.com', password: 'this_is_my_password'});
  });
});