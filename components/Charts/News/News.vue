<template>
  <div :class="$style.news_main">
    <div v-for="item in list" :key="item.id" :class="$style.news_box">
      <div :class="$style.news_image">
        <img :src="item.img" />
      </div>
      <div :class="$style.news_title">{{ item.title }}</div>
      <div :class="$style.news_profile">
        <div :class="$style.avatar"><span></span>{{ item.person }}</div>
        <div :class="$style.times">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: [
      {
        img: require('@/assets/imgs/new1.png'),
        title:
          'Bitcoin price at $16k and beyond? Here are the bear and bull cases',
        person: 'Navid JM',
        time: '1 HOUR AGO',
      },
      {
        img: require('@/assets/imgs/new2.png'),
        title:
          'Bitcoin price at $16k and beyond? Here are the bear and bull cases',
        person: 'Javad SM',
        time: '1 HOUR AGO',
      },
      {
        img: require('@/assets/imgs/new3.png'),
        title:
          'Bitcoin price at $16k and beyond? Here are the bear and bull cases',
        person: 'Ali Abas',
        time: '2 HOUR AGO',
      },
      {
        img: require('@/assets/imgs/new4.png'),
        title:
          'Bitcoin price at $16k and beyond? Here are the bear and bull cases',
        person: 'Poya',
        time: '3 HOUR AGO',
      },
    ],
  }),
}
</script>

<style lang="scss" module>
.news_main {
  width: 100%;
  margin-top: 4%;
  display: flex;
  padding-bottom: 4%;
  justify-content: space-between;
}

.news_box {
  width: 23%;
  background: #1c2024;
  border-radius: 10px;
  padding-bottom: 2%;
  box-shadow: 0px 0px 3px #161616;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
}

.news_image {
  position: relative;
  width: 100%;
  &:before {
    content: '';
    display: block;
    padding-bottom: 59%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
.news_title {
  font-weight: 500;
  opacity: 0.9;
  padding: 5%;
}

.news_profile {
  margin-top: 4%;
  display: flex;
  justify-content: space-between;
  padding: 6%;
}

.avatar {
  width: 50%;
  span {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #7460cb;
    margin-right: 4%;
    display: inline-block;
    vertical-align: sub;
  }
}

.times {
  opacity: 0.7;
  text-align: right;
}

@media (max-width: 900px) {
  .news_main {
    flex-wrap: wrap;
  }

  .news_box {
    width: 48%;
    margin-bottom: 6%;
  }
}

@media (max-width: 500px) {
  .news_box {
    width: 100%;
    margin-bottom: 10%;
  }
}
</style>
