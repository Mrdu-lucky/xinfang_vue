<template>
  <div class="uploadqiniu">

    <vue-core-image-upload
      class="el-button--text"
      :crop="'local'"
      :text="''"
      :cropBtn="{'ok':'保存头像','cancel':'放弃裁剪'}"
      @imagechanged="imagechanged"
      :isXhr="false">
    </vue-core-image-upload>
  </div>
</template>
<script>
  import VueCoreImageUpload from 'vue-core-image-upload'

  export default {
    props: [],
    data() {
      return {}
    },
    computed: {},
    components: {'vue-core-image-upload': VueCoreImageUpload},
    methods: {
      imagechanged(res) {
        this.$emit("imageuploading");
        document.body.style.overflow="auto";
        this.putb64(res)
      },

      putb64(base64) { //base64：上传到7牛base64的图片编码
        let replacestr = base64.substr(0, base64.indexOf(";base64,") + 8);
        let pic = base64.replace(replacestr, "");
        let xhr = new XMLHttpRequest();
        let url = "http://upload-z1.qiniu.com/putb64/-1";
        let picUrl = "";
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            //这里可以判断图片上传成功,而且可以通过responseText获取图片链接
            //let data = JSON.parse(xhr.responseText);
            //console.log(xhr.responseText);
            //图片链接就是yourcdnpath.xx/data.key
            let keyText = xhr.responseText;
            /*返回的key是字符串，需要装换成json*/
            keyText = eval('(' + keyText + ')');

            /* http://oe8wmyqo6.bkt.clouddn.com/是我的七牛云空间网址，keyText.key 是返回的图片文件名*/

            if (keyText.key) { //如果返回的有key，则上传成功
              picUrl = "http://omjbzg6gs.bkt.clouddn.com/" + keyText.key; //拼出上传后图片的url
              this.$emit("croped", picUrl);
            }
          }
        }.bind(this)
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", "UpToken " + "Fserv4YDApTS5cn-G5DGpVq0uB_SZmMi9rKTrOkh:03yksQ7mUwQ-Q1WkIyTxZdIVDcQ=:eyJzY29wZSI6Im15cGljIiwiZGVhZGxpbmUiOjE1MjQ1MDE2MTB9");
        xhr.send(pic);
      }
    }
  }
</script>
<style>
  .uploadqiniu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:120px;
    margin: 40px 0;
  }
  .uploadqiniu .g-core-image-upload-btn,.uploadqiniu form{
    height: 100% !important;
    width: 100% !important;
  }
  .uploadqiniu input[type='file']{
    cursor: pointer;
  }
  .uploadqiniu .image-mask .mask{
    background-color: rgba(0,0,0,0.6) !important;
  }
</style>
