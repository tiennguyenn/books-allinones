<script>
  import { getContext } from "svelte";

  const userprefs = getContext('userprefs');

</script>
<p>Your current preferences:</p>
<p>Language: {$userprefs.language}</p>
<p>Theme: {$userprefs.theme}</p>