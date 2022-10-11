<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Occupation's Company Informations</p>
            <div>
                <span>Company Name / Business Information</span>
                <q-input 
                  outlined 
                  v-model="occupation_step_one.business_information" 
                  @change="countValue($event)"
                  :rules="[val => !!val || 'Company Name / Business Information is required']" 
               />
            </div>
            <p class="title_color">Occupation's Company Address Informations</p>
            <div>
               <div style="display: flex">
                  <label style="width: 50%;">Region</label>
                  <label style="width: 50%;">City</label>
                  <label style="width: 50%;">Township</label>
               </div>
               <div style="display: flex">
                  <q-select
                     outlined
                     v-model="occupation_step_one.region"
                     :options="regions"
                     style="width: 50%;"
                  />
                  <q-select
                     outlined
                     v-model="occupation_step_one.city"
                     :options="cities"
                     style="width: 50%;margin: 0 5px;"
                  />
                  <q-select
                     outlined
                     v-model="occupation_step_one.township"
                     :options="townships"
                     style="width: 50%;"
                  />
               </div>
            </div>
            <div class="q-mt-md">
                <q-input 
                  outlined 
                  v-model="occupation_step_one.street_address" 
                  @change="countValue($event)"
                  placeholder="Street Address" 
                  :rules="[val => !!val || 'Street Address is required']" 
               />
                <q-input 
                  outlined 
                  v-model="occupation_step_one.building_no" 
                  @change="countValue($event)"
                  placeholder="Building No" 
                  :rules="[val => !!val || 'Building No is required']" 
               />
                <q-input 
                  outlined 
                  v-model="occupation_step_one.floor" 
                  @change="countValue($event)"
                  placeholder="Floor" 
                  :rules="[val => !!val || 'Floor is required']" 
               />
            </div>
            <div>
                <span>Occupation</span>
                <q-input 
                  outlined 
                  v-model="occupation_step_one.occupation" 
                  @change="countValue($event)"
                  placeholder="Auto" 
                  :rules="[val => !!val || 'Occupation is required']" 
               />
            </div>
            <div>
                <span>Company HR Name</span>
                <q-input 
                  outlined 
                  v-model="occupation_step_one.HR_name" 
                  @change="countValue($event)"
                  placeholder="HR Name" 
                  :rules="[val => !!val || 'HR Name is required']" 
               />
            </div>
            <div>
                <span>HR Phone</span>
                <q-input 
                  outlined 
                  v-model="occupation_step_one.HR_phone" 
                  @change="countValue($event)"
                  mask="###########" 
                  placeholder="09-" 
                  :rules="[ val => val.length >= 7 && val.length <= 11 || 'Please add correct phone number']" 
               />
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
         occupation_step_one: {
            business_information: "",
            region: "Choose",
            city: "Choose",
            township: "Choose",
            street_address: "",
            building_no: "",
            floor: "",
            occupation: "",
            HR_name: "",
            HR_phone: "",
         }
      }
   },
   methods: {
      countValue(value) {
         if(value == "") {
         this.count -= 1;
         this.$emit('stepOneCount', this.count);
         } else {
         this.count += 1;
         this.$emit('stepOneCount', this.count);
         }
      }
  }
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