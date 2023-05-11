export interface ComicRequest {
    id:                 number;
    title:              string;
    thumbnail:          Thumbnail;
    creators:           Creators;
    prices:             Price[];
}

export interface Thumbnail {
    path:      string;
    extension: Extension;
}

export enum Extension {
    Jpg = "jpg",
}

export interface Creators {
    available:     number;
    collectionURI: string;
    items:         CreatorsItem[];
    returned:      number;
}

export interface CreatorsItem {
    resourceURI: string;
    name:        string;
    role:        Role;
}

export enum Role {
    Colorist = "colorist",
    Inker = "inker",
    Letterer = "letterer",
    Penciller = "penciller",
    PencillerCover = "penciller (cover)",
    Writer = "writer",
}

export interface Price {
    type:  PriceType;
    price: number;
}

export enum PriceType {
    DigitalPurchasePrice = "digitalPurchasePrice",
    PrintPrice = "printPrice",
}