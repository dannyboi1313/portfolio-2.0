export {}
declare global {
    interface project {
        id: number;
        thumbnail: string,
        types: string,
        images: string[],
        title: string,
        color: string,
        embellishment: string,
        jingle: string,

        short_description: string,
        description: string,
        tags: string[],
        lessons_learned: string[],
        challenge: string,
    }
  }