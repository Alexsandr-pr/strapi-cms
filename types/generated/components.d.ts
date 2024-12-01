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

export interface SocialSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_social_links';
  info: {
    displayName: 'SocialLink';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    targetBlank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.button': LayoutButton;
      'social.social-link': SocialSocialLink;
    }
  }
}
