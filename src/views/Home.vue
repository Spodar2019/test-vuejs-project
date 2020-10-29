<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Automations:</h1>
          <ul class="list-group">
            <router-link
              :to="{ name: 'Automation', params: { id: 316 } }"
              class="list-group-item"
              >Automation #316</router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
