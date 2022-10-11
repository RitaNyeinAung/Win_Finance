<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Emergency Contact</p>
            <div>
               <span>Name</span>
               <q-input 
                  outlined 
                  v-model="applicant_step_four.emergency_name" 
                  @change="countValue($event)" 
                  placeholder="Full Name" 
                  :rules="[val => !!val || 'Name is required']" 
               />
            </div>
            <div>
               <span>Phone</span>
               <q-input 
                  outlined 
                  v-model="applicant_step_four.emergency_phone_num" 
                  @change="countValue($event)" 
                  mask="###########" 
                  placeholder="09-" 
                  :rules="[ val => val.length >= 7 && val.length <= 11 || 'Please add correct phone number']" 
               />
            </div>
            <div>
               <span>Mobile</span>
               <q-input 
                  outlined 
                  v-model="applicant_step_four.emergency_mobile" 
                  @change="countValue($event)" 
                  mask="###########" 
                  placeholder="09-" 
                  :rules="[ val => val.length >= 7 && val.length <= 11 || 'Please add correct phone number']" 
               />
            </div>
            <p class="title_color">Address Of Contact Person</p>
            <div>
               <div style="display: flex">
                  <label style="width: 50%;">Region</label>
                  <label style="width: 50%;">City</label>
                  <label style="width: 50%;">Township</label>
               </div>
               <div style="display: flex">
                  <q-select
                     outlined
                     v-model="applicant_step_four.region"
                     :options="regions"
                     style="width: 50%;"
                  />
                  <q-select
                     outlined
                     v-model="applicant_step_four.city"
                     :options="cities"
                     style="width: 50%;margin: 0 5px;"
                  />
                  <q-select
                     outlined
                     v-model="applicant_step_four.township"
                     :options="townships"
                     style="width: 50%;"
                  />
               </div>
            </div>
            <div class="q-mb-xl q-mt-xl">
               <span>Ward or Village?</span>
               <div class="q-mt-md">
                  <div class="q-mb-lg">
                     <q-radio dense v-model="applicant_step_four.ward_village_radio" val="Ward" label="Ward" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_four.ward_village_radio" val="Village" label="Village" />
                  </div>
                  <q-input 
                     outlined 
                     v-model="applicant_step_four.ward_village_input" 
                     @change="countValue($event)" 
                     placeholder="Ward/Village" 
                     :rules="[val => !!val || 'Ward/Village is required']" 
                  />
                  <q-input 
                     outlined 
                     v-model="applicant_step_four.street_address" 
                     @change="countValue($event)" 
                     placeholder="Street Address" 
                     :rules="[val => !!val || 'Street Address is required']" 
                  />
                  <q-input 
                     outlined 
                     v-model="applicant_step_four.building_no" 
                     @change="countValue($event)" 
                     placeholder="Building No" 
                     :rules="[val => !!val || 'Building No is required']" 
                  />
                  <q-input 
                     outlined 
                     v-model="applicant_step_four.floor" 
                     @change="countValue($event)" 
                     placeholder="Floor" 
                     :rules="[val => !!val || 'Floor is required']" 
                  />
               </div>
            </div>
            <div class="q-mb-md">
               <span>Relationship With Applicant</span>
               <div class="q-mt-md">
                  <div>
                     <q-radio dense v-model="applicant_step_four.relationship_applicant" val="Parent" label="Parent" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_four.relationship_applicant" val="Offspring" label="Offspring" />
                  </div>
                  <div class="q-mt-md">
                     <q-radio dense v-model="applicant_step_four.relationship_applicant" val="Spouse" label="Spouse" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_four.relationship_applicant" val="Friends" label="Friends" />
                  </div>
                  <div class="q-mt-md">
                     <q-radio dense v-model="applicant_step_four.relationship_applicant" val="Sbiling" label="Sbiling" style="width: 60%;" />
                     <q-radio dense v-model="applicant_step_four.relationship_applicant" val="Relative" label="Relative" />
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
         regions: [
            'Yangon', 'Mandalay', 'Naypitaw'
         ],
         cities: [
            'Yangon', 'Mandalay', 'Naypitaw'
         ],
         townships: [
            'Yangon', 'Mandalay', 'Naypitaw'
         ],
         count: 0,
         applicant_step_four: {
            emergency_name: "",
            emergency_phone_num: "",
            emergency_mobile: "",
            region: "Choose",
            city: "Choose",
            township: "Choose",
            ward_village_radio: "Ward",
            ward_village_input: "",
            street_address: "",
            building_no: "",
            floor: "",
            relationship_applicant: "Parent",
         }
      }
   },
   methods: {
      countValue(value) {
         if(value == "") {
         this.count -= 1;
         } else {
         this.count += 1;
         }
      }
  }
}
</script>

<style scoped>
.title_color {
   color: #005198;
   font-size: 16px;
}
</style>