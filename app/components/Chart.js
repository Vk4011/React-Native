import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const { width: SIZE } = Dimensions.get('window');

const Chart = ({ currentPrice, logoUrl, name, symbol, priceChangePercentage7d, sparkline }) => {
  const [chartReady, setChartReady] = useState(false);

  const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

  useEffect(() => {
    setTimeout(() => {
      setChartReady(true);
    }, 0);
  }, []);

  if (sparkline.length === 0) {
    return <Text>Loading...</Text>;
  }

  const data = {
    labels: [],
    datasets: [
      {
        data: sparkline,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
  };

  return (
    <View style={styles.chartWrapper}>
      {/* Titles */}
      <View style={styles.titlesWrapper}>
        <View style={styles.upperTitles}>
          <View style={styles.upperLeftTitle}>
            <Image source={{ uri: logoUrl }} style={styles.image} />
            <Text style={styles.subtitle}>
              {name} ({symbol.toUpperCase()})
            </Text>
          </View>
          <Text style={styles.subtitle}>7d</Text>
        </View>
        <View style={styles.lowerTitles}>
          <Text style={styles.boldTitle}>${currentPrice}</Text>
          <Text style={[styles.title, { color: priceChangeColor }]}>{priceChangePercentage7d.toFixed(2)}%</Text>
        </View>
      </View>

      {chartReady ? (
        <View style={styles.chartLineWrapper}>
          <LineChart
            data={data}
            width={SIZE}
            height={220}
            chartConfig={chartConfig}
            bezier
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    marginVertical: 16,
  },
  titlesWrapper: {
    marginHorizontal: 16,
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
    width: 24,
    height: 24,
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
