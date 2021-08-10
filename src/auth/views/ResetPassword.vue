<template>
  <div
    class="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
      text-gray-900
      relative
    "
  >
    <div class="absolute right-0 bottom-0 left-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -100 1440 320">
        <path
          fill="#EDF2F7"
          fill-opacity="1"
          d="M0,96L26.7,112C53.3,128,107,160,160,181.3C213.3,203,267,213,320,192C373.3,171,427,117,480,122.7C533.3,128,587,192,640,229.3C693.3,267,747,277,800,245.3C853.3,213,907,139,960,138.7C1013.3,139,1067,213,1120,224C1173.3,235,1227,181,1280,154.7C1333.3,128,1387,128,1413,128L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>

    <div
      class="
        px-5
        py-6
        lg:px-6 lg:py-8
        w-full
        md:w-8/12
        lg:w-6/12
        xl:w-4/12
        relative
      "
    >
      <div class="mb-6 text-center">
        <h3 class="text-3xl inline-flex items-center">
          <svg
            class="w-6 h-6 inline-block text-indigo-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
              clip-rule="evenodd"
              fill-rule="evenodd"
            ></path>
          </svg>
          Comunidade Brilha
        </h3>
        <p class="text-gray-600">Não se preocupe, vamos cuidar de você!</p>
      </div>

      <div class="rounded border p-6 lg:p-10 shadow-sm bg-white">
        <form @submit.prevent="handleSubmit">
          <div class="block">
            <label for="email" class="text-gray-700">E-mail</label>
            <input
              id="email"
              class="
                appearance-none
                border
                rounded
                px-4
                py-3
                mt-1
                block
                w-full
                outline-none
                focus:border-blue-500
              "
              type="email"
              placeholder="Digite seu e-mail"
              v-model="form.email"
            />
            <div class="my-2" v-if="errors.error.errors?.email?.length > 0">
              <small
                class="text-red-700"
                v-for="(error, index) in errors.error.errors?.email"
                :key="index"
              >
                {{ error }}
              </small>
            </div>
          </div>
          <div class="block mt-4">
            <label for="password" class="text-gray-700">Senha</label>
            <input
              id="password"
              class="
                appearance-none
                border
                rounded
                px-4
                py-3
                mt-1
                block
                w-full
                outline-none
                focus:border-blue-500
              "
              type="password"
              placeholder="Digite sua senha"
              v-model="form.password"
            />
            <div class="my-2" v-if="errors.error.errors?.password?.length > 0">
              <small
                class="text-red-700"
                v-for="(error, index) in errors.error.errors?.password"
                :key="index"
              >
                {{ error }}
              </small>
            </div>
          </div>
          <div class="block mt-4">
            <label for="passwordConfirmation" class="text-gray-700">
              Confirme sua senha
            </label>
            <input
              id="passwordConfirmation"
              class="
                appearance-none
                border
                rounded
                px-4
                py-3
                mt-1
                block
                w-full
                outline-none
                focus:border-blue-500
              "
              type="password"
              placeholder="Confirme sua senha"
              v-model="form.passwordConfirmation"
            />
            <div
              class="my-2"
              v-if="errors.error.errors?.password_confirmation?.length > 0"
            >
              <small
                class="text-red-700"
                v-for="(error, index) in errors.error.errors
                  ?.password_confirmation"
                :key="index"
              >
                {{ error }}
              </small>
            </div>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="
                px-4
                py-3
                bg-blue-500
                hover:bg-blue-600
                focus:bg-blue-700
                active:bg-blue-700
                focus:outline-none focus:shadow-outline
                text-white
                rounded
                inline-flex
                items-center
                justify-center
                w-full
                leading-6
              "
              :class="{
                'transition ease-in-out duration-150 cursor-not-allowed':
                  loading,
              }"
            >
              <svg
                v-if="loading"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span v-if="!loading">Recuperar senha</span>
              <span v-else>Enviando...</span>
            </button>
          </div>
        </form>
        <div
          class="
            bg-red-100
            border border-red-400
            text-red-700
            px-4
            py-3
            rounded
            relative
            mt-6
          "
          role="alert"
          v-if="errors.error.message.length > 0"
        >
          <strong class="font-bold">Ooops! </strong>
          <span class="block sm:inline">Aconteceu alguma coisa.</span>
        </div>
        <div class="mt-6 text-center text-sm">
          <router-link
            class="
              text-gray-600
              hover:text-gray-700
              underline
              block
              md:inline-block
            "
            to="/entrar"
          >
            Retornar a página de login
          </router-link>
        </div>
      </div>
      <div class="text-xs text-gray-600 text-center mt-6">
        <span class="font-semibold">Comunidade Brilha</span> &copy; 2021 ·
        <a
          class="text-gray-600 hover:text-gray-700 underline"
          href="javascript:void(0)"
        >
          Terms &amp; Conditions
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { resetPassword } from "../services";

interface IForm {
  email: string;
  password: string;
  passwordConfirmation: string;
  token: string | string[];
}

interface IErrors {
  error: {
    message: string;
    errors?: unknown;
  };
}

export default defineComponent({
  name: "ResetPassword",
  setup() {
    const router = useRouter();
    const { params } = useRoute();
    const loading = ref<boolean>(false);
    const form = ref<IForm>({
      email: "",
      password: "",
      passwordConfirmation: "",
      token: params.resetToken,
    });
    const errors = ref<IErrors>({
      error: {
        message: "",
        errors: "",
      },
    });

    const handleSubmit = async (): Promise<void> => {
      try {
        loading.value = true;

        resetErrors();

        await resetPassword(form.value);

        await router.push({ name: "SignIn" });
      } catch (error) {
        errors.value.error.message = error.response.data.error.message || "";
        errors.value.error.errors = error.response.data.error.errors || "";
      } finally {
        loading.value = false;
      }
    };

    const resetErrors = () => {
      errors.value.error.message = "";
      errors.value.error.errors = "";
    };

    return {
      loading,
      form,
      errors,
      handleSubmit,
    };
  },
});
</script>
