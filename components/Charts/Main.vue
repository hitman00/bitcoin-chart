<template>
  <div :class="$style.chart_main">
    <div :class="$style.part_top">
      <ul>
        <li :class="[show ? $style.active : '']" @click="show = true">
          Charts
        </li>
        <li :class="[!show ? $style.active : '']" @click="show = false">
          News
        </li>
      </ul>
    </div>
    <div v-if="show" :class="$style.charts">
      <div :class="$style.chart_head">
        <div :class="$style.chart_title">Bitcoin Charts</div>
        <div :class="$style.chart_time">
          <ul>
            <li :class="$style.active">Day</li>
            <li>Week</li>
            <li>Month</li>
            <li>Year</li>
            <li>All</li>
          </ul>
        </div>
        <div :class="$style.chart_date">
          From
          <input type="text" placeholder="Start Date" /> To
          <input type="text" placeholder="End Date" />
        </div>
      </div>
      <LineChartBox
        v-if="loaded"
        :chartdata="chartData"
        :options="chartOptions"
      />
      <ChartsAboutBox />
    </div>
    <div v-if="!show"><ChartsNewsBox /></div>
  </div>
</template>

<script>
export default {
  name: 'ChartsMain',
  data() {
    return {
      show: true,
      loaded: false,
      chartData: {
        labels: null,
        datasets: [
          {
            label: 'price',
            data: null,
            borderColor: '#c22abd',
            backgroundColor: '#21272d',
            tension: 0,
            borderWidth: 2,
          },
          {
            label: 'Market Cap',
            data: null,
            borderColor: '#2963b8',
            backgroundColor: '#21272d',
            fill: false,
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

        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: '#272d33',
              },
            },
          ],
        },

        title: {
          display: false,
          text: 'BITCOIN',
        },

        legend: {
          align: 'end',
        },
      },
    }
  },
  async fetch() {
    const data = await this.$axios.get('/proUrl/')
    this.loaded = true
    this.chartData.labels = data.data[0].timestamps.map((item) =>
      item.substr(0, 10)
    )
    this.chartData.datasets[0].data = data.data[0].prices
    this.chartData.datasets[1].data = data.data[1].prices.map(
      (item) => item * 13
    )
  },
}
</script>

<style lang="scss" module>
.chart_main {
  margin-top: 2%;
  background: #1e2429;
  border-radius: 10px;
  padding: 2% 4%;
  margin-bottom: 10%;
}

.part_top {
  border-bottom: 2px solid #1b1f23;
  ul {
    display: flex;
    li {
      padding: 2% 1%;
      cursor: pointer;
      transition: all 0.5s ease;
      opacity: 0.7;
      border-bottom: 2px solid #1b1f23;
      font-weight: 500;
      &.active {
        border-bottom: 2px solid #f79413;
        opacity: 1;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}

.chart_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2% 0;
}

.chart_title {
  font-size: 27px;
  font-weight: 500;
  width: 30%;
}

.chart_time {
  width: 40%;
  ul {
    display: flex;
    li {
      padding: 1% 4%;
      opacity: 0.2;
      transition: all 0.3s ease;
      cursor: pointer;
      border-radius: 10px;
      margin: 0 auto;
      &:hover {
        opacity: 1;
      }
      &.active {
        background: #155ebb;
        opacity: 1;
      }
    }
  }
}

.chart_date {
  text-align: right;
  input {
    width: 30%;
    background: #283035;
    border: 0;
    color: #93979a;
    padding: 3%;
    font-size: 18px;
    border-radius: 5px;
    margin: 0 1.5%;
    &:focus {
      outline: none;
    }
  }
}
@media (max-width: 900px) {
  .chart_head {
    flex-wrap: wrap;
  }

  canvas {
    height: 300px !important;
  }

  .chart_title {
    font-size: 20px;
    width: 100%;
  }

  .chart_time {
    width: 50%;
    margin: 4% 0;
    ul li {
      font-size: 15px;
    }
  }

  .chart_date {
    width: 50%;
    input {
      font-size: 16px;
    }
  }
}

@media (max-width: 570px) {
  .part_top ul li {
    font-size: 14px;
    padding: 2% 3%;
  }

  .chart_date {
    text-align: center;
    width: 100%;
  }

  .chart_time {
    width: 100%;
    margin: 4% 0;
  }
}
</style>
