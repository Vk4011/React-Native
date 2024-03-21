import { StatusBar } from "expo-status-bar";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import ListItem from "./components/ListItem";
import ListHeader from "./components/ListHeader";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import api from "./url.js";
import Chart from "./components/Chart.js";

export default function App() {
  const [data, setData] = useState([]);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  useEffect(() => {
    getCryptoData();
  }, []);

  const getCryptoData = async () => {
    try {
      // const response = await fetch(
      //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=108&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      // );
      // const jsonData = await response.json();
      const jsonData = api;
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const openSheet = useCallback((crypto) => {
    bottomSheetRef.current?.expand();
    setSelectedCrypto(crypto);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ListHeader />
        <View style={styles.divider} />
        <ScrollView>
          {data.map((crypto, index) => (
            <ListItem
              key={index}
              name={crypto.name}
              logoUrl={crypto.image}
              symbol={crypto.symbol}
              currentPrice={crypto.current_price}
              onPress={() => openSheet(crypto)}
              priceChangePercentage={crypto.price_change_percentage_24h}
            />
          ))}
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[30, 300, 500]}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          {selectedCrypto && (
            <Chart
              currentPrice={selectedCrypto.current_price}
              logoUrl={selectedCrypto.image}
              name={selectedCrypto.name}
              symbol={selectedCrypto.symbol}
              priceChangePercentage={selectedCrypto.price_change_percentage_24h}
              sparkline={selectedCrypto.sparkline_in_7d.price}
            />
          )}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5c80bc",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "blue",
    marginHorizontal: 16,
    marginTop: 16,
  },
  contentContainer: {
    backgroundColor: "white",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
