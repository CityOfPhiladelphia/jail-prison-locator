<template>
  <table role="grid" class="stack">
    <thead>
      <tr>
        <th scope="col">PPN</th>
        <th scope="col">First name</th>
        <th scope="col">Last name</th>
        <th scope="col">Date of birth</th>
        <th scope="col">Facility</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="result in results"
        :key="result.ppn">
        <td>{{ result.ppn }}</td>
        <td>{{ result.firstName }}</td>
        <td>{{ result.lastName }}</td>
        <td>{{ result.dob }}</td>
        <td>{{ result.facility }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  props: {
    results: {
      type: Array,
      required: true
    }
  }
}
</script>
