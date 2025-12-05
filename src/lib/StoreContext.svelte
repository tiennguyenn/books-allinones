<script>
  import { getContext } from "svelte";

  const userprefs = getContext('userprefs');

  let language = $userprefs.language;
  let theme = $userprefs.theme;

  function submit() {
    $userprefs = {language, theme};
  }
</script>
<form on:submit|preventDefault={submit}>
  <label for="language">Language</label>
  <select id="language" bind:value={language}>
    <option value="en">English</option>
    <option value="fr">French</option>
    <option value="sp">Spanish</option>
    <option value="ge">German</option>
  </select>
  <label for="theme">Theme</label>
  <select bind:value={theme}>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
  </select>
  <button type="submit">Change</button>
</form>

Current Preferences: {$userprefs.language} {$userprefs.theme}