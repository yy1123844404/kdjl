<template>
    <div >
        <div class="panel">
            <br />
            <div class="loginbox">
                <label>账号</label> <input placeholder="请输入内容" class="login" size='small' v-model="form.username"></input>
            </div>
            <div class="loginbox">
                <label>密码</label> <input placeholder="请输入密码" type="password" class="login" size='small' v-model="form.password"></input>
            </div>

            <div class="loginbtn">
                <el-button type="primary" plain>登陆</el-button>
                <el-button type="info" plain>注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                username:'',
                password:''
            }
        }
    }
}
</script>

<style scoped>
    .panel{
        width: 400px;
        border:1px solid black;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }
    .login{
        display: inline-block;
        width:220px;
        margin-left: 10px;
        font-size: 16px;
        /* 隐藏两个框的样式 */
        border:none !important;
        outline: none !important;
    }
    .loginbox{
        border: 1px solid black;
        border-radius: 10px;
        line-height: 30px;
        width:370px;
        margin-left: 15px;
        margin-bottom: 10px;
    }
    .loginbox > label{
        width:50px;
        text-align: center;
        display: inline-block;
        border-right: 1px solid black;
    }
    .loginbtn{
        margin-bottom: 10px;
    }
</style>
