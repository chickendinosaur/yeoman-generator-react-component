import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Component from '../src/index.jsx';

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
      <Component
        onClick={action('click')}
      />
    );
  });
