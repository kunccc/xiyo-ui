<template>
  <div class="wrapper">
    <TopNav/>
    <div class="banner">
      <svg class="icon">
        <use xlink:href="#icon-xiyo"/>
      </svg>
      <img src="../assets/xiyo-logo.png">
      <p class="p2">一个基于 Vue3 的 UI 组件库</p>
      <p class="actions">
        <a href="https://github.com/kunccc/xiyo-ui">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="feature">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue3</h3>
        <p>使用了 Vue3 Composition API</p>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg class="icon light">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>所有组件的代码都十分简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav},
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 300px;
  background: linear-gradient(145deg, rgba(255, 224, 218, 1) 0%, rgba(255, 207, 198, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  .banner {
    text-align: center;
    padding-top: 70px;
    color: #FF8D78;
    .icon {
      width: 78px;
      height: 78px;
      margin-right: 18px;
      transform: translateY(-16px);
    }
    img {
      height: 52px;
      margin-bottom: 20px
    }
    .p2 {
      font-size: 22px;
    }
    .actions {
      padding: 50px 0;
      a {
        font-size: 14px;
        background: #FF8D78;
        color: #fff;
        padding: 7px 14px;
        margin: 0 14px;
        border-radius: 6px;
      }
    }
  }
}
.feature {
  margin: 50px auto;
  width: 400px;
  transform: translateX(48px);
  @media (min-width: 800px) {
    width: 800px;
    transform: translateY(20px);
  }
  @media (min-width: 1200px) {
    width: 1200px;
    transform: translate(56px, 70px);
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      color: #333;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      > svg {
        grid-area: icon;
        width: 62px;
        height: 62px;
        &.light {
          transform: translateX(-2px);
        }
      }
      > h3 {
        grid-area: title;
        font-size: 25px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>