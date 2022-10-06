<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Employee Informations</p>
            <div class="q-mt-lg">
               <div style="display: flex">
                  <label class="text-center q-mb-sm" style="width: 50%;">NRC Front</label>
                  <label class="text-center q-mb-sm" style="width: 50%;">NRC Back</label>
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
                  <label class="text-center q-mb-sm" style="width: 50%;">Employee ID</label>
                  <label class="text-center q-mb-sm" style="width: 50%;">HR or Company Recommendation</label>
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
                  <span class="text-center q-my-sm" style="width: 50%; font-size: 12px;">(Experience, Salary, Position must be included)</span>
               </div>
            </div>

            <div class="q-mt-lg">
               <div style="display: flex">
                  <label class="text-center q-mb-sm" style="width: 50%;">Electricity Bill or City Council Bill</label>
                  <label class="text-center q-mb-sm" style="width: 50%;">Ward Recommendation Letter</label>
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
                  <span class="text-center q-my-sm" style="width: 50%; font-size: 12px;">(Recent Bill as Proof of address)</span>
               </div>
            </div>

            <div class="q-mt-lg">
               <div style="display: flex">
                  <label class="text-center q-mb-sm" style="width: 50%;">Original Documents Of Collateral</label>
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
.q-uploader__header {
    position: relative;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-color: #fff !important;
    color: #333 !important;
}
.q-uploader__header-content {
    padding: 0 10px !important;
    /* align-items: center !important; */
}
.q-uploader__subtitle {
    font-size: 12px;
    line-height: 18px;
    display: none !important;
}
.q-uploader__title {
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    word-break: break-word;
    display: none !important;
}
.q-uploader__list {
    position: relative;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    padding: 0 !important;
    min-height: 100px;
    flex: 1 1 auto;
}
.q-uploader__file--img {
    color: #fff;
    height: 130px !important;
    min-width: 0 !important;
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
}
.q-uploader__header .q-btn:first-child i.q-icon.notranslate.material-icons {
    display: none !important;
}
.q-uploader__file--img .q-uploader__file-header {
    padding-bottom: 24px;
    background: none;
}
i.q-icon.notranslate.material-icons {
    color: #333;
}
</style>

<style scoped>
.title_color {
   color: #005198;
   font-size: 16px;
}
</style>