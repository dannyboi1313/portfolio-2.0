export {};
declare global {
  interface project {
    id: number;
    thumbnail: string;
    types: string;
    images: string[];
    title: string;
    color: string;
    embellishment: string;
    jingle: string;
    short_description: string;
    description: string;
    tags: string[];
    lessons_learned: string[];
    challenges: string[];
    highlights: string[];
    mobile: boolean;
    link: string;
    repo: string;
  }
}
