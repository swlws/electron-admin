<template>
  <div>
    <span v-if="mode === 'show'" @click="mode = 'write'">{{ v }}</span>

    <input
      v-if="mode === 'write'"
      type="text"
      v-model="v"
      autofocus
      @focusout="mode = 'show'"
      @keyup.enter="mode = 'show'"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:value"]);

const v = computed({
  get() {
    if (!props.value) {
      mode.value = "write";
    }
    return props.value;
  },
  set(v) {
    emits("update:value", v);
  },
});

const mode = ref<"show" | "write">("show");
</script>
