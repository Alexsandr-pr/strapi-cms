import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    buttonsColorBlue: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    targetBlank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.button': LayoutButton;
    }
  }
}
