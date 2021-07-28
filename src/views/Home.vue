<template>
  <div class="home">
    <h1>Welcome</h1>
    <h2>Number of animals in the store: {{ animalsCount }}</h2>
    <h2>Number of cats in the store: {{ getAllCats.length }}</h2>
    <h2>Number of dogs in the store: {{ getAllDogs.length }}</h2>
    <button @click='togglePetForm' class="btn btn-primary">{{ buttonField }}</button>
    <b-form @submit.prevent="handleSubmit"  v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type='number'
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      },
      buttonField: 'Add new pet'
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount',
      'getAllCats',
      'getAllDogs'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm () {
      if (this.showPetForm) {
        this.buttonField = 'Add new pet'
      } else {
        this.buttonField = 'Hide'
      }
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      // reset form
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
