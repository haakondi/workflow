/* eslint-env node */
import React from 'react';
import { render, Workspace, requireComponent } from 'workflow-react';

const { Chrome } = requireComponent('workflow-app-chrome');

export const flow = render(
  <Workspace name={'workflow-app-chrome'}>
    <Chrome url={'https://example.com'} />
  </Workspace>
);
