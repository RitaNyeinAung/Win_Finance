<template>
   <div class="header q-pl-sm">
      <q-icon name="west" @click="goBack" style="font-size: 25px" />
      <span class="title q-pl-md">{{ title }}</span>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   },
   props: {
      title: null,
   },
   methods: {
      goBack() {
         this.$router.go(-1);
      }
   }
}
</script>

<style scoped>
.header {
   width: 100%;
   height: 55px;
   position: fixed;
   z-index: 1;
   padding-top: 17px;
   background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
.title {
   font-size: 16px;
   font-weight: bold;
}
</style>