<template>
  <div class="flex justify-center items-center h-screen bg-gray-200 px-6">
    <div class="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
      <div class="flex justify-center items-center">
        <span class="text-gray-700 font-semibold text-2xl">
          INCOME | IMOBANCO
        </span>
      </div>

      <form class="mt-4" @submit.prevent="login">
        <label class="block">
          <span class="text-gray-700 text-sm">Email</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-lg focus:border-blue-600"
            v-model="email"
          />
        </label>

        <label class="block mt-3">
          <span class="text-gray-700 text-sm">Password</span>
          <input
            type="password"
            class="mt-1 block w-full rounded-lg focus:border-blue-600"
            v-model="password"
          />
        </label>

        <div class="flex justify-between items-center mt-4">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox text-blue-600" />
              <span class="mx-2 text-gray-600 text-sm">Lembrar</span>
            </label>
          </div>

          <div>
            <a
              class="block text-sm fontme text-blue-700 hover:underline"
              href="#"
            >
              Esqueceu sua senha?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="
              py-2
              px-4
              text-center
              bg-blue-600
              rounded-md
              w-full
              text-white text-sm
              hover:bg-blue-500
            "
          >
            Logar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const email = ref("imobanco@imobanco.com");
    const password = ref("@#!@#asdf1231!_!@#");
    function login() {
      router.push("/dashboard");
    }
    return {
      login,
      email,
      password,
    };
  },
});
</script>
