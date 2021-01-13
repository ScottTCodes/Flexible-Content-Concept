<script context="module">
  // import BlockContent from '@movingbrands/svelte-portable-text';
  import client from '../sanityClient';
  // import serializers from '../components/serializers';
  import component from '../components/partials/index';

  export async function preload({ params }) {
    const { slug } = params;
    const query = '*[_type == "page" && slug.current == $slug][0]';

    const page = await client
      .fetch(query, { slug })
      .catch((err) => this.error(500, err));

    return { page };
  }
</script>

<script>
  export let page;
  // const { seo } = page;
  // const keywords = seo.focus_synonyms.join(",")
</script>

<svelte:head>
  <!-- <title>{seo.seo_title}</title>
  <meta name="description" content={seo.meta_description}>
  <meta name="keywords" content="{keywords}"> -->
  <meta name="robots" content="index, follow">
  <link href="https://flexible-content-blog-with-svelte-web.netlify.com/{ page.slug.current }" rel="canonical">
</svelte:head>

<div class="content">
 { #each page.components as item }
    <svelte:component this={component[item._type]} {...item} />    
 { /each }
</div>
