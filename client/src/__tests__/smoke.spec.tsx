import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
function Dummy(){return <h1>OK</h1>}
describe('smoke', () => {
  it('renders', () => {
    render(<Dummy />);
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
