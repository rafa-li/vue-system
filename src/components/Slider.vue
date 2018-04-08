<template>
    <div class="slider">
        <el-col :span="12">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                unique-opened router
                >
                <template v-for="item in items" >
                    <el-menu-item :index="item.index" :key="item.index" v-if="!item.subs">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                    <el-submenu v-else :index="item.index" :title="item.title" :key="item.index">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item class="seam"v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}</el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>
        </el-col>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
      return {
        role: '',
        titles: [],
        items: [{
          icon: 'el-icon-date',
          index: '/home',
          title: '简介'
        },
        {
          icon: 'el-icon-date',
          index: 'axios',
          title: 'Axios'
        },
        {
          icon: 'el-icon-date',
          index: '2',
          title: '基础',
          subs: [
            {
              icon: 'el-icon-date',
              index: 'base',
              title: '基础设置'
            }
          ]
        }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
<style lang="scss">
.slider {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2E363F;
  .el-col-12{
    width: 100%;
  }
}
</style>
