declare module ItemListModule {

  export interface Obtained {
    season: number;
    tier: number;
    promo: string;
    includedInOutfit: string;
    vbuckPrice: number;
    price: number;
    challenge: string;
  }

  export interface Self {
    href: string;
  }

  export interface Item2 {
    href: string;
    templated: boolean;
  }

  export interface Links {
    self: Self;
    item: Item2;
  }

  export interface Item {

    name: string;
    desc: string;
    rarityType: string;
    images: string[];
    obtained: Obtained;
    styleSet: string;
    set: string;
    itemType: string;
    status: string;
    animated: string;
    reactive: string;
    id: string;
    _links: Links;
  }

  export interface Embedded {
    items: Item[];
  }

  export interface First {
    href: string;
  }

  export interface Self2 {
    href: string;
    templated: boolean;
  }

  export interface Next {
    href: string;
  }

  export interface Last {
    href: string;
  }

  export interface Profile {
    href: string;
  }

  export interface Search {
    href: string;
  }

  export interface Links2 {
    first: First;
    self: Self2;
    next: Next;
    last: Last;
    profile: Profile;
    search: Search;
  }

  export interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }

  export interface ItemsObject {
    _embedded: Embedded;
    _links: Links2;
    page: Page;
  }

}

