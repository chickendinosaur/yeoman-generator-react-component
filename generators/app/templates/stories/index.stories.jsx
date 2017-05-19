import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Component', module)
  .addDecorator((story) => {
    return (
      <div className="storybook-content">
        {story()}
      </div>
    );
  })
  .add('default', () => {
    return (
      null
    );
  });
