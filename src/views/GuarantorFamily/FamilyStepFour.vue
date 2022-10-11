<template>
      <div class="q-pa-md">
         <div class="q-gutter-lg">
            <div class="q-mb-md q-mt-lg">
               <span>Years of Services</span>
               <div class="q-mt-md">
                  <div style="display: flex">
                     <label class="q-mr-sm" style="width: 50%;">Years</label>
                     <label style="width: 50%;">Months</label>
                  </div>
                  <div style="display: flex">
                     <q-input 
                        outlined 
                        class="q-mr-sm" 
                        v-model="family_step_four.years_service" 
                        @change="countValue($event)"
                        placeholder="..." 
                        style="width: 50%;" 
                        :rules="[val => !!val || 'Year is required']" 
                     />
                     <q-input 
                        outlined 
                        v-model="family_step_four.months_service" 
                        @change="countValue($event)"
                        placeholder="..." 
                        style="width: 50%;" 
                        :rules="[val => !!val || 'Month is required']" 
                     />
                  </div>
               </div>
            </div>
            <div>
                <span>Monthly Basic Income</span>
                <q-input 
                  outlined 
                  v-model="family_step_four.monthly_basic_income" 
                  @change="countValue($event)"
                  placeholder="Monthly Basic Income" 
                  :rules="[val => !!val || 'Monthly Basic Income is required']" 
               />
            </div>
            <div>
                <span>Additional Income</span>
                <q-input 
                  outlined 
                  v-model="family_step_four.additional_income" 
                  @change="countValue($event)"
                  placeholder="Additional Income" 
                  :rules="[val => !!val || 'Additional Income is required']" 
               />
            </div>
            <div>
                <span>Total Income</span>
                <q-input 
                  outlined 
                  v-model="family_step_four.total_income" 
                  @change="countValue($event)"
                  placeholder="Total Income" 
                  :rules="[val => !!val || 'Total Income is required']" 
               />
            </div>
         </div>
      </div>
</template>

<script>
export default {
   data() {
      return {
         count: 0,
         family_step_four: {
            years_service: "",
            months_service: "",
            monthly_basic_income: "",
            additional_income: "",
            total_income: "",
         }
      }
   },
   methods: {
      countValue(value) {
         if(value == "") {
            this.count -= 1;
            this.$emit('stepFourCount', this.count);
         } else {
            this.count += 1;
            this.$emit('stepFourCount', this.count);
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