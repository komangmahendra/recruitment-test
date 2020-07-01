<template>
  <div class="wrapper" data-testid="login-wrapper">
    <div class="container">
      <Button title="Login" :onClick="() => {}" />
    </div>
  </div>
</template>

<script>
// config
import { baseURL } from "../../config/baseURL";

// components
import Button from "../components/global/Button";

export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  background: #fafafa;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
}
</style>
