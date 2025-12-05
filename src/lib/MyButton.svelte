<script>
// @ts-nocheck

  export let count = 0;
</script>

<div>
  <button {count}>
    <slot></slot>
  </button>
</div>