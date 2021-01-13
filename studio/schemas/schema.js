/* eslint-disable import/no-unresolved */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import author from './documents/author';
import category from './documents/category';
import post from './documents/post';
import siteSettings from './documents/siteSettings';
import siteWide from './documents/siteWide';
import page from './documents/page';

// Object types
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import mainImage from './objects/mainImage';
import authorReference from './objects/authorReference';
import components from './components';

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    page,
    siteWide,
    ...components,
  ]),
});
