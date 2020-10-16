import React from 'react';

import { Container } from './styles';

interface ToolipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<ToolipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
