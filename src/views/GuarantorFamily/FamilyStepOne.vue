<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Guarantor's Personal Informations</p>
            <div>
                <span>Name</span>
                <q-input outlined v-model="family_step_one.guarantor_name" placeholder="Name" :rules="[val => !!val || 'Name is required']" />
            </div>
            <div>
                <span>Phone Number</span>
                <q-input outlined v-model="family_step_one.guarantor_phone" mask="###########" placeholder="09-" :rules="[ val => val.length >= 7 && val.length <= 11 || 'Please add correct phone number']" />
            </div>
            <div>
                <span>Date of Birth</span>
                <q-input outlined v-model="family_step_one.guarantor_birth_date" type="date" :rules="[val => !!val || 'Birth Date is required']" />
            </div>
            <div>
                <label>NRC Number</label>
                <div style="display: flex">
                <q-select
                    outlined
                    v-model="family_step_one.state_num"
                    :options="states"
                    style="width: 20%;"
                />
                <q-select
                    outlined
                    v-model="family_step_one.township_name"
                    :options="townships"
                    style="width: 30%;margin: 0 5px;"
                />
                <q-select
                    outlined
                    v-model="family_step_one.national"
                    :options="nationals"
                    style="width: 25%;"
                />
                <q-input outlined v-model="family_step_one.nrc_num" mask="######" style="width: 100%; margin-left: 5px;" :rules="[ val => val.length >= 6 || 'Please add minimum 6 numbers']" />
                </div>
            </div>
            <div class="q-mb-lg">
               <span>Nationality</span>
               <div class="q-mt-sm q-ml-sm">
                    <div>
                        <q-radio dense v-model="family_step_one.nationality" val="Myanmar" label="Myanmar" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="family_step_one.nationality" val="Other" label="Other" />
                    </div>
               </div>
            </div>
            <div class="q-mb-lg">
               <span>Gender</span>
               <div class="q-mt-sm q-ml-sm">
                    <div>
                        <q-radio dense v-model="family_step_one.gender" val="Male" label="Male" style="width: 60%;" />
                        <q-radio dense v-model="family_step_one.gender" val="Other" label="Other" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="family_step_one.gender" val="Female" label="Female" />
                    </div>
               </div>
            </div>
            <div class="q-mb-lg">
               <span>Marital Status</span>
               <div class="q-mt-sm q-ml-sm">
                    <div>
                        <q-radio dense v-model="family_step_one.marital_status" val="Single" label="Single" style="width: 60%;" />
                        <q-radio dense v-model="family_step_one.marital_status" val="Widowed" label="Widowed" />
                    </div>
                    <div class="q-mt-md">
                        <q-radio dense v-model="family_step_one.marital_status" val="Married" label="Married" style="width: 60%;" />
                        <q-radio dense v-model="family_step_one.marital_status" val="Divorced" label="Divorced" />
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
        states: [
            '1/', '2/', '3/', '4/', '5/'
        ],
        townships: [
            'MaAhNa', 'AhGaPa'
        ],
        nationals: [
            '(N)', 'Other'
        ],
        family_step_one: {
            guarantor_name: "",
            guarantor_phone: "",
            guarantor_birth_date: "",
            state_num: "1/",
            township_name: "YaMaNa",
            national: "(N)",
            nrc_num: "",
            nationality: "Myanmar",
            gender: "Male",
            marital_status: "Single",
        }
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
.q-radio__inner--truthy {
    color: #E49F25 !important;
}
</style>

<style scoped>
.title_color {
   color: #005198;
   font-size: 16px;
}
</style>