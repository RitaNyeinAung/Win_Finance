<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Employee Informations</p>
            <div class="q-mb-md q-mt-lg">
               <span>Years of Services</span>
               <div class="q-mt-md">
                  <div style="display: flex">
                     <label class="text-center q-mr-sm" style="width: 50%;">NRC Front</label>
                     <label class="text-center" style="width: 50%;">NRC Back</label>
                  </div>
                  <div style="display: flex">
                     <q-uploader
                        url="http://localhost:4444/upload"
                        style="max-width: 300px"
                     />
                     <q-uploader
                        url="http://localhost:4444/upload"
                        style="max-width: 300px"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
export default {
   data() {
      return {
      }
   },
}
</script>

<style>
.q-field__control {
    color: #ccc !important;
    height: 50px !important;
    max-width: 100%;
    outline: none;
    background-color: #fff;
}
.q-field--auto-height .q-field__control, .q-field--auto-height .q-field__native {
    min-height: 50px !important;
}
.q-field--outlined .q-field__control {
    border-radius: 4px;
    padding: 0 0 0 10px !important;
}
.items-start {
    align-items: flex-start;
    margin-top: 8px !important;
}
</style>

<style scoped>
.title_color {
   color: #005198;
   font-size: 16px;
}
</style>