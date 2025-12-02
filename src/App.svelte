<script>
  import Test from "./lib/Test.svelte";

  let newPost = '';
  let posts = [];
  let error = '';
  let characterLeft;
  let characterLeftStyle;

  $:characterLeft = 10 - newPost.length;
  characterLeftStyle = 'color: blue';
  $:if (characterLeft < 0) {
    characterLeftStyle = 'color: red';
  }

  const addPost = () => {
    if (characterLeft<0) {
      error = 'Exceeded error!';
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
  <span style={characterLeftStyle}>Character left: {characterLeft}</span>
  <p>{error}</p>
  <button on:click={addPost}>Post it</button>
  {#each posts as post}
    <div>{post}</div>
  {/each}
  <Test published={true} title="This is just a title" price={100} />
</main>

<style>
  
</style>
