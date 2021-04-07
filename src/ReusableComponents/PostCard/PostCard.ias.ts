import { css } from "@emotion/css";
import React from "react";

export interface IPostCardProps {
  date: string;
  title: string;
  summary: string;
  avatarChildren?: string;
  imageUrl?: string;
  imageTitle?: string;
  labels?: IPostCardLabel[];
}

export interface IPostCardLabel {
  text: string;
}

export default function postCardStyles() {
  const cardWrapper = css`
    label: card-wrapper;
    max-width: 375px;
  `;

  return {
    cardWrapper,
  }
}
