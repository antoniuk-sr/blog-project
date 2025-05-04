export interface Image {
  ext: string;
  url: string;
  documentId: string;
  formats: {
    thumbnail: {
      url: string;
    };
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    large: {
      url: string;
    };
  };
}
