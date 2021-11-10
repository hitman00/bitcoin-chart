<template>
  <div v-if="loaded" :class="$style.price_main">
    <div :class="$style.item">
      <div :class="$style.title">Price</div>
      <div :class="$style.value">
        <h1>$ {{ prices }} <span>USD</span></h1>
      </div>
      <div :class="$style.value2">$ 1.00000000 BTC</div>
      <div :class="$style.lose">-1.12%</div>
    </div>
    <div :class="$style.item">
      <div :class="$style.title">Rank</div>
      <div :class="$style.rank">Rank 1</div>
    </div>
    <div :class="$style.item">
      <div :class="$style.title">Health</div>
      Attractive
    </div>
    <div :class="$style.item">
      <div :class="$style.title">Sentiment</div>
      Attractive
    </div>
    <div :class="$style.item">
      <div :class="$style.title">Market Cap</div>
      <div :class="$style.value">$ {{ market_cap }} USD</div>
      <div :class="$style.value2">$ 1600000 BTC</div>
    </div>
    <div :class="$style.item">
      <div :class="$style.title">Volume</div>
      <div :class="$style.value">$ {{ volume }} USD</div>
      <div :class="$style.value2">$ 1600000 BTC</div>
    </div>
    <div :class="$style.item">
      <div :class="$style.title">Last 7 Days</div>
      <div :class="$style.lose">-2%</div>
    </div>
    <div :class="$style.red_chart">
      <LineChart :chartdata="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPriceBox',
  data: () => ({
    prices: '',
    loaded: false,
    volume: '',
    market_cap: '',
    chartData: {
      labels: [10, 11, 12, 13, 14, 15, 16, 17, 9, 10],
      datasets: [
        {
          data: [15, 10, 14, 11, 15, 4, 15, 14, 10, 14],
          borderColor: '#ba1d1d',
          backgroundColor: '#5f2225',
          tension: 0,
          borderWidth: 2,
        },
      ],
    },

    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
        },
      },

      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  }),

  async fetch() {
    const data = await this.$axios.get('/price/')
    this.prices = data.data[0].price.substr(0, 9)
    this.market_cap = data.data[0].market_cap
    this.volume = data.data[0]['1d'].volume
    this.loaded = true
  },
}
</script>

<style lang="scss" module>
.price_main {
  display: flex;
  flex-wrap: wrap;
}

.item {
  padding: 0 4%;
  border-left: 1px solid #1b1f23;
  margin-bottom: 3%;
}

.title {
  color: #e1e1e1c7;
  font-weight: 300;
  margin-bottom: 3%;
}

.value {
  h1 {
    font-weight: 500;
    font-size: 30px;
    display: inline;
    line-height: 1.2;
  }
  span {
    font-size: 18px;
    color: #e1e1e1c7;
    font-weight: 300;
  }
}

.value2 {
  color: #e1e1e1c7;
  display: inline;
}

.rank {
  background: #155ebb;
  border-radius: 10px;
  margin: 20% -30% 0;
  text-align: center;
}

.red_chart {
  width: 18%;
  canvas {
    width: 100% !important;
    height: 40px !important;
  }
}

.lose {
  color: rgba(238, 0, 0, 0.973);
  display: inline;
}

@media (max-width: 500px) {
  .price_main {
    flex-direction: column;
  }

  .value {
    h1 {
      font-size: 20px;
      line-height: 1.8;
    }
  }

  .rank {
    margin: 4% 78% 0 0%;
  }

  .item {
    margin: 3% 0;
    padding: 0;
  }

  .title {
    font-size: 14px;
    margin: 0;
  }

  .red_chart {
    width: 90%;
    margin: 0 auto;
    canvas {
      height: 75px !important;
    }
  }
}
</style>
