import type { Schema, Struct } from '@strapi/strapi';

export interface CallToActionBlockCallToActionBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_call_to_action_block_call_to_action_blocks';
  info: {
    displayName: 'CallToActionBlock';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ExploreResultsPreviewExploreResultsNumberItem
  extends Struct.ComponentSchema {
  collectionName: 'components_explore_results_preview_explore_results_number_items';
  info: {
    displayName: 'Explore Results Number Item';
  };
  attributes: {
    centerPosition: Schema.Attribute.Boolean;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ExploreResultsPreviewExploreResultsPreview
  extends Struct.ComponentSchema {
  collectionName: 'components_explore_results_preview_explore_results_previews';
  info: {
    description: '';
    displayName: 'Explore Results Preview';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false>;
    numbers: Schema.Attribute.Component<
      'explore-results-preview.explore-results-number-item',
      true
    >;
    sub_title: Schema.Attribute.Text;
    title: Schema.Attribute.RichText;
  };
}

export interface FeaturesBlockFeaturesBlock extends Struct.ComponentSchema {
  collectionName: 'components_features_block_features_blocks';
  info: {
    description: '';
    displayName: 'Features Block';
  };
  attributes: {
    decor: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    features_items: Schema.Attribute.Component<
      'features-block.features-block-list-item',
      true
    >;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface FeaturesBlockFeaturesBlockListItem
  extends Struct.ComponentSchema {
  collectionName: 'components_features_block_features_block_list_items';
  info: {
    description: '';
    displayName: 'Features Block List Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface FreeConsultationProcessFreeConsultationProcess
  extends Struct.ComponentSchema {
  collectionName: 'components_free_consultation_process_free_consultation_processes';
  info: {
    description: '';
    displayName: 'Free Consultation Process';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.button', false>;
    decor: Schema.Attribute.Media<'images'>;
    step_1: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 23;
        minLength: 20;
      }> &
      Schema.Attribute.DefaultTo<'You decide what\u2019s next'>;
    step_2: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 51;
        minLength: 46;
      }> &
      Schema.Attribute.DefaultTo<'30-60 minute chat to determine if we are a good fit'>;
    step_3: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 39;
        minLength: 35;
      }> &
      Schema.Attribute.DefaultTo<'Learning about your business and goals'>;
    step_4: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 52;
        minLength: 51;
      }> &
      Schema.Attribute.DefaultTo<'Recommendations, data-based projections and proposal'>;
    step_5: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 39;
        minLength: 34;
      }> &
      Schema.Attribute.DefaultTo<'You decide how you want to proceed'>;
    step_6: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 18;
        minLength: 16;
      }> &
      Schema.Attribute.DefaultTo<'No pressure. Ever.'>;
    title: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Free evaluation and recommendations'>;
  };
}

export interface HomeAuthorInfoAboutAuthorInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_author_info_about_author_infos';
  info: {
    description: '';
    displayName: 'About Author Info';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    sub_title: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HomeAuthorInfoHomeAuthorInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_author_info_home_author_infos';
  info: {
    description: '';
    displayName: 'Home Author Info';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    sub_title: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_home_faqs';
  info: {
    description: '';
    displayName: 'Home Faq';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false>;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.RichText;
  };
}

export interface HomeHomePageMainBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_home_page_main_blocks';
  info: {
    description: '';
    displayName: 'home_page_main_block';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.RichText;
  };
}

export interface HomeHomePpcResourcesColumn extends Struct.ComponentSchema {
  collectionName: 'components_home_home_ppc_resources_columns';
  info: {
    displayName: 'Home PPC Resources Column';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false>;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeHomePpcResourcesLinks extends Struct.ComponentSchema {
  collectionName: 'components_home_home_ppc_resources_links';
  info: {
    description: '';
    displayName: 'Home PPC Resources Links';
  };
  attributes: {
    columns: Schema.Attribute.Component<'home.home-ppc-resources-column', true>;
    title: Schema.Attribute.RichText;
  };
}

export interface HomeLogoConceptBlock extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_concept_blocks';
  info: {
    description: '';
    displayName: 'Logo Concept Block';
  };
  attributes: {
    logo_concept_items: Schema.Attribute.Component<
      'home.logo-concept-block-item',
      true
    >;
    text_logo: Schema.Attribute.String;
  };
}

export interface HomeLogoConceptBlockItem extends Struct.ComponentSchema {
  collectionName: 'components_home_logo_concept_block_items';
  info: {
    displayName: 'Logo Concept Block - Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    buttonsColorBlue: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    targetBlank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    footer_bottom: Schema.Attribute.Component<'layout.footer-bottom', false>;
    socials_links: Schema.Attribute.Component<'social.social-link', true>;
    socials_title: Schema.Attribute.String;
  };
}

export interface LayoutFooterBottom extends Struct.ComponentSchema {
  collectionName: 'components_layout_footer_bottoms';
  info: {
    description: '';
    displayName: 'Footer Bottom';
  };
  attributes: {
    all_right_text: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'\u00A9 2024\u00A0D2CEBL. ALL RIGHTS RESERVED.'>;
    privacy_policy_title: Schema.Attribute.String;
    terms_of_use_title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface LayoutPagesMainBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_pages_main_blocks';
  info: {
    displayName: 'Pages Main Block';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.button', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface LayoutSeoPagesDescription extends Struct.ComponentSchema {
  collectionName: 'components_layout_seo_pages_descriptions';
  info: {
    displayName: 'Seo Pages Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface LayoutStringButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_string_buttons';
  info: {
    displayName: 'StringButton';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ProcessStepsBlockProcessStepsBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_process_steps_block_process_steps_blocks';
  info: {
    description: '';
    displayName: 'Process Steps Block';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false>;
    steps: Schema.Attribute.Component<
      'process-steps-block.process-steps-block-item',
      true
    >;
    title: Schema.Attribute.RichText;
  };
}

export interface ProcessStepsBlockProcessStepsBlockItem
  extends Struct.ComponentSchema {
  collectionName: 'components_process_steps_block_process_steps_block_items';
  info: {
    displayName: 'ProcessStepsBlockItem';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.Text;
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
      'call-to-action-block.call-to-action-block': CallToActionBlockCallToActionBlock;
      'explore-results-preview.explore-results-number-item': ExploreResultsPreviewExploreResultsNumberItem;
      'explore-results-preview.explore-results-preview': ExploreResultsPreviewExploreResultsPreview;
      'features-block.features-block': FeaturesBlockFeaturesBlock;
      'features-block.features-block-list-item': FeaturesBlockFeaturesBlockListItem;
      'free-consultation-process.free-consultation-process': FreeConsultationProcessFreeConsultationProcess;
      'home-author-info.about-author-info': HomeAuthorInfoAboutAuthorInfo;
      'home-author-info.home-author-info': HomeAuthorInfoHomeAuthorInfo;
      'home.home-faq': HomeHomeFaq;
      'home.home-page-main-block': HomeHomePageMainBlock;
      'home.home-ppc-resources-column': HomeHomePpcResourcesColumn;
      'home.home-ppc-resources-links': HomeHomePpcResourcesLinks;
      'home.logo-concept-block': HomeLogoConceptBlock;
      'home.logo-concept-block-item': HomeLogoConceptBlockItem;
      'layout.button': LayoutButton;
      'layout.footer': LayoutFooter;
      'layout.footer-bottom': LayoutFooterBottom;
      'layout.header': LayoutHeader;
      'layout.pages-main-block': LayoutPagesMainBlock;
      'layout.seo-pages-description': LayoutSeoPagesDescription;
      'layout.string-button': LayoutStringButton;
      'process-steps-block.process-steps-block': ProcessStepsBlockProcessStepsBlock;
      'process-steps-block.process-steps-block-item': ProcessStepsBlockProcessStepsBlockItem;
      'social.social-link': SocialSocialLink;
    }
  }
}
