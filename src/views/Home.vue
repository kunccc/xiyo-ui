<template>
  <div class="wrapper">
    <TopNav/>
    <div class="banner">
      <h1>西柚 UI</h1>
      <h2>一款基于 Vue3 的 UI 框架</h2>
      <p class="actions">
        <a href="https://www.github.com">Github</a>
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
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的代码都十分简洁</p>
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
  background: linear-gradient(145deg, rgba(255, 224, 218, 1) 0%, rgba(255, 207, 198, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  .banner {
    text-align: center;
    padding-top: 90px;
    color: #FF8D78;
    h1 {
      margin-bottom: 20px
    }
    .actions {
      padding: 50px 0;
      a {
        font-size: 14px;
        background: #FF8D78;
        color: #fff;
        padding: 6px 14px;
        margin: 0 10px;
        border-radius: 16px;
      }
    }
  }
}
.feature {
  margin: 48px auto;
  width: 400px;
  transform: translateX(48px);
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
    transform: translateX(56px);
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text
      }
    }
  }
}
</style>