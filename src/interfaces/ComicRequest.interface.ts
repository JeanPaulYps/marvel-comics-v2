export interface ComicRequest {
  id: number;
  title: string;
  thumbnail: Thumbnail;
  creators: Creators;
  prices: Price[];
}

interface Thumbnail {
  path: string;
  extension: Extension;
}

enum Extension {
  Jpg = "jpg",
}

interface Creators {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
}

interface CreatorsItem {
  resourceURI: string;
  name: string;
  role: Role;
}

enum Role {
  Colorist = "colorist",
  Inker = "inker",
  Letterer = "letterer",
  Penciller = "penciller",
  PencillerCover = "penciller (cover)",
  Writer = "writer",
}

interface Price {
  type: PriceType;
  price: number;
}

enum PriceType {
  DigitalPurchasePrice = "digitalPurchasePrice",
  PrintPrice = "printPrice",
}
