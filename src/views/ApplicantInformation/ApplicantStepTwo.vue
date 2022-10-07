<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <div class="q-mb-lg">
               <span>Nationality</span>
               <div class="q-mt-sm q-ml-sm">
                  <div>
                     <q-radio dense v-model="applicant_step_two.nationality" val="Myanmar" label="Myanmar" />
                  </div>
                  <div class="q-mt-md">
                     <q-radio dense v-model="applicant_step_two.nationality" val="Other" label="Other" />
                  </div>
               </div>
            </div>
            <div class="q-mb-lg">
               <span>Gender</span>
               <div class="q-mt-sm q-ml-sm">
                  <div>
                     <q-radio dense v-model="applicant_step_two.gender" val="Male" label="Male" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_two.gender" val="Other" label="Other" />
                  </div>
                  <div class="q-mt-md">
                     <q-radio dense v-model="applicant_step_two.gender" val="Female" label="Female" />
                  </div>
               </div>
            </div>
            <div class="q-mb-lg">
               <span>Marital Status</span>
               <div class="q-mt-sm q-ml-sm">
                  <div>
                     <q-radio dense v-model="applicant_step_two.marital_status" val="Single" label="Single" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_two.marital_status" val="Widowed" label="Widowed" />
                  </div>
                  <div class="q-mt-md">
                     <q-radio dense v-model="applicant_step_two.marital_status" val="Married" label="Married" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_two.marital_status" val="Divorced" label="Divorced" />
                  </div>
               </div>
            </div>
            <div>
               <span>Do you have bank account?</span>
               <div class="q-mt-sm q-ml-sm">
                  <div>
                     <q-radio dense v-model="applicant_step_two.is_bank_acc" val="Yes" label="Yes" />
                  </div>
                  <div class="q-mt-md">
                     <q-radio dense v-model="applicant_step_two.is_bank_acc" val="No" label="No" />
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
         applicant_step_two: {
            nationality: "Myanmar",
            gender: "Male",
            marital_status: "Single",
            is_bank_acc: "Yes",
         }
      }
   },
}
</script>

<style>
.q-radio__inner--truthy {
    color: #E49F25 !important;
}
</style>