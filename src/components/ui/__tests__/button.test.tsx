import { render, screen } from '@testing-library/react';
import { Button } from '../button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  it('respects loading prop', () => {
    render(<Button loading>Wait</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});


