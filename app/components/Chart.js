import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Chart = ({
  currency,
  currentPriceChangePercentage,
  logoUrl,
  name,
  symbol,
  sparkline,
  currentPrice,
}) => {


  return (
    <View style={styles.chartWrapper}>
      <View style={styles.titleWrapper}>
        <View style={styles.upperTitle}>
          <View style={styles.upperLeftWrapper}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
            <Text style={styles.subtitle}>{name} ({symbol})</Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <Text>${currentPrice}</Text>
        <Text style={{ color: currentPriceChangePercentage > 0 ? "#34C759" : "#FF3B30" }}>
          {currentPriceChangePercentage}
        </Text>
      </View>
      {/* {sparkline && sparkline.currentPrice !== undefined ? (
        <Text>Sparkline: {sparkline.currentPrice}</Text>
      ) : (
        <Text>No sparkline data available</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16
  },
  titlesWrapper: {
    marginHorizontal: 16
  },
  upperTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperLeftTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 44,
    height: 44,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#A9ABB1',
  },
  lowerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
  },
  chartLineWrapper: {
    marginTop: 40,
  },
});


export default Chart;
