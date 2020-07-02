<template>
  <select @change="onChange" class="dropdown-select" :disabled="disabled">
    <option disabled selected hidden>{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.label"
      :value="option.value"
      :data-testid="option.label"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    onChange: { type: Function, required: true },
    placeholder: { type: String, required: true },
    options: { type: Array },
    disabled: { type: Boolean },
  },
});
</script>
