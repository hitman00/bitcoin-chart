<template>
  <div :class="$style.header_box">
    <div :class="$style.title">
      <div :class="$style.logo">
        <div :class="$style.logo_img">
          <img src="@/assets/imgs/logo.png" />
        </div>
        <div :class="$style.logo_title">Bitcoin<span>(BTC)</span></div>
        <img :class="$style.star" src="@/assets/imgs/star.png" />
      </div>
      <div :class="$style.links">
        <ul :class="$style.link_fix">
          <li v-for="item in items" :key="item.id">
            <img :class="$style.img_icon" :src="item.icon" />
            {{ item.page }}
            <img :class="$style.arrow" src="@/assets/imgs/arrow.png" />
          </li>
        </ul>
        <div :class="$style.links_icon" @click="show = !show">
          <div :class="[$style.logo_img, show ? $style.active : '']">
            <img src="@/assets/imgs/menu.png" />
          </div>
          <div v-if="show" :class="$style.open_links">
            <ul>
              <li>Website</li>
              <li>Explore</li>
              <li>Message Board</li>
              <li>Source Code</li>
              <li>Technical Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.number">
      <Price />
    </div>
  </div>
</template>

<script>
import Price from './Price/Price.vue'
export default {
  name: 'Header',
  components: {
    Price,
  },
  data: () => ({
    show: false,
    items: [
      {
        page: 'Website',
        icon: require('@/assets/imgs/website.png'),
      },
      {
        page: 'Explore',
        icon: require('@/assets/imgs/search.png'),
      },
      {
        page: 'Message Board',
        icon: require('@/assets/imgs/message1.png'),
      },
      {
        page: 'Source Code',
        icon: require('@/assets/imgs/sorce.png'),
      },
      {
        page: 'Technical Documentation',
        icon: require('@/assets/imgs/page.png'),
      },
    ],
  }),
}
</script>

<style lang="scss" module>
.header_box {
  display: flex;
  padding: 3% 5%;
  background: #1e2429;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

.title {
  width: 30%;
}

.number {
  width: 70%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo_img {
  position: relative;
  width: 15%;
  transition: all 0.6s ease;
  &.active {
    transform: rotate(45deg);
  }
  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.links_icon {
  display: none;
  width: 50%;
  justify-content: end;
  .logo_img {
    cursor: pointer;
  }
}

.logo_title {
  font-weight: 500;
  font-size: 30px;
  margin: 0 4%;
  span {
    display: block;
    font-size: 19px;
    font-weight: 300;
  }
}

.star {
  width: 7%;
  display: block;
  margin-top: -8%;
}

.links {
  padding: 5%;
  position: relative;
  .link_fix li {
    display: flex;
    align-items: center;
    margin-bottom: 4%;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: #f79413;
    }
  }
}

.img_icon {
  display: block;
  width: 7%;
  margin-right: 3%;
  opacity: 0.8;
}

.arrow {
  margin-left: 3%;
}

.open_links {
  background: #155ebb;
  position: absolute;
  top: 70%;
  right: 12%;
  padding: 3%;
  border-radius: 5px;
  animation: menu 0.4s ease-in-out;
  ul {
    li {
      padding: 3% 0;
      transition: all 0.3s ease;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        color: #f79413;
      }
    }
  }
}

@keyframes menu {
  from {
    opacity: 0;
    right: 0%;
  }
  to {
    opacity: 1;
    right: 12%;
  }
}

@media (max-width: 1030px) {
  .links .link_fix li {
    font-size: 13px;
  }
}

@media (max-width: 850px) {
  .header_box {
    flex-direction: column;
  }

  .links_icon {
    display: flex;
  }

  .links {
    width: 50%;
    display: flex;
    justify-content: end;
    .link_fix {
      display: none;
    }
  }

  .title {
    width: 100%;
    display: flex;
  }

  .logo {
    width: 50%;
  }

  .number {
    width: 100%;
  }
}

@media (max-width: 580px) {
  .title {
    margin-bottom: 5%;
  }

  .logo_title {
    font-size: 20px;
    span {
      font-size: 15px;
    }
  }

  .logo_img {
    width: 20%;
  }
}

@media (max-width: 370px) {
  .logo_img {
    width: 27%;
  }

  .open_links ul li {
    font-size: 9px;
  }
}
</style>
