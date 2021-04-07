import React from 'react';
import { css } from '@emotion/css';

export const homeStyles = () => {
  const wrapper = css`
    label: wrapper;
    display: inline-flex;
    flex-wrap: wrap;
    gap: 24px;
    margin: 24px;
  `;

  return {
    wrapper,
  }
};
