<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Relationship with Applicant</p>
            <div class="q-mb-lg">
               <div class="q-mt-sm q-ml-sm">
                    <div>
                        <q-radio dense v-model="colleague_step_two.relationship_applicant" val="Parent" label="Parent" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.relationship_applicant" val="Friend" label="Friend" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="colleague_step_two.relationship_applicant" val="Spouse" label="Spouse" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.relationship_applicant" val="Alone" label="Alone" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="colleague_step_two.relationship_applicant" val="Relative" label="Relative" />
                    </div>
               </div>
            </div>
            <p class="title_color">Guarantor's Address Informations</p>
            <div>
                <div style="display: flex">
                    <label style="width: 50%;">Region</label>
                    <label style="width: 50%;">City</label>
                    <label style="width: 50%;">Township</label>
                </div>
               <div style="display: flex">
                    <q-select
                        outlined
                        v-model="colleague_step_two.region"
                        :options="regions"
                        style="width: 50%;"
                    />
                    <q-select
                        outlined
                        v-model="colleague_step_two.city"
                        :options="cities"
                        style="width: 50%;margin: 0 5px;"
                    />
                    <q-select
                        outlined
                        v-model="colleague_step_two.township"
                        :options="townships"
                        style="width: 50%;"
                    />
               </div>
            </div>
            <div class="q-mb-xl q-mt-xl">
               <span>Ward or Village?</span>
               <div class="q-mt-md">
                    <div class="q-mb-lg">
                        <q-radio dense v-model="colleague_step_two.ward_village_radio" val="Ward" label="Ward" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.ward_village_radio" val="Village" label="Village" />
                    </div>
                    <q-input outlined v-model="colleague_step_two.ward_village_input" placeholder="Ward/Village" :rules="[val => !!val || 'Ward/Village is required']" />
                    <q-input outlined v-model="colleague_step_two.street_address" placeholder="Street Address" :rules="[val => !!val || 'Street Address is required']" />
                    <q-input outlined v-model="colleague_step_two.building_no" placeholder="Building No" :rules="[val => !!val || 'Building No is required']" />
                    <q-input outlined v-model="colleague_step_two.floor" placeholder="Floor" :rules="[val => !!val || 'Floor is required']" />
                </div>
            </div>
            <div class="q-mb-xl">
               <span>Type of Residence</span>
               <div class="q-mt-md">
                    <div>
                        <q-radio dense v-model="colleague_step_two.residence_type" val="Owner" label="Owner" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.residence_type" val="Rental" label="Rental" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="colleague_step_two.residence_type" val="Parental" label="Parental" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.residence_type" val="Hostel" label="Hostel" />
                    </div>
               </div>
            </div>
            <div class="q-mb-xl">
               <span>Living With</span>
               <div class="q-mt-md">
                    <div>
                        <q-radio dense v-model="colleague_step_two.living_with" val="Parent" label="Parent" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.living_with" val="Friend" label="Friend" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="colleague_step_two.living_with" val="Spouse" label="Spouse" style="width: 60%;" />
                        <q-radio dense v-model="colleague_step_two.living_with" val="Alone" label="Alone" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="colleague_step_two.living_with" val="Relative" label="Relative" />
                    </div>
               </div>
            </div>
            <div class="q-mb-md q-mt-xl">
               <span>Years of Stay</span>
               <div class="q-mt-md">
                    <div style="display: flex">
                        <label class="q-mr-sm" style="width: 50%;">Years</label>
                        <label style="width: 50%;">Months</label>
                    </div>
                    <div style="display: flex">
                        <q-input class="q-mr-sm" outlined v-model="colleague_step_two.years_stay" placeholder="..." style="width: 50%;" :rules="[val => !!val || 'Year is required']" />
                        <q-input outlined v-model="colleague_step_two.months_stay" placeholder="..." style="width: 50%;" :rules="[val => !!val || 'Month is required']" />
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
        colleague_step_two: {
            relationship_applicant: "Parent",
            region: "Choose",
            city: "Choose",
            township: "Choose",
            ward_village_radio: "Ward",
            ward_village_input: "",
            street_address: "",
            building_no: "",
            floor: "",
            residence_type: "Owner",
            living_with: "Parent",
            years_stay: "",
            months_stay: "",
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