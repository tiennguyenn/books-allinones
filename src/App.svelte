<script>
  import { setContext } from "svelte";
  import Context from "./lib/Context.svelte";
  import ErrorMessage from "./lib/ErrorMessage.svelte";
  import StockTicker from "./lib/StockTicker.svelte";
  import StockTickerAdvance from "./lib/StockTickerAdvance.svelte";
  import StoreContext from "./lib/StoreContext.svelte";
  import StoreTimer from "./lib/StoreTimer.svelte";
import Test from "./lib/Test.svelte";
  import Tick from "./lib/Tick.svelte";
  import Timer from "./lib/Timer.svelte";
  import { userprefs } from "./store.js";

  let newPost = '';
  let posts = [];
  let error = '';
  let characterLeft;
  let characterLeftStyle;

  $:characterLeft = 10 - newPost.length;

  $:if (characterLeft < 0) {
    characterLeftStyle = 'error';
  } else {
    characterLeftStyle = '';
  }

  const addPost = () => {
    if (characterLeft<0) {
      error = 'You have an exceeded characters!';
      return;
    }
    posts = [...posts, newPost];
    newPost = '';
  }

  setContext('userprefs', userprefs);
</script>

<main>
  <!-- <h1>Soliloquy app</h1>
  <h2>Social media without the sharing</h2>
  <label>Talk to yourself: <input bind:value={newPost} /></label>
  <span class={characterLeftStyle}>Character left: {characterLeft}</span>
  <ErrorMessage error={error} />
  <button on:click={addPost}>Post it</button>
  {#each posts as post}
    <div>{post}</div>
  {/each}
  <div>
    <Tick />
  </div> -->
  <StoreContext />
  <Context />
</main>

<style>
  
</style>
