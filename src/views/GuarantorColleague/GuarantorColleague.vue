<template>
  <common-header :title="title"></common-header>
  <div>
    <q-stepper
      v-model="step"
      ref="stepper"
      contracted
      color="primary"
      animated
    >
      <q-step
        :name="1"
        prefix="1"
        :done="step > 1"
        title=""
      >
        <colleague-step-one @stepOneCount="stepOneCount"></colleague-step-one>
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        :done="step > 2"
        title=""
      >
        <colleague-step-two @stepTwoCount="stepTwoCount"></colleague-step-two>
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        :done="step > 3"
        title=""
      >
        <colleague-step-three @stepThreeCount="stepThreeCount"></colleague-step-three>
      </q-step>

      <q-step
        :name="4"
        prefix="4"
        title=""
      >
        <colleague-step-four @stepFourCount="stepFourCount"></colleague-step-four>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div class="button_group text-center q-mt-md">
            <q-btn 
              v-if="step > 1" 
              @click="$refs.stepper.previous()" 
              class="custom_button" 
              text-color="black" 
              label="Back" 
              no-caps 
            />

            <q-btn 
              v-if="step != 4" 
              @click="$refs.stepper.next()" 
              class="custom_button" 
              text-color="black" 
              label="Next" 
              no-caps 
            />

            <q-btn 
              v-if="step === 4" 
              @click="goSaveInformation" 
              class="custom_button" 
              text-color="black" 
              label="Submit" 
              no-caps 
            />
          </div>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import CommonHeader from "@/components/Shared/CommonHeader.vue"
import ColleagueStepOne from "./ColleagueStepOne.vue"
import ColleagueStepTwo from "./ColleagueStepTwo.vue"
import ColleagueStepThree from "./ColleagueStepThree.vue"
import ColleagueStepFour from "./ColleagueStepFour.vue"
export default {
  components: {
    CommonHeader,
    ColleagueStepOne,
    ColleagueStepTwo,
    ColleagueStepThree,
    ColleagueStepFour
},
  data () {
    return {
      title: "Guarantor Colleague Information",
      step: 1,
      one_count: "",
      two_count: "",
      three_count: "",
      four_count: "",
    }
  },
  methods: {
    stepOneCount(oneCount) {
      this.one_count = oneCount;
      console.log(this.one_count, "step one count");
    },
    stepTwoCount(twoCount) {
      this.two_count = this.one_count + twoCount;
      console.log(this.two_count, "step two count");
    },
    stepThreeCount(threeCount) {
      this.three_count = this.two_count + threeCount;
      console.log(this.three_count, "step three count");
    },
    stepFourCount(fourCount) {
      this.four_count = this.three_count + fourCount;
      console.log(this.four_count, "step four count");
    },
    goSaveInformation() {
      this.$router.push({ name: "SaveInformation" });
      console.log(this.calculatePercentage);
    }
  },
  computed: {
    calculatePercentage() {
      return (this.four_count/22)*100;
    }
  }
}
</script>

<style>
.items-stretch {
    align-items: stretch;
    background-color: #005198;
}
.q-stepper {
    box-shadow: 0 0 !important;
    border-radius: 0px !important;
    background: #f9f9f9;
    padding-top: 55px;
}
.q-stepper__tab--active, .q-stepper__tab--done {
    color: #E49F25 !important;
}
.q-stepper__dot span {
    color: #6c6a6a !important;
}
.q-stepper__dot span .material-icons  {
    color: #fff !important;
}
.q-stepper__tab {
    padding: 8px 24px;
    font-size: 14px;
    color: #f9f9f9;
    flex-direction: row;
}
.q-stepper--horizontal .q-stepper__line:before, .q-stepper--horizontal .q-stepper__line:after {
  position: absolute;
  top: 50%;
  height: 1px;
  width: 100vw;
  border: 1px dotted #fff;
}
.q-stepper--horizontal .q-stepper__step-inner {
    padding: 10px 0 !important;
}
</style>

<style scoped>
.button_group {
  margin-bottom: 60px;
}
.custom_button {
  width: 40%;
  height: 50px;
  margin: 0 10px;
  border-radius: 8px;
  background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
</style>
