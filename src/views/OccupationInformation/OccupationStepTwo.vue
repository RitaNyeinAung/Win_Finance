<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <p class="title_color">Occupation's Personal Informations</p>
            <div>
                <span>Department Name</span>
                <q-input outlined v-model="department_name" placeholder="Department Name" :rules="[val => !!val || 'Department Name is required']" />
            </div>
            <div>
                <span>Position</span>
                <q-input outlined v-model="position" placeholder="-" :rules="[val => !!val || 'Position is required']" />
            </div>
            <div class="q-mb-md q-mt-lg">
               <span>Years of Services</span>
               <div class="q-mt-md">
                  <div style="display: flex">
                     <label class="q-mr-sm" style="width: 50%;">Years</label>
                     <label style="width: 50%;">Months</label>
                  </div>
                  <div style="display: flex">
                     <q-input class="q-mr-sm" outlined v-model="years_service" placeholder="..." style="width: 50%;" :rules="[val => !!val || 'Year is required']" />
                     <q-input outlined v-model="months_service" placeholder="..." style="width: 50%;" :rules="[val => !!val || 'Month is required']" />
                  </div>
               </div>
            </div>
            <div>
                <span>Monthly Basic Income</span>
                <q-input outlined v-model="monthly_basic_income" placeholder="-" :rules="[val => !!val || 'Monthly Basic Income is required']" />
            </div>
            <div>
                <span>Additional Income</span>
                <q-input outlined v-model="additional_income" placeholder="-" :rules="[val => !!val || 'Additional Income is required']" />
            </div>
            <div>
                <span>Total Income</span>
                <q-input outlined v-model="total_income" placeholder="-" :rules="[val => !!val || 'Total Income is required']" />
            </div>
            <div>
                <span>Salary Date</span>
                <q-input outlined v-model="salary_date" type="date" :rules="[val => !!val || 'Salary Date is required']" />
            </div>
         </div>
      </div>
</template>

<script>
export default {
   data() {
      return {
        department_name: "",
         position: "",
         years_service: "",
         months_service: "",
         monthly_basic_income: "",
         additional_income: "",
         total_income: "",
         salary_date: "",
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

<style scoped>
.title_color {
   color: #005198;
   font-size: 16px;
}
</style>