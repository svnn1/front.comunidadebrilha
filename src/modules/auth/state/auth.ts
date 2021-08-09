import { computed } from "vue";
import { useStorage } from "@vueuse/core";
import { JWT_TOKEN } from "@/modules/support/helpers/constants";

interface IAuthState {
  access_token: string;
}

export const auth = useStorage<IAuthState>(JWT_TOKEN, {
  access_token: "",
});

export const setAuth = (state: IAuthState): void => {
  auth.value = state;
};

export const expiresAuth = (): void => {
  auth.value.access_token = "";
};

export const userAuthenticated = computed<boolean>(
  () => !!auth.value.access_token
);
