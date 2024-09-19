<template>
<p>產品列表</p>
<div class="text-end">
  <button class="btn btn-primary" type="button" @click="openModal(true)">
    增加一個產品
  </button>
</div>
<table class="table mt-4">
  <thead>
    <tr>
      <th width="120">分類</th>
      <th>產品名稱</th>
      <th width="120">原價</th>
      <th width="120">售價</th>
      <th width="100">是否啟用</th>
      <th width="200">編輯</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in products" :key="item.id">
      <td>{{ item.category }}</td>
      <td>{{ item.title }}</td>
      <td class="text-right">
        {{ item.origin_price }}
      </td>
      <td class="text-right">
        {{ item.price }}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm"
           @click="openModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<ProductModal ref="productModal"
 :product="temProduct"
  @update-product="updateProduct">
</ProductModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';

export default {
  data() {
    return {
      products: {}, // 商品
      pagination: {}, // 頁數
      temProduct: {}, // 新增
      isNew: false, // 新增
    };
  },
  components: {
    ProductModal, // 元件區域註冊
  },
  methods: {
    getProducts() {
      // api 路徑 (取得商品列表)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;// console.log('api');
      // api方法
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data);
            this.products = res.data.products; // 商品
            this.pagination = res.data.pagination; // 頁數
          }
        });
    },
    openModal(isNew, item) { // 開啟方法
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) { // 傳到後端, 商品建立
      // console.log(item);
      const productComponent = this.$refs.productModal;
      this.tempProduct = item;

      // api 路徑 (商品建立)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;// console.log('api');
      this.$http.post(api, { data: this.temProduct }).then((response) => {
        console.log(response);
        productComponent.hideModal(); // 關閉Modal
        this.getProducts(); // 重新取得列表資料
      });
    },

  },
  created() {
    this.getProducts();
  },
};
</script>
