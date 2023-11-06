import React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconName, IconProps } from '@/components/atoms/Icon/Icon';

describe('Icon', () => {
  it('renders an icon with default props', () => {
    const iconName = 'Check';
    const { container } = render(<Icon name={iconName} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders an icon with custom props', () => {
    const iconName: IconName = 'Check';
    const customProps: IconProps = {
      color: 'red',
      size: 24,
      className: 'custom-icon',
    };
    const { container } = render(<Icon name={iconName} {...customProps} />);
    expect(container.firstChild).toMatchSnapshot();
  })

  it('renders a specific icon', () => {
    const iconName = 'AlertTriangle';
    const { container } = render(<Icon name={iconName} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
