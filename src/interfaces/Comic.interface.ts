export interface Comic {
  id: number;
  title: string;
  creatorName: string;
  coverURL: string;
  price: number;
}

export interface ShoppingComicsCart extends Comic {
  quantity: number;
}
