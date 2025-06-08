export interface LyricsData {
  lyrics_id: number;
  explicit: number;
  lyrics_body: string;
  lyrics_copyright: string;
}

export interface LyricsResponse {
  lyric: LyricsData;
}
