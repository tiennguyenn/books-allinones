<script>
  import { onMount } from "svelte";

  const stockTicker = 'AAPL';
  const API_KEY = '';
  const endpoint = `https://finnhub.io/api/v1/quote?symbol=${stockTicker}&token=${API_KEY}`;
  let stockChangeClass = 'stock-price-up';
  let stockPrice = 0;
  let stockPriceChange = 0;
  let stockPriceChangePercent = 0;

  async function getLatestPrice() {
    const response = await fetch(endpoint);
    const data = await response.json();
    stockPrice = data.d;
    stockPriceChange = data.d;
    stockPriceChangePercent = data.dp;
    if (stockPriceChange < 0) {
      stockChangeClass = 'stock-price-down';
    }
  }

  onMount(() => {
    let timer = setInterval(getLatestPrice, 60000);

    return () => {
      clearInterval(timer);
    }
  });

</script>
<h1>Current {stockTicker} price</h1>
<p class={stockChangeClass}>
  {stockPrice} ({stockPriceChange}) ({stockPriceChangePercent}%)
</p>

<style>
  .stock-price-up {
    color: green;
  }

  .stock-price-down {
    color: red;
  }
</style>