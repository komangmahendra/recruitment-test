<template>
  <button
    class="styled-button"
    @click="onClick"
    data-testid="primary-button"
    :disabled="disabled"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true, default: "" },
    onClick: { type: Function, required: false },
    disabled: { type: Boolean },
  },
};
</script>

<style scoped>
.styled-button {
  background: #9033aa;
  border-radius: 3px;
  border: none;
  color: #ffffff;
  padding: 10px;
  width: 100%;
}

button:focus {
  outline: 0;
}

button:active {
  position: relative;
  top: 1px;
}

button:hover {
  background: #722987;
}
</style>
