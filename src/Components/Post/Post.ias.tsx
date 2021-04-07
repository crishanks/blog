
export interface IPostProps {
    title: string;
    date: string;
    content: IPostContent;
}

export interface IPostContent {
    text: string;
    image?: string;
    //Code block?
}