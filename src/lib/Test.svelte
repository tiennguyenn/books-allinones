<script>
  import MyButton from "./MyButton.svelte";

  export let published = false;
  export let title = undefined;
  export let price = 0;
  
  let message = '';
  let buttonArray = [1,2,3,4,5,6,7,8,9,10];

  function clickMe(e) {
    message = `You click the button ${e.target.getAttribute('count')}`;
  }
</script>
{#if published}
<p>The title is: {title}, price is ${price}</p>
{:else}
<p>The article is not published!</p>
{/if}
<p>This is a template</p>

{#each buttonArray as button}
  <MyButton count={button} on:click={clickMe}>Click me</MyButton>
{/each}
<p>{message}</p>