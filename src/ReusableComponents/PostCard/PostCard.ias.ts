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
    max-width: 400px;
    min-width: 275px;
    background-color: #e2e2e2 !important;
  `;

  const hovered = css`
    label: hovered;
    transform: scale(1.05);
  `;

  const cardContent = css`
    label: card-font;
    color: #000505;
  `;

  return {
    cardWrapper,
    hovered,
    cardContent,
  }
}
