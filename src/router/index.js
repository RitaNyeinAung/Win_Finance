import { createRouter, createWebHistory } from "vue-router";
import HPdocument from "../views/HPdocument.vue";

const routes = [
   {
      path: "/",
      name: "HPdocument",
      component: HPdocument,
   },
   {
      path: "/ApplicantInformation",
      name: "ApplicantInformation",
      component: () =>
         import("../views/ApplicantInformation/ApplicantInformation.vue"),
   },
   {
      path: "/OccupationInformation",
      name: "OccupationInformation",
      component: () =>
         import("../views/OccupationInformation/OccupationInformation.vue"),
   },
   {
      path: "/GuarantorFamily",
      name: "GuarantorFamily",
      component: () => import("../views/GuarantorFamily/GuarantorFamily.vue"),
   },
   {
      path: "/GuarantorCollage",
      name: "GuarantorCollage",
      component: () => import("../views/GuarantorCollage/GuarantorCollage.vue"),
   },
   {
      path: "/SaveInformation",
      name: "SaveInformation",
      component: () => import("../components/Shared/SaveInformation.vue"),
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
