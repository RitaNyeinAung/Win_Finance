<template>
      <common-header :title="title"></common-header>
      <div class="total_finish">
         <div class="q-py-md text-center text-white custom_font">
            <span>Total Finish</span>
            <br />
            <span>50/100</span>
         </div>
         <div class="q-pt-sm q-pb-md q-px-lg finish_progress">
            <div>
               <span class="text-white float-right">50%</span>
               <q-linear-progress rounded white size="8px" :value="total_finish_progress" />
            </div>
         </div>
      </div>
      <div class="q-pa-md">
         <div class="q-gutter-md">
            <div>
               <span class="text-negative q-pr-md">*</span>
               <span>Fullfill data to finance needs</span>
            </div>
            <div class="spacing row items-start">
               <q-card class="my_card q-mb-md" @click="toApplicantInformation">
                  <q-card-section>
                     <div>
                        <img class="image" src="../../src/assets/Applicant_Information.jpg" />
                     </div>
                     <div class="text-center">
                        <span class="text-green">25%</span>
                        <q-linear-progress rounded class="q-mt-sm q-mb-sm mini_progress" white size="6px" :value="applicant_percent" />
                        <span class="custom_size">Applicant Information</span>
                     </div>
                  </q-card-section>
               </q-card>
               
               <q-card class="my_card q-mb-md" @click="toOccupationInformation">
                  <q-card-section>
                     <div>
                        <img class="image" src="../../src/assets/Occupation_Information.jpg" />
                     </div>
                     <div class="text-center">
                        <span class="text-green">100%</span>
                        <q-linear-progress rounded class="q-mt-sm q-mb-sm mini_progress" white size="6px" :value="occupation_percent" />
                        <span class="custom_size">Occupation Information</span>
                     </div>
                  </q-card-section>
               </q-card>

               <q-card class="my_card q-mb-md" @click="toGuarantorFamily">
                  <q-card-section>
                     <div>
                        <img class="image" src="../../src/assets/Gurantar_family.jpg" />
                     </div>
                     <div class="text-center">
                        <span class="text-green">50%</span>
                        <q-linear-progress rounded class="q-mt-sm q-mb-sm mini_progress" white size="6px" :value="gurantar_percent" />
                        <span class="custom_size">Guarantor_Family</span>
                     </div>
                  </q-card-section>
               </q-card>

               <q-card class="my_card q-mb-md" @click="toGuarantorCollage">
                  <q-card-section>
                     <div>
                        <img class="image" src="../../src/assets/gurantar.jpg" />
                     </div>
                     <div class="text-center">
                        <span class="text-green">10%</span>
                        <q-linear-progress rounded class="q-mt-sm q-mb-sm mini_progress" white size="6px" :value="collage_percent" />
                        <span class="custom_size">Guarantor_Collage</span>
                     </div>
                  </q-card-section>
               </q-card>

               <q-card class="my_card q-mb-md" @click="toUploadDocument">
                  <q-card-section>
                     <div>
                        <img class="image" src="../../src/assets/Docunment_upload.jpg" />
                     </div>
                     <div class="text-center">
                        <span class="text-green">60%</span>
                        <q-linear-progress rounded class="q-mt-sm q-mb-sm mini_progress" white size="6px" :value="upload_percent" />
                        <span class="custom_size">Upload Document</span>
                     </div>
                  </q-card-section>
               </q-card>
            </div>

            <div>
               <q-checkbox v-model="check_agree" label="" class="custom_checkbox" />
               <span>I accept <u class="text-blue">terms and conditions</u> of Win Finance Company</span>
            </div>

            <div>
               <q-btn class="button_color" text-color="black" label="Apply" />
            </div>
         </div>
      </div>
</template>

<script>
import CommonHeader from "@/components/Shared/CommonHeader.vue"
export default {
   components: {
      CommonHeader
   },
   data() {
      return {
         title: "HP Document",
         total_finish_progress: 0.5,
         applicant_percent: 0.25,
         occupation_percent: 1,
         gurantar_percent: 0.5,
         collage_percent: 0.1,
         upload_percent: 0.6,
         check_agree: false,
      }
   },
   methods: {
      toApplicantInformation() {
         this.$router.push({ name: "ApplicantInformation" });
      },
      toOccupationInformation() {
         this.$router.push({ name: "OccupationInformation" });
      },
      toGuarantorFamily() {
         this.$router.push({ name: "GuarantorFamily" });
      },
      toGuarantorCollage() {
         this.$router.push({ name: "GuarantorCollage" });
      },
      toUploadDocument() {
         this.$router.push({ name: "UploadDocument" });
      }
   }
}
</script>

<style scoped>
.total_finish {
   padding-top: 55px;
   background-color: #005198;
}
.custom_font {
   font-size: 16px;
}
.finish_progress {
   background-color: rgba(255, 255, 255, 0.15);
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
}
.q-linear-progress {
    color: #008000;
    background: #fff;
}
.my_card {
   width: 47%;
   border-radius: 20px;
}
.spacing {
   justify-content: space-between !important;
}
.q-card__section--vert {
   padding: 10px !important;
}
.image {
   width: 100%;
}
.custom_size {
   font-size: 12px;
}
.mini_progress {
   width: 75%;
   margin: 2% 13%;
}
.custom_checkbox {
   margin-left: -10px;
}
.button_color {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 60px;
  background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
</style>