<script>
  import ErrorMessage from "./lib/ErrorMessage.svelte";
import Test from "./lib/Test.svelte";

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
</script>

<main>
  <h1>Soliloquy app</h1>
  <h2>Social media without the sharing</h2>
  <label>Talk to yourself: <input bind:value={newPost} /></label>
  <span class={characterLeftStyle}>Character left: {characterLeft}</span>
  <ErrorMessage error={error} />
  <button on:click={addPost}>Post it</button>
  {#each posts as post}
    <div>{post}</div>
  {/each}
  <Test published={true} title="This is just a title" price={100} />
</main>

<style>
  
</style>
