<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Guarantor's Company Informations</p>
            <div>
                <span>Company Name</span>
                <q-input outlined v-model="family_step_three.company_name" placeholder="Company Name" :rules="[val => !!val || 'Company Name is required']" />
            </div>
            <div>
                <span>Department Name</span>
                <q-input outlined v-model="family_step_three.department_name" placeholder="Department Name" :rules="[val => !!val || 'Department Name is required']" />
            </div>
            <div>
                <span>Position</span>
                <q-input outlined v-model="family_step_three.position" placeholder="Position" :rules="[val => !!val || 'Position is required']" />
            </div>
            <p class="title_color">Guarantor's Company Address Informations</p>
            <div>
               <div style="display: flex">
                  <label style="width: 50%;">Region</label>
                  <label style="width: 50%;">City</label>
                  <label style="width: 50%;">Township</label>
               </div>
               <div style="display: flex">
                  <q-select
                     outlined
                     v-model="family_step_three.region"
                     :options="regions"
                     style="width: 50%;"
                  />
                  <q-select
                     outlined
                     v-model="family_step_three.city"
                     :options="cities"
                     style="width: 50%;margin: 0 5px;"
                  />
                  <q-select
                     outlined
                     v-model="family_step_three.township"
                     :options="townships"
                     style="width: 50%;"
                  />
               </div>
            </div>
            <div class="q-mb-md q-mt-xl">
               <span>Ward or Village?</span>
               <div class="q-mt-md">
                    <div class="q-mb-lg">
                        <q-radio dense v-model="family_step_three.ward_village_radio" val="Ward" label="Ward" style="width: 60%;" />
                        <q-radio dense v-model="family_step_three.ward_village_radio" val="Village" label="Village" />
                    </div>
                    <q-input outlined v-model="family_step_three.ward_village_input" placeholder="Ward/Village" :rules="[val => !!val || 'Ward/Village is required']" />
                    <q-input outlined v-model="family_step_three.street_address" placeholder="Street Address" :rules="[val => !!val || 'Street Address is required']" />
                    <q-input outlined v-model="family_step_three.building_no" placeholder="Building No" :rules="[val => !!val || 'Building No is required']" />
                    <q-input outlined v-model="family_step_three.floor" placeholder="Floor" :rules="[val => !!val || 'Floor is required']" />
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
        family_step_three: {
         company_name: "",
         department_name: "",
         position: "",
         region: "Choose",
         city: "Choose",
         township: "Choose",
         ward_village_radio: "Ward",
         ward_village_input: "",
         street_address: "",
         building_no: "",
         floor: "",
        }
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