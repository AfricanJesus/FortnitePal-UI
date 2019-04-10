declare module StyleSetsModule {

  export interface Stage {
    styleName: string;
    styleItemImage: string;
  }

  export interface Self {
    href: string;
  }

  export interface StyleSet2 {
    href: string;
  }

  export interface Links {
    self: Self;
    styleSet: StyleSet2;
  }

  export interface StyleSet {
    styleSetName: string;
    stages: Stage[];
    _links: Links;
  }

  export interface Embedded {
    styleSets: StyleSet[];
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

  export interface StyleSetsObject {
    _embedded: Embedded;
    _links: Links2;
    page: Page;
  }

}

