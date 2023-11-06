import React from 'react';
import { render } from '@testing-library/react';
import FormError from '@/components/atoms/FormError/FormError';

describe('FormError', () => {
  it('renders component with message', () => {
    const message = 'This is an error message';
    const { getByText } = render(<FormError message={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });

  it('renders component with icon and message', () => {
    const message = 'This is an error message';
    const { getByText, getByRole } = render(
      <FormError message={message} icon="Wand" />
    );
    expect(getByRole('alert')).toBeInTheDocument();
    expect(getByText(message)).toBeInTheDocument();
  });
});
