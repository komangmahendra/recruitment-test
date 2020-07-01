<template>
  <div class="tooltip">
    <div class="content">
      <span>{{ content }}</span>
      <i></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { content: { type: String } },
});
</script>

<style scoped>
.tooltip {
  display: inline-block;
  position: relative;
  border-bottom: 1px dotted #666;
  text-align: left;
}

.tooltip .content {
  min-width: 340px;
  max-width: 340px;
  top: -10px;
  left: 50%;
  transform: translate(-30%, -100%);
  padding: 10px 20px;
  color: #ffffff;
  background-color: #e05141;
  font-weight: normal;
  font-size: 14px;
  border-radius: 3px;
  position: absolute;
  z-index: 10;
  box-sizing: border-box;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  display: block;
  text-align: center;
}

.tooltip:hover .content {
  display: block;
}

.tooltip .content i {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -15px;
  width: 30px;
  height: 15px;
  overflow: hidden;
}

.tooltip .content i::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: #e05141;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}
</style>
