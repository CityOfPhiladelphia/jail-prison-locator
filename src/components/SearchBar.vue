<template>
  <div class="row expanded search-container">
    <div class="row">
      <div class="columns medium-18 small-centered">
        <form @submit.prevent="onSubmitPPN">
          <h3>Search by Philadelphia Prison Number (PPN)</h3>
          <label for="ppn">Philadelphia Prison Number (PPN)</label>
          <input
            type="text"
            id="ppn"
            name="ppn"
            ref="ppn"
            placeholder="e.g. 700027"
            required>
          <button type="submit">Search</button>
        </form>

        <h3>Or search by name and date of birth</h3>

        <form @submit.prevent="onSubmitName">
          <label for="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            ref="firstName"
            required>
          <label for="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            ref="lastName"
            required>
          <label for="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            ref="dob">

          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmitPPN (event) {
      const ppn = this.$refs.ppn.value.trim()
      this.$router.push({
        query: { ppn }
      })
    },
    onSubmitName (event) {
      const firstName = this.$refs.firstName.value.trim()
      const lastName = this.$refs.lastName.value.trim()
      const dob = this.$refs.dob.value.trim()
      const query = { firstName, lastName }
      if (dob) query.dob = dob // don't include empty dob query
      this.$router.push({ query })
    }
  }
}
</script>

<style lang="sass" scoped>
.search-container
  margin: 2rem 0
  padding: 2rem

.search-field
  margin-bottom: 3px

.form-title
  text-align: center
  padding-bottom: 1rem

.class-field
  margin-bottom: 0
</style>
