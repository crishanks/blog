import { ITag } from "../Tags";

export interface IPost {
    title: string;
    date: string;
    content: string;
    summary: string;
    tags?: ITag[];
}