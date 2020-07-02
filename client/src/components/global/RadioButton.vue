<template>
  <label class="container-radio-button"
    >{{ label }}
    <input
      type="radio"
      name="radio"
      :value="label"
      :checked="checked"
      :disabled="disabled"
      @change="onSelectedGender"
      data-testid="radio-button"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    onClick: { type: Function },
    checked: { type: Boolean },
    disabled: { type: Boolean },
  },
  methods: {
    onSelectedGender(e) {
      this.$props.onClick(this.$props.label.toLowerCase());
    },
  },
};
</script>

<style scoped>
/* The container */
.container-radio-button {
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-size: 12px;
  line-height: 14px;
}

/* Hide the browser's default radio button */
.container-radio-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #fff;
  border-radius: 50%;

  border: solid 1px #000000;
}

/* On mouse-over, change background color */
.container-radio-button:hover input ~ .checkmark {
  background-color: #f9e6ff;
}

/* When the radio button is checked, add a blue background */
.container-radio-button input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container-radio-button input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container-radio-button .checkmark:after {
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
}
</style>
