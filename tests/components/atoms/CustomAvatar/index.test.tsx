import React from 'react';
import { render } from '@testing-library/react';
import CustomAvatar from '@/components/atoms/CustomAvatar/CustomAvatar';


describe('CustomAvatar', () => {

  it("checks a snapshot", () => {
    const { container } = render(<CustomAvatar />)
    expect(container).toMatchSnapshot()
  })
  it('renders with default size', () => {
    const { container } = render(<CustomAvatar />);
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('width: 56px; height: 56px;');
  });

  it('renders with custom background color', () => {
    const { container } = render(<CustomAvatar />);
    const avatar = container.querySelector('div');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle('background-color: #000;');
  });
});
