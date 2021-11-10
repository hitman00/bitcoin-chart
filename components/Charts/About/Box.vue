<template>
  <div :class="$style.about_main">
    <div :class="$style.about_bitcoin">
      <div v-for="text in texts" :key="text.id">
        <div :class="$style.about_title">{{ text.title }}</div>
        <div :class="$style.about_description">{{ text.description }}</div>
      </div>
    </div>
    <div :class="$style.price_bitcoin">
      <div v-for="item in list" :key="item.id">
        <div :class="$style.price_title">{{ item.priceTitle }}</div>
        <div style="margin-bottom: 10%">
          <ul
            v-for="(i, id) in item.details"
            :key="id"
            :class="[id % 2 == 0 ? $style.active : '']"
          >
            <li style="opacity: 0.7; font-size: 14px">{{ i.priceTimes }}</li>
            <li>{{ i.price }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartsAboutBox',
  data: () => ({
    texts: [
      {
        title: 'About Bitcoin',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero hic autem, ea eius quaerat?',
      },
      {
        title: 'What is Bitcoin?',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero hic autem, ea eius quaerat? nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis ',
      },
      {
        title: 'Who Are the Founders of Bitcoin?',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero  consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis  consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis  consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis  consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis hic autem, ea eius quaerat?',
      },
      {
        title: 'What Makes Bitcoin Unique?',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero hic autem, ea eius quaerat?',
      },
      {
        title: 'How Much Bitcoin Is in Circulation?',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero hic autem, ea eius quaerat?',
      },
      {
        title: 'How Is the Bitcoin Network Secured?',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero hic autem, ea eius quaerat?',
      },
      {
        title: 'Where Can You Buy [Bitcoin] ([BTC])?',
        description:
          ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quae modi iste commodi nisi exercitationem, aperiam id aliquid corporis perspiciatis quo nesciunt velit nobis libero hic autem, ea eius quaerat?',
      },
    ],
    list: [
      {
        priceTitle: 'Bitcoin Price Today',
        details: [
          {
            priceTimes: 'Bitcoin Price Today',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour High/ Low',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour Volume',
            price: '$32,084,496 USD',
          },
        ],
      },
      {
        priceTitle: 'Yesterdays Bitcoin Price',
        details: [
          {
            priceTimes: 'Bitcoin Price Today',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour High/ Low',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour Volume',
            price: '$32,084,496 USD',
          },
        ],
      },
      {
        priceTitle: 'Historic Bitcoin Price',
        details: [
          {
            priceTimes: 'Bitcoin Price Today',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour High/ Low',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour Volume',
            price: '$32,496 USD',
          },
        ],
      },
      {
        priceTitle: 'Bitcoin Supply Details',
        details: [
          {
            priceTimes: 'Bitcoin Price Today',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour High/ Low',
            price: '$16,463.18 USD',
          },
          {
            priceTimes: '24 Hour Volume',
            price: '$32,084,496 USD',
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="scss" module>
.about_main {
  width: 100%;
  display: flex;
  margin-top: 8%;
}

.about_bitcoin {
  width: 70%;
}

.price_bitcoin {
  width: 30%;
  padding: 1% 0% 0 4%;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 9% 5%;
    &.active {
      background: #21272d;
    }
    li {
      font-size: 14px;
    }
  }
}

.about_title {
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 1%;
}

.about_description {
  opacity: 0.7;
  text-align: justify;
  margin-bottom: 6%;
}

.price_title {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 4%;
}

@media (max-width: 1000px) {
  .about_description {
    font-size: 14px;
  }

  .price_title {
    font-size: 20px;
  }

  .about_title {
    font-size: 22px;
  }
}

@media (max-width: 800px) {
  .about_main {
    flex-direction: column-reverse;
  }

  .about_bitcoin {
    width: 100%;
  }

  .price_bitcoin {
    width: 100%;
    ul {
      padding: 4% 5%;
    }
  }
}
</style>
