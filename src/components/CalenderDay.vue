<template>
  <div class="card">
    <!-- i in 7 führt 7x den gleichen inhalt aus, kex wird an das i gebunden weil es eine einzigartige Nr ist-->
    <div class="card-header text-center" role="button">
      <!-- durch role=button ändert sich der Cursor -->
      <strong>Montag</strong>
    </div>
    <div class="card-body">
      <calender-event></calender-event>
    </div>
  </div>
</template>

<script>
import CalenderEvent from "./CalenderEvent.vue";
export default {
  name: "CalenderDay",
  components: { CalenderEvent },
};
</script>

<style scoped></style>
