import React from "react";

export interface IPostCardProps {
  date: string;
  title: string;
  summary: string;
  avatarChildren?: string;
  imageUrl?: string;
  imageTitle?: string;
  labels?: IPostCardLabel;
}

export interface IPostCardLabel {
  text: string;
}
