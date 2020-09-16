export interface ISearchItem {
   kind: string;
   etag: string;
   id: string;
   snippet: ISnippet;
   statistics: { [key: string]: string };
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnailsItem,
    medium: IThumbnailsItem,
    high: IThumbnailsItem,
    standard: IThumbnailsItem,
    maxres: IThumbnailsItem,
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
<<<<<<< HEAD
  liveBroadcastContent: string;  
=======
  liveBroadcastContent: string;
  defaultLanguage?: string;
>>>>>>> 0dbff1f1fecb5a12d64b60f454a929e383e2bef3
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}
