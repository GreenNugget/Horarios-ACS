<template>
  <div>
    <h1>Login Page</h1>
    <br>
    <div class="working-with-scss">
      Checando si scss funciona <br>
      <span class="nested">Elemento anidado</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
};
</script>

<style scoped lang="scss">
.working {
  &-with-scss {
    font-size: 200%;
    color: green;

    .nested {
      font-size: 60%;
      color: grey;
    }
  }
}
</style>