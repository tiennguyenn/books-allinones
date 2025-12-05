<script>
// @ts-nocheck

  import { onMount } from "svelte";

  const API_KEY = '';
  const stockTicker = 'AAPL';
  const endpoint = `https://finnhub.io/api/v1/price?symbol=${stockTicker}&token=${API_KEY}`;

  async function getLatestPrice() {
    const response = await fetch(endpoint);
    const data = response.json();

    return {
      price: data.p,
      priceChange: data.n,
      priceChangePercent: data.np
    }
  }

  onMount(() => {
    const timer = setInterval(getLatestPrice, 10000);

    return () => {
      clearInterval(timer);
    }
  })

</script>

{#await getLatestPrice()}
  <p>Loading...</p>
{:then data} 
  <p>{data.price} ({data.priceChange}) ({data.priceChangePercent}%)</p>
{:catch error}
  <p>{error.message}</p>
{/await}