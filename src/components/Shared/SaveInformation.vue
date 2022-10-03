<template>
   <div>
      <div class="save_information q-pl-sm">
        <q-icon name="west" @click="goBack" style="font-size: 25px" />
        <span class="title q-pl-md">Save Information</span>
      </div>
      <div>
         <img class="image" src="../../../src/assets/Document_Save.jpg" />
      </div>
      <div class="text-center q-mt-xl">
        <p>Your information is successfully saved!</p>
        <div>
            <q-btn @click="goHPdocument" class="button_color" text-color="black" label="Done" no-caps />
        </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   },
   methods: {
      goBack() {
         this.$router.push({ name: "ApplicantInformation" });
      },
      goHPdocument() {
        this.$router.push({ name: "HPdocument"} );
      }
   }
}
</script>

<style scoped>
.save_information {
   width: 100%;
   height: 55px;
   position: fixed;
   z-index: 1;
   padding-top: 17px;
   background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
.title {
   font-size: 16px;
   font-weight: bold;
}
.image {
   width: 100%;
   margin-top: 55px;
}
.button_color {
  width: 40%;
  height: 50px;
  border-radius: 8px;
  margin-top: 50px;
  background: linear-gradient(120.26deg, #F4D9A9 35.44%, #CBCBBC 75.7%);
}
</style>