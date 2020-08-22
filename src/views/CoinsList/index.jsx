import React, { useEffect } from "react";
import { Box, Card } from "../../components";
import { useStore, useObserver } from "../../store";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
} from "recharts";

const CoinsList = () => {
  const { CoinsStore } = useStore();

  useEffect(() => {
    CoinsStore.loadCoinsList();
  }, [CoinsStore]);

  const shareCoin = () => {
    window.analytics.track("Share");
    console.log(1);
    if (navigator.share) {
      navigator
        .share({
          title: "lala",
          text: "lala",
          url: "https://www.facebook.com/",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API is not supported in your browser.");
    }
  };

  return useObserver(() => (
    <Box>
      {CoinsStore.coinsList.map((coin) => (
        <Card
          margin="1rem"
          display="flex"
          flexDirection="column"
          width="80%"
          margin="1rem auto"
        >
          <Box display="flex">
            <img
              src={`https://assets.coingecko.com${coin.item.thumb}`}
              alt=""
            />
            <Box marginLeft="0.5rem">{coin.item.name}</Box>
            <Box onClick={shareCoin}>Share</Box>
          </Box>
          <ResponsiveContainer width="100%" height={140}>
            <AreaChart
              data={coin.item.chart}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="chartDate"></XAxis>
              <Tooltip />
              <Area
                type="monotone"
                dataKey="chartData"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      ))}
    </Box>
  ));
};

export default CoinsList;
