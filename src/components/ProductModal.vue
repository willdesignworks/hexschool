<template>
<!-- Modal -->
<div
 class="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  ref="modal"
>
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>新增產品</span>
        </h5>
        <button type="button" class="btn-close"
         data-bs-dismiss="modal"
          aria-label="Close">
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="image" class="form-label">輸入圖片網址
                <input type="text" class="form-control" id="image"
                 v-model="temProduct.imageUrl"
                  placeholder="請輸入圖片連結">
              </label>
            </div>
            <div class="mb-3">
              <label for="customFile" class="form-label">或 上傳圖片
                <i class="fas fa-spinner fa-spin"></i>
                <input type="file" id="customFile" class="form-control">
              </label>
            </div>
            <img class="img-fluid" alt="">
            <!-- 延伸技巧，多圖 -->
            <div class="mt-5">
              <div class="mb-3 input-group" >
                <input type="url" class="form-control form-control"
                 v-model="temProduct.images"
                  placeholder="請輸入連結">
                <button
                 type="button"
                  class="btn btn-outline-danger" @click="temProduct.images.splice(key, 1)">
                  移除
                </button>
              </div>
              <div>
                <button class="btn btn-outline-primary btn-sm d-block w-100">
                  新增圖片
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label">標題
                <input type="text" class="form-control" id="title"
                 v-model="temProduct.title"
                  placeholder="請輸入標題"
                >
              </label>
            </div>

            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類
                  <input type="text" class="form-control" id="category"
                   v-model="temProduct.category"
                    placeholder="請輸入分類"
                    >
                </label>
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位
                  <input type="text" class="form-control" id="unit"
                   v-model="temProduct.unit"
                    placeholder="請輸入單位"
                >
                </label>
              </div>
            </div>

            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價
                  <input type="number" class="form-control" id="origin_price"
                   v-model="temProduct.origin_price
                   " placeholder="請輸入原價"
                  >
                </label>
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價
                  <input type="number" class="form-control" id="price"
                   v-model="temProduct.price"
                    placeholder="請輸入售價"
                  >
                </label>
              </div>
            </div>
            <hr>

            <div class="mb-3">
              <label for="description" class="form-label">產品描述
               <textarea type="text" class="form-control" id="description"
                v-model="temProduct.description"
                 placeholder="請輸入產品描述"
               >
               </textarea>
              </label>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容
                <textarea type="text" class="form-control" id="content"
                 v-model="temProduct.content"
                  placeholder="請輸入產品說明內容"
                >
              </textarea>
              </label>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <label class="form-check-label" for="is_enabled">是否啟用
                  <input class="form-check-input" type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        id="is_enabled">
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary"
                data-bs-dismiss="modal">取消
        </button>
        <button type="button"
         class="btn btn-primary"
          @click="$emit('update-product', temProduct)"
        >
         確認
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: { // 接收 外層temProduct 傳進來的資料
    product: {
      type: Object, // 物件型別
      default() { return {}; }, // 預設值
    },
  },
  watch: { // 監聽資料變動
    product() {
      this.temProduct = this.product;
    },
  },
  data() {
    return {
      modal: {},
      temProduct: {}, // 接收外層資料
    };
  },
  methods: { // 呼叫modal方法
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
