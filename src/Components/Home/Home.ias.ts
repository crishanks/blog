import React from 'react';
import { css } from '@emotion/css';

export const homeStyles = () => {
  const wrapper = css`
    label: wrapper;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    margin: 24px;
  `;

  return {
    wrapper,
  }
};
