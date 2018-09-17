// @flow
import * as React from 'react';

type Props = { children: React.Node };

export const Paragraph = ({ children }: Props) => (
  <div className="paragraphWrapper">
    <div className="paragraph">{children}</div>
  </div>
);
