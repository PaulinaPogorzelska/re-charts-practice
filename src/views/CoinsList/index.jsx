import React, { useEffect, useState } from "react";
import { Box, Card } from "../../components";
import { useStore, useObserver } from "../../store";
import { ReactComponent as ShareIcon } from "../../assets/share.svg";
import ShareCoinModal from "./components/ShareCoinModal";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
  XAxis,
} from "recharts";
import { Helmet } from "react-helmet";

const useModal = () => {
  var [isVisible, changeVisibility] = useState(false);

  const toogleModal = () => {
    changeVisibility(!isVisible);
  };

  return {
    isVisible,
    toogleModal,
  };
};

const ShareCoinPost = ({ toogleModal }) => {
  window.analytics.track("Share");
  if (navigator.share) {
    return (
      <ShareIcon
        fill="violet"
        onClick={() => {
          navigator
            .share({
              title: "Share Top Coin",
              text: "Hi. Check out my fav top coin !",
              url: "https://top-coins-paulina-pogorzelska.netlify.app/",
            })
            .then(() => console.log("Successful share"))
            .catch((error) => console.log("Error sharing", error));
        }}
      />
    );
  } else {
    return <ShareIcon fill="#bbb8e9" onClick={toogleModal} />;
  }
};

const CoinsList = () => {
  const { CoinsStore } = useStore();
  const { isVisible, toogleModal } = useModal();

  useEffect(() => {
    CoinsStore.loadCoinsList();
  }, [CoinsStore]);

  return useObserver(() => (
    <Box>
      <Helmet>
        <title>Trending Coins</title>
      </Helmet>
      {CoinsStore.coinsList.map((coin) => (
        <Card
          display="flex"
          flexDirection="column"
          width="80%"
          margin="1rem auto"
          position="relative"
        >
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <img
                src={`https://assets.coingecko.com${coin.item.thumb}`}
                alt=""
              />
              <Box marginLeft="0.5rem">{coin.item.name}</Box>
            </Box>
            <ShareCoinPost toogleModal={toogleModal} isVisible={isVisible} />
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
      {isVisible && <ShareCoinModal toogleModal={toogleModal} />}
    </Box>
  ));
};

export default CoinsList;
