<template>
  <h1 class="text-3xl font-bold underline text-green-100">Hello world!</h1>

  {{ content }}
</template>

<script setup lang="ts">
import { useNotion } from "@/composables";

const { getContent } = useNotion();

const { data: content } = await useAsyncData("home-page", async () => {
  return getContent();
});

</script>
