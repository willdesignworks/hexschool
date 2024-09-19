<template>

<navbar></navbar>
Dashboard 登入成功
<div class="container-fluid">
  <router-view/>
</div>

</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar,
  },

  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    console.log(token);
    this.$http.defaults.headers.common.Authorization = `${token}`;
    // 登入驗證
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      console.log(res);
      if (!res.data.success) {
        this.$router.push('/login');// 登入失敗 轉回登入頁
      }
    });
  },
};
</script>
