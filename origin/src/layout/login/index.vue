<template>
  <div id="app" >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登 录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
export default{
  data() {
    return {
      form: {
        name: "",
        pwd: "",
      }
    };
  },
  methods: {
    onSubmit(){
      this.$router.push({path: '/operation'})
    }
  }
}
</script>
