<script>
  export let published = false;
  export let title = undefined;
  export let price = 0;
</script>
{#if published}
<p>The title is: {title}, price is ${price}</p>
{:else}
<p>The article is not published!</p>
{/if}
<p>This is a template</p>