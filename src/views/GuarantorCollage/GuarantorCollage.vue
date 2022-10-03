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
        <collage-step-one></collage-step-one>
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        :done="step > 2"
        title=""
      >
        <collage-step-two></collage-step-two>
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        :done="step > 3"
        title=""
      >
        <collage-step-three></collage-step-three>
      </q-step>

      <q-step
        :name="4"
        prefix="4"
        title=""
      >
        <collage-step-four></collage-step-four>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <div class="button_group text-center q-mt-md">
            <q-btn v-if="step != 4" @click="$refs.stepper.previous()" class="button_color" text-color="black" label="Back" no-caps />
            <q-btn v-if="step != 4" @click="$refs.stepper.next()" class="button_color" text-color="black" label="Next" no-caps />
            <q-btn v-else @click="goSaveInformation" class="submit_button" text-color="black" label="Submit" no-caps />
          </div>
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import CommonHeader from "@/components/Shared/CommonHeader.vue"
import CollageStepOne from "./CollageStepOne.vue"
import CollageStepTwo from "./CollageStepTwo.vue"
import CollageStepThree from "./CollageStepThree.vue"
import CollageStepFour from "./CollageStepFour.vue"
export default {
  components: {
    CommonHeader,
    CollageStepOne,
    CollageStepTwo,
    CollageStepThree,
    CollageStepFour
},
  data () {
    return {
      title: "Gurantar Colleague Information",
      step: 1,
    }
  },
  methods: {
    goSaveInformation() {
      this.$router.push({ name: "SaveInformation" })
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
.button_color {
  width: 40%;
  height: 50px;
  margin: 0 10px;
  border-radius: 8px;
  background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
.submit_button {
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
</style>
