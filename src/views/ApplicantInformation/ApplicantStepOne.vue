<template>
   <div class="q-pa-md">
    <div class="q-gutter-lg">
      <div>
        <span>Business Unit</span>
        <q-input outlined v-model="applicant_step_one.business_unit" placeholder="Auto" :rules="[val => !!val || 'Business Unit is required']" />
      </div>
      <div>
        <span>Branch Name</span>
        <q-input outlined v-model="applicant_step_one.branch_name" placeholder="Auto" :rules="[val => !!val || 'Branch Name is required']" />
      </div>
      <div>
        <span>Name</span>
        <q-input outlined v-model="applicant_step_one.full_name" placeholder="Full Name" :rules="[val => !!val || 'Full Name is required']" />
      </div>
      <div>
        <label>Your NRC Number</label>
         <div style="display: flex">
           <q-select
            outlined
            v-model="applicant_step_one.state_num"
            :options="states"
            style="width: 20%;"
          />
          <q-select
            outlined
            v-model="applicant_step_one.township_name"
            :options="townships"
            style="width: 30%;margin: 0 5px;"
          />
          <q-select
            outlined
            v-model="applicant_step_one.national"
            :options="nationals"
            style="width: 25%;"
          />
          <q-input outlined v-model="applicant_step_one.nrc_num" mask="######" style="width: 100%; margin-left: 5px;" :rules="[ val => val.length >= 6 || 'Please add minimum 6 numbers']" />
         </div>
      </div>
      <div>
        <span>Your Father Name</span>
        <q-input outlined v-model="applicant_step_one.father_name" placeholder="Your Father Name" :rules="[val => !!val || 'Father Name is required']" />
      </div>
      <div>
        <span>Phone Number</span>
        <q-input outlined v-model="applicant_step_one.phone_num" mask="###########" placeholder="Auto" :rules="[ val => val.length >= 7 && val.length <= 11 || 'Please add correct phone number']" />
      </div>
      <div>
        <span>Other Phone Number</span>
        <q-input outlined v-model="applicant_step_one.other_phone" mask="###########" placeholder="Auto" :rules="[ val => val.length >= 7 && val.length <= 11 || 'Please add correct phone number']" />
      </div>
      <div>
        <span>Date of Birth</span>
        <q-input outlined v-model="applicant_step_one.birth_date" type="date" :rules="[val => !!val || 'Birth Date is required']" />
      </div>
      <div>
        <span>Spouse Name or PIC Name</span>
        <div style="display: flex;">
          <q-radio dense v-model="applicant_step_one.gender_id" val="U" label="U" color="black" />
          <q-radio dense v-model="applicant_step_one.gender_id" val="Daw" label="Daw" color="black" style="margin: 0 33px" />
          <q-input outlined v-model="applicant_step_one.pic_name" style="width: 100%;" :rules="[val => !!val || 'PIC Name is required']" />
        </div>
      </div>
      <div>
        <label>Spouse of PIC's NRC Number</label>
         <div style="display: flex">
           <q-select
            outlined
            v-model="applicant_step_one.state_num"
            :options="states"
          />
          <q-select
            outlined
            v-model="applicant_step_one.township_name"
            :options="townships"
            style="margin: 0 5px;"
          />
          <q-select
            outlined
            v-model="applicant_step_one.national"
            :options="nationals"
          />
          <q-input outlined v-model="applicant_step_one.pic_nrc_num" mask="######" style="width: 100%; margin-left: 5px;" :rules="[ val => val.length >= 6 || 'Please add minimum 6 numbers']" />
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data () {
    return {
      states: [
        '1/', '2/', '3/', '4/', '5/'
      ],
      townships: [
        'MaAhNa', 'AhGaPa'
      ],
      nationals: [
        '(N)', 'Other'
      ],
      applicant_step_one: {
        business_unit: "",
        branch_name: "",
        full_name: "",
        state_num: "1/",
        township_name: "YaMaNa",
        national: "(N)",
        nrc_num: "",
        father_name: "",
        phone_num: "",
        other_phone: "",
        birth_date: "",
        pic_name: "",
        gender_id: "U",
        pic_nrc_num: "",
      },
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