<script>
// @ts-nocheck

  import { fade } from "svelte/transition";

  let visible = true;
</script>

<button on:click={() => (visible = !visible)}>Toggle</button>

{#if visible}
<div transition:fade>
  <h1>Test transition</h1>
  <p>This is transition</p>
</div>
{/if}