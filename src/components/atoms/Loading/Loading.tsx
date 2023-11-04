import React from 'react';
import './loading.css';

interface LoadingProps {
  message?: string;
  isLoading?: boolean;
}

function LoadingState({ message = 'Carregando...', isLoading = true }: LoadingProps) {
  return isLoading ? (
    <div className={'container-loading'}>
      <div className={'scaling-dots'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={'message'}>{message}</div>
    </div>
  ) : null;
}

export default LoadingState;
