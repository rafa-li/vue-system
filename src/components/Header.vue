<template>
    <div class="header">
        <div class="logo">Hive后台管理系统1.0</div>
        <div class="user-info">
            <el-dropdown trigger="click" @comand="handleCommand">
                <span class="el-dropdown-link">
                    <span style="margin-left:8px;margin-right:10px">{{role}} {{name}}</span>
                    <i class="el-icon-caret-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="personInfo">个人信息</el-dropdown-item>
                    <el-dropdown-item command="loginout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      role: '管理员',
      name: localStorage.getItem('username')
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'loginout') {
        localStorage.removeItem('username')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
    background: #2E363F;
    .logo {
        float: left;
        width: 250px;
        text-align: center;
        font-size: 16px;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        span {
            color: #fff;
        }
    }
}
</style>
