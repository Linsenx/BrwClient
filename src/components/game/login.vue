<template>
<div class="game-login">
	<div id="login-header">
		<p>
			<gui-strokefont :size="12" text="BRW Beta0.1" />
		</p>
		<p>
			<gui-strokefont :size="12" text="By NightCat(暗夜之猫)" />
		</p>
	</div>
	<div id="login-box">
		<div id="title">
			<gui-strokefont :size="20" text="登录游戏" />
		</div>
		<ul>
			<li class="list">
				<i class="gui-icon__left icon-user" />
				<input type="text" placeholder="BRW战网账户" spellcheck="false">
			</li>
			<li class="list">
				<i class="gui-icon__left icon-lock" />
				<input type="password" placeholder="BRW战网密码">
			</li>
			<li>
				<gui-button color="green" :width="390" :height="45" @click="joinGame">
					<i class="gui-icon__left icon-enter" />
					<gui-strokefont :size="16" text="登录" />
				</gui-button>
			</li>
		</ul>
		<div>
			<i class="gui-icon__left icon-user-plus-left" />
			<gui-strokefont :size="12" text="注册账号" />
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "game-login",
	methods: {
		joinGame() {
			this.$router.push('/stage')
		}
	}
}
</script>

<style lang="less" scoped>
@import "~../../theme/main.less";

i {
	font-size: 15px;
}

#login-header {
    padding: 20px;
}

#login-box {
    position: absolute;
    left: 345px;
    top: 185px;
    width: 450px-60px;
    height: 350px-60px;
    padding: 30px;
    border-radius: 5px;
    #title {
        margin-bottom: 46px;
    }
}

li {
    width: 390px-20px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 20px;
	&.list {
		border: none;
		border-radius: 5px;
    	padding: 0 10px 0 10px;
	}
    input {
        width: 300px;
        font-size: 16px;
        border: 0;
        background: transparent;
    }
}
</style>
