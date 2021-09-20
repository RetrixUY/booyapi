export enum SearchType {
  general = 0,
  channel = 1,
  clip = 2,
  highlight = 3
}

export interface SearchTab {
  id: string;
  nameKey: string;
  type: SearchType;
}
