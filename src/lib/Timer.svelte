<script>
// @ts-nocheck

  import { onMount } from "svelte";

  onMount(() => {
    let timer = setInterval(() => {
      let date = new Date();
      let hours = date.getHours();
      let ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      let minutes = date.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let seconds = date.getSeconds();
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      let time = hours + ':' + minutes + ':' + seconds + ` ${ampm}`;
      document.getElementById('time').innerHTML = time;
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  });


</script>

<h1>Timer</h1>
<div id="time"></div>