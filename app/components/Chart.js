import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Chart({
  currency,
  priceChangePercentage,
  logoUrl,
  name,
  symbol,
  sparkline,
  currentPrice,
}) {
  return (
    <View style={styles.chartWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.upperTitle}>
          <View style={styles.upperLeftWrapper}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
            <Text style={styles.subtitle}>{name} {symbol}</Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <Text>${currentPrice}</Text>
        <Text style={{ color: priceChangePercentage > 0 ? "#34C759" : "#FF3B30" }}>
          {priceChangePercentage.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartWrapper: {
    marginTop: 20,
    marginHorizontal: 16,
    height: 300,
    backgroundColor: "#4d5061",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  upperTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 24,
    width: 24,
  },
  subtitle: {
    fontSize: 16,
    color: "#A9ABB1",
  },
});

export default Chart;
