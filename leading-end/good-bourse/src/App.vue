<template>
  <div id="viewport">
    <div class="loginCard">
      <div class="loginCard-left">
        <h1 class="loginCard-title">Good&nbsp;交易所</h1>
        <p class="loginCard-text">
          <span>本站仅供学习使用</span><br/>
          <span>项目地址:
            <a :href="$store.state.api.github">点击前往</a>
          </span><br/>
          <span>作者:<br/>
            {{ $store.state.author.name }}
          </span>
        </p>
      </div>
      <div class="loginCard-right">
        <h1 class="loginCard-title">用户登录</h1>
        <form action="#" method="post" class="loginCard-form">
          <div class="inputs">
            <input type="text" class="login-input account" placeholder="&nbsp;账号">
            <br />
            <input type="password" class="login-input password" placeholder="&nbsp;密码">
          </div>
          <div class="loginCard-a">
            <a href="#">我是卖家</a>
            <a href="#">忘记密码</a>
          </div>
          <button type="submit" class="button-submit">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created(){
    // console.log(this.$store.state);
  }
}
</script>

<style scoped>
/* 视口 */
#viewport {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loginCard {
  width: calc(var(--loginCard-width) - 40px);
  height: calc(var(--loginCard-height) - 40px);
  background-color: var(--loginCard-color);
  border-radius: 24px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
}

.loginCard-left,
.loginCard-right {
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
}

.loginCard-left {
  width: var(--loginCard-left-width);
}

.loginCard-right {
  width: var(--loginCard-right-width);
}

.loginCard-title {
  color: white;
  display: block;
}

.loginCard-text{
  width:100%;
  height:300px;
  padding-top:50px;
  line-height:50px;
  font-size: 24px;
}

.loginCard-form {
  width: 100%;
  margin-top: 25px;
}

.login-input {
  width: calc(95% - 26px);
  padding: 8px 12px;
  border: 1px solid #c6c6c6;
  margin: 10px 0 10px 0;
  line-height: 50px;
  height:32px;
}

.login-input:focus {
  outline: 2px solid #00754b;
}

.loginCard-a{
  display:flex;
  justify-content: space-between;
}

.button-submit {
  margin-top:20px;
  width: 95%;
  height:50px;
  border: 0;
  color: white;
  background-color: #474554;
  cursor: pointer;
}

.login-input,
.button-submit {
  font-size: 20px;
  border-radius: 10px;
  font-weight: 600;
}
</style>
