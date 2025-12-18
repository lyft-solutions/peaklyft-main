export type MegaItem = {
  title: string;
  description?: string;
  href: string;
  icon?: string;
};

export type MegaSectionType = {
  title?: string;
  items: MegaItem[];
};

export type MenuItemType =
  | {
      label: string;
      type: "mega";
      image?: string;
      sections: MegaSectionType[];
    }
  | {
      label: string;
      type: "link";
      href: string;
    };
