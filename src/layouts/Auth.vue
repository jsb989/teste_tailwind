<template>
  <div class="flex h-screen bg-blue-200 font-roboto">
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-blue-200">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",
});
</script>

<style></style>
