import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '@/components/atoms/Button/Button';

describe('Button', () => {
  it("checks a snapshot", () => {
    const { container } = render(<Button>Text of Form Button</Button>)
    expect(container).toMatchSnapshot()
  })

  it('renders with text', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('renders with icon and text', () => {
    const { getByText } = render(
      <Button icon="Airplay" iconSize={20}>
        Click Me
      </Button>
    );
    expect(getByText('Click Me')).toBeInTheDocument();

  });

  it('calls onClick prop when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);
    fireEvent.click(getByText('Click Me'));
    expect(onClick).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    const { getByTestId } = render(
      <Button className={customClass}>Click Me</Button>
    );
    expect(getByTestId('form-button')).toHaveClass(customClass);
  });

  it("checks a type=button", async () => {
    render(<Button type="button">Button</Button>)
    expect(screen.getByTestId("form-button")).toHaveAttribute("type", "button")
  })

  it("checks a type=submit", async () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByTestId("form-button")).toHaveAttribute("type", "submit")
  })
});
