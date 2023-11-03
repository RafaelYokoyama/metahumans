import FormError from '@/components/atoms/FormError/FormError';
import Input from '@/components/atoms/Input/Input';
import Label from '@/components/atoms/Label/Label';

import React from 'react';

function ChatInputField() {
  return (
    <div>
      <Label label='teste' />
      <Input />
      <FormError message={'teste'} icon='AlertTriangle' />
    </div>
  );
}

export default ChatInputField;
