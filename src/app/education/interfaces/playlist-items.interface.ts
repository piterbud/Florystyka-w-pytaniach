import { SingleVideoInterface } from './single-video.interface';

export interface PlaylistItemsInterface {
  kind: 'youtube#playlistItemListResponse';
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SingleVideoInterface[];
}
