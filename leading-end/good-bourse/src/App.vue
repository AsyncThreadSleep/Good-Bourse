<template>
  <div id="HtmlBody">
    <div class="login-card">
      <div class="card-left">
        <h1 class="card-title">Good 交易所</h1>
      </div>
      <div class="card-right">
        <h1 class="card-title">用户登录</h1>
        <form action="#" method="post">
          <div class="inputs">
            <input type="text" class="login-input account" placeholder="&nbsp;账号">
            <br />
            <input type="password" class="login-input password" placeholder="&nbsp;密码">
          </div>
          <div class="buttons">
            <button type="button" class="button-submit">我是卖家</button>
            <button type="submit" class="button-submit">登录</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import store from './store';

export default {

}
</script>

<style scoped>
#HtmlBody {
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 700px;
  height: 450px;
  background-color: #8083ff;
  border-radius: 24px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  text-align: center;
}

.card-title {
  color: white;
  display: block;
}

.card-left {
  width: 250px;
  margin-top: 20px;
}

.card-right {
  width: 410px;
  margin-top: 20px;
}

.inputs{
  margin-top: 40px;
}

.buttons{
  margin-top: 30px;
}

.login-input {
  width: 95%;
  padding: 10px 20px;
  border: 1px solid #c6c6c6;
  margin: 10px 0 10px 0;
  line-height: 50px;
}

.login-input:focus {
  outline: 2px solid #00754b;
}

.button-submit {
  width: 40%;
  border: 0;
  color: white;
  background-color: #474554;
  margin: 0 15px;
  cursor: pointer;
}

.login-input,
.button-submit {
  height: 50px;
  box-sizing: border-box;
  font-size: 20px;
  border-radius: 10px;
  font-weight: 600;
}
</style>
