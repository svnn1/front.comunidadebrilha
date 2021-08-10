import { RouteRecordRaw } from "vue-router";

import SignIn from "../views/SignIn.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

const authRoutes: Array<RouteRecordRaw> = [
  {
    path: "/entrar",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/esqueceu-senha",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/recuperar-senha/:resetToken",
    name: "ResetPassword",
    component: ResetPassword,
  },
];

export default authRoutes;
