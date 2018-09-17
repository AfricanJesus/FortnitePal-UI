declare module ItemSimpleListModule {

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
      images: string[];
      rarityType: string;
      _links: Links;
    }

    export interface Embedded {
      items: Item[];
    }

    export interface Self2 {
      href: string;
    }

    export interface Links2 {
      self: Self2;
    }

    export interface RootObject {
      _embedded: Embedded;
      _links: Links2;
    }

  }

