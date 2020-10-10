import React from 'react';
import  { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render Header', () => {
    expect(screen.getByText('Rancid Tomatillos')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});