<!-- <vue> + Enter macht Single File Komponent Template-->
<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Bootstrapklasse sorgt dafür, dass wir innerhalb dieses Divs mehrere Cards in einer Zeile erstellen können -->
      <calender-day  v-for="i in 7" :key="i"></calender-day>
    </div>
  </div>
</template>

<script>
import CalenderDay from "./CalenderDay.vue";

export default {
  //alle Export defaults werden später von vue-cli in ein einziges Objekt zusammengeführt - unbenanner export, bei import Name egal
  name: "CalenderWeek",
  components: { CalenderDay },
};
</script>

<!-- Achtung! Alle Styles egal aus welchen Komponenten sind immer global verfügbar - scoped verhindert das -->
<style scoped>
h5 {
  color: red;
}
</style>
