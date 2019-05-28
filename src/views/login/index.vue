<template>
    <div >
        <div class="panel">
            <h3>{{title}}</h3>
            <br />
            <div class="loginbox" >
                <label>账号</label> <input placeholder="请输入内容" class="login" size='small' @keyup="form.username=form.username.replace(/\s+/g,'')" v-model.trim="form.username"></input>
            </div>
            <div class="loginbox">
                <label>密码</label> <input placeholder="请输入密码" type="password" class="login" size='small' @keyup="form.password=form.password.replace(/\s+/g,'')" v-model.trim="form.password"></input>
            </div>
            <div class="loginbox" v-if="mark">
                <label>确认密码</label> <input placeholder="请再次输入密码" type="password" class="login" size='small' @keyup="form.repassword=form.repassword.replace(/\s+/g,'')" v-model.trim="form.repassword"></input>
            </div>

            <div class="loginbtn">
                <el-button type="primary" plain @click="login">登陆</el-button>
                <el-button type="info" plain @click="register">注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //用户信息
            form:{
                username:'',
                password:'',
                repassword:''
            },
            //用于注册的时候 确认密码 true为注册 false为登陆
            mark:false,
            //标题
            title:'登陆',
        }
    },
    methods:{
        //登陆
        login(){
            let data = {
                username:this.form.username,
                password:this.form.password
            }
            if(this.mark){
                this.mark = false
                this.title =  '登陆'
                this.reform()
                
            }else{
                if(data.username == ''){
                    this.$message.error('用户名不能为空')
                    return
                }else if( data.password == ''){
                    this.$message.error('密码不能为空')
                    return
                }else if(data.username != '' && data.password != ''){
                    console.log('登陆成功')
                    this.$router.push({name:'admin'})
                }
            }
            
        },
        //注册
        register(){
            if(this.mark){
                for(let x in this.form){
                    if(this.form[x]){

                    }
                }
            }else{
                this.mark = true
                this.title =  '注册'
                this.reform()
            }
            
        },
        //重置表单东西
        reform(){
            for(let x in this.form){
                this.form[x] = ''
            }
        }
    },
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
        width:80px;
        text-align: right;
        padding-right:10px;
        display: inline-block;
        border-right: 1px solid black;
    }
    .loginbtn{
        margin-bottom: 10px;
    }
</style>
