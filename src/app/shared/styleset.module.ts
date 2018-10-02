declare module StyleSetModule {

  export interface Stage {
    styleName: string;
    styleItemImage: string;
  }

  export interface Self {
    href: string;
  }

  export interface StyleSet {
    href: string;
  }

  export interface Links {
    self: Self;
    styleSet: StyleSet;
  }

  export interface StyleSetObject {
    styleSetName: string;
    stages: Stage[];
    _links: Links;
  }

}

