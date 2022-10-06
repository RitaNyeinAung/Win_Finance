<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Guarantor_Colleage Informations</p>
            <div class="q-mt-lg">
               <div style="display: flex">
                  <label class="text-center q-mb-sm" style="width: 50%;">Copy of NRC Front</label>
                  <label class="text-center q-mb-sm" style="width: 50%;">Copy of NRC Back</label>
               </div>
               <div style="display: flex; justify-content: space-between;">
                  <q-uploader
                     url="http://localhost:4444/upload"
                     style="width: 47%"
                     auto-upload
                  />
                  <q-uploader
                     url="http://localhost:4444/upload"
                     style="width: 47%"
                     auto-upload
                  />
               </div>
            </div>

            <div class="q-mt-lg">
               <div style="display: flex">
                  <label class="text-center q-mb-sm" style="width: 50%;">Copy of Census</label>
                  <label class="text-center q-mb-sm" style="width: 50%;">Selfie Photo</label>
               </div>
               <div style="display: flex; justify-content: space-between;">
                  <q-uploader
                     url="http://localhost:4444/upload"
                     style="width: 47%"
                     auto-upload
                  />
                  <q-uploader
                     url="http://localhost:4444/upload"
                     style="width: 47%"
                     auto-upload
                  />
               </div>
            </div>

            <div class="q-mt-lg">
               <div style="display: flex">
                  <label class="text-center q-mb-sm" style="width: 50%;">Ward Recommendation Letter</label>
                  <label class="text-center q-mb-sm" style="width: 50%;">Photo of Current Home</label>
               </div>
               <div style="display: flex; justify-content: space-between;">
                  <q-uploader
                     url="http://localhost:4444/upload"
                     style="width: 47%"
                     auto-upload
                  />
                  <q-uploader
                     url="http://localhost:4444/upload"
                     style="width: 47%"
                     auto-upload
                  />
               </div>
               <div style="display: flex">
                  <span class="text-center q-my-sm" style="width: 50%; font-size: 12px;"></span>
                  <span class="text-center q-my-sm" style="width: 50%; font-size: 12px;">(e.g; House, Land, other surrounding photo)</span>
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

<style scoped>
.title_color {
   color: #005198;
   font-size: 16px;
}
</style>