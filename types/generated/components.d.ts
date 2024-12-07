import type { Schema, Struct } from '@strapi/strapi';

export interface CallToActionBlockCallToActionBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_call_to_action_block_call_to_action_blocks';
  info: {
    description: '';
    displayName: 'CallToActionBlock';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ExampleIndustriesExampleIndustries
  extends Struct.ComponentSchema {
  collectionName: 'components_example_industries_example_industries';
  info: {
    description: '';
    displayName: 'Example Industries';
  };
  attributes: {
    background: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    target: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ExampleSettingsExampleSettings extends Struct.ComponentSchema {
  collectionName: 'components_example_settings_example_settings';
  info: {
    displayName: 'Example Settings';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    background_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Background:'>;
    target_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    target_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Target:'>;
  };
}

export interface ExploreResultsPreviewExploreResultsNumberItem
  extends Struct.ComponentSchema {
  collectionName: 'components_explore_results_preview_explore_results_number_items';
  info: {
    description: '';
    displayName: 'Explore Results Number Item';
  };
  attributes: {
    centerPosition: Schema.Attribute.Boolean;
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    button: Schema.Attribute.Component<'layout.string-button', false> &
      Schema.Attribute.Required;
    numbers: Schema.Attribute.Component<
      'explore-results-preview.explore-results-number-item',
      true
    > &
      Schema.Attribute.Required;
    sub_title: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
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
    > &
      Schema.Attribute.Required;
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

export interface FitListElementFItPage extends Struct.ComponentSchema {
  collectionName: 'components_fit_list_element_f_it_pages';
  info: {
    displayName: 'List Element FIt Page';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface FitMainBlockFit extends Struct.ComponentSchema {
  collectionName: 'components_fit_main_block_fits';
  info: {
    description: '';
    displayName: 'MainBlockFit';
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
    list_items: Schema.Attribute.Component<'fit.list-element-f-it-page', true> &
      Schema.Attribute.Required;
    right_decor: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface FitSecondBlockFit extends Struct.ComponentSchema {
  collectionName: 'components_fit_second_block_fits';
  info: {
    description: '';
    displayName: 'SecondBlockFit';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.button', false>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'We love problem solving. Submit your challenge, and let\u2019s see if we can solve it together \u2013 for free!'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Stuck with your PPC campaign? Need a breakthrough?'>;
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
    decor: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    sub_title: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeAuthorInfoHomeAuthorInfo extends Struct.ComponentSchema {
  collectionName: 'components_home_author_info_home_author_infos';
  info: {
    description: '';
    displayName: 'Home Author Info';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    sub_title: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_home_faqs';
  info: {
    description: '';
    displayName: 'Home Faq';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false> &
      Schema.Attribute.Required;
    faqs: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
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
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface HomeHomePpcResourcesColumn extends Struct.ComponentSchema {
  collectionName: 'components_home_home_ppc_resources_columns';
  info: {
    description: '';
    displayName: 'Home PPC Resources Column';
  };
  attributes: {
    button: Schema.Attribute.Component<'layout.string-button', false> &
      Schema.Attribute.Required;
    posts: Schema.Attribute.Relation<'oneToMany', 'api::post.post'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeHomePpcResourcesLinks extends Struct.ComponentSchema {
  collectionName: 'components_home_home_ppc_resources_links';
  info: {
    description: '';
    displayName: 'Home PPC Resources Links';
  };
  attributes: {
    columns: Schema.Attribute.Component<
      'home.home-ppc-resources-column',
      true
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
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
    > &
      Schema.Attribute.Required;
    text_logo: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface LayoutAdvantagesString extends Struct.ComponentSchema {
  collectionName: 'components_layout_advantages_strings';
  info: {
    description: '';
    displayName: 'Advantages String';
  };
  attributes: {
    title: Schema.Attribute.Text;
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
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/ppc-resources/ppc-troubleshooting'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    footer_bottom: Schema.Attribute.Component<'layout.footer-bottom', false> &
      Schema.Attribute.Required;
    socials_links: Schema.Attribute.Component<'social.social-link', true> &
      Schema.Attribute.Required;
    socials_title: Schema.Attribute.String & Schema.Attribute.Required;
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
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u00A9 2024\u00A0D2CEBL. ALL RIGHTS RESERVED.'>;
    privacy_policy_title: Schema.Attribute.String & Schema.Attribute.Required;
    terms_of_use_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutForm extends Struct.ComponentSchema {
  collectionName: 'components_layout_form_s';
  info: {
    displayName: 'Form ';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    label: Schema.Attribute.RichText;
    title: Schema.Attribute.RichText;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
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

export interface LayoutResultsOurAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_layout_results_our_advantages';
  info: {
    description: '';
    displayName: 'Results - Our Advantages';
  };
  attributes: {
    advantages_string: Schema.Attribute.Component<
      'layout.advantages-string',
      true
    > &
      Schema.Attribute.Required;
    result_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutSeoPagesDescription extends Struct.ComponentSchema {
  collectionName: 'components_layout_seo_pages_descriptions';
  info: {
    description: '';
    displayName: 'Seo Pages Description';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    keywords: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface LayoutStringButton extends Struct.ComponentSchema {
  collectionName: 'components_layout_string_buttons';
  info: {
    description: '';
    displayName: 'StringButton';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
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
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ProcessStepsBlockProcessStepsBlockItem
  extends Struct.ComponentSchema {
  collectionName: 'components_process_steps_block_process_steps_block_items';
  info: {
    description: '';
    displayName: 'ProcessStepsBlockItem';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProcessProcessBlock1 extends Struct.ComponentSchema {
  collectionName: 'components_process_process_block_1s';
  info: {
    description: '';
    displayName: 'Process Block 1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step_1: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    step_2: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    step_3: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    step_4: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ProcessProcessBlock2 extends Struct.ComponentSchema {
  collectionName: 'components_process_process_block_2s';
  info: {
    description: '';
    displayName: 'Process Block 2';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step_1: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    step_2: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    step_3: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ResultExampleResultExample extends Struct.ComponentSchema {
  collectionName: 'components_result_example_result_examples';
  info: {
    displayName: 'Result Example';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    numbers: Schema.Attribute.Component<
      'explore-results-preview.explore-results-number-item',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 6;
        },
        number
      >;
    title: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface ScriptBodyScript extends Struct.ComponentSchema {
  collectionName: 'components_script_body_scripts';
  info: {
    displayName: 'body_script';
  };
  attributes: {
    script_link: Schema.Attribute.Component<'script.script-link', true>;
  };
}

export interface ScriptHeadScript extends Struct.ComponentSchema {
  collectionName: 'components_script_head_scripts';
  info: {
    displayName: 'head_script';
  };
  attributes: {
    script_link: Schema.Attribute.Component<'script.script-link', true>;
  };
}

export interface ScriptScriptLink extends Struct.ComponentSchema {
  collectionName: 'components_script_script_links';
  info: {
    description: '';
    displayName: 'Script Link';
  };
  attributes: {
    script_src: Schema.Attribute.Text;
  };
}

export interface SocialShareSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_share_social_links';
  info: {
    displayName: 'Share Social Link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_social_links';
  info: {
    description: '';
    displayName: 'SocialLink';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    targetBlank: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'call-to-action-block.call-to-action-block': CallToActionBlockCallToActionBlock;
      'example-industries.example-industries': ExampleIndustriesExampleIndustries;
      'example-settings.example-settings': ExampleSettingsExampleSettings;
      'explore-results-preview.explore-results-number-item': ExploreResultsPreviewExploreResultsNumberItem;
      'explore-results-preview.explore-results-preview': ExploreResultsPreviewExploreResultsPreview;
      'features-block.features-block': FeaturesBlockFeaturesBlock;
      'features-block.features-block-list-item': FeaturesBlockFeaturesBlockListItem;
      'fit.list-element-f-it-page': FitListElementFItPage;
      'fit.main-block-fit': FitMainBlockFit;
      'fit.second-block-fit': FitSecondBlockFit;
      'free-consultation-process.free-consultation-process': FreeConsultationProcessFreeConsultationProcess;
      'home-author-info.about-author-info': HomeAuthorInfoAboutAuthorInfo;
      'home-author-info.home-author-info': HomeAuthorInfoHomeAuthorInfo;
      'home.home-faq': HomeHomeFaq;
      'home.home-page-main-block': HomeHomePageMainBlock;
      'home.home-ppc-resources-column': HomeHomePpcResourcesColumn;
      'home.home-ppc-resources-links': HomeHomePpcResourcesLinks;
      'home.logo-concept-block': HomeLogoConceptBlock;
      'home.logo-concept-block-item': HomeLogoConceptBlockItem;
      'layout.advantages-string': LayoutAdvantagesString;
      'layout.button': LayoutButton;
      'layout.footer': LayoutFooter;
      'layout.footer-bottom': LayoutFooterBottom;
      'layout.form': LayoutForm;
      'layout.header': LayoutHeader;
      'layout.pages-main-block': LayoutPagesMainBlock;
      'layout.results-our-advantages': LayoutResultsOurAdvantages;
      'layout.seo-pages-description': LayoutSeoPagesDescription;
      'layout.string-button': LayoutStringButton;
      'process-steps-block.process-steps-block': ProcessStepsBlockProcessStepsBlock;
      'process-steps-block.process-steps-block-item': ProcessStepsBlockProcessStepsBlockItem;
      'process.process-block-1': ProcessProcessBlock1;
      'process.process-block-2': ProcessProcessBlock2;
      'result-example.result-example': ResultExampleResultExample;
      'script.body-script': ScriptBodyScript;
      'script.head-script': ScriptHeadScript;
      'script.script-link': ScriptScriptLink;
      'social.share-social-link': SocialShareSocialLink;
      'social.social-link': SocialSocialLink;
    }
  }
}
