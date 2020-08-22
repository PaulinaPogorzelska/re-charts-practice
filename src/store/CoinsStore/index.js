import axios from "axios";

const CoinsStore = () => ({
  coinsList: [{ item: { id: "", thumb: "" } }],

  isLoading: {
    coinsList: false,
  },

  hasError: {
    coinsList: false,
  },
  async loadCoinsList() {
    const resp = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    this.coinsList = resp.data.coins;
    this.coinsList.map((coin) => {
      this.loadMarketChart(coin.item.id);
    });
  },
  async loadMarketChart(id) {
    const resp = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: "eur",
          days: "14",
        },
      }
    );
    this.coinsList.find((el) => {
      if (el.item.id === id) {
        let preparedChartData = [];
        resp.data.prices.map((el) => {
          const date = new Date(el[0]).toString().slice(4, 10);
          preparedChartData.push({ chartDate: date, chartData: el[1] });
        });
        el.item.chart = preparedChartData;
      }
    });
  },
});

export default CoinsStore;
