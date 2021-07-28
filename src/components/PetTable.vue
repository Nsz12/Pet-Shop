<template>
  <div>
      <h1>{{ species }}</h1>
    <b-table striped hover :items="pets ">
        <template #cell(name)="data">
        <router-link :to="`/pet/${species}/${data.index}`">
        {{ data.value }}
        </router-link>
      </template>
         </b-table>
  </div>
</template>
<script>
export default ({
  props: {
    species: String,
    pets: Array
  }
})
</script>
