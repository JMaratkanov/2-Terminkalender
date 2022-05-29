<!-- <vue> + Enter macht Single File Komponent Template-->
<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Bootstrapklasse sorgt dafür, dass wir innerhalb dieses Divs mehrere Cards in einer Zeile erstellen können -->
     <!-- <calender-day  v-for="i in 7" :key="i"></calender-day> //statisch 7 mal die gleiche Komponente -->
     <calender-day  v-for="day in calendarWeekData" :key="day.id" :day="day"></calender-day><!-- erstelle soviele calender-days wie es Elemente in unserem Array gibt 
     und übergebe "day" (unser Attribut aus der Iteration) an props-Attribut day - in Komponente deklariert -->
    </div>
  </div>
</template>

<script>
import CalenderDay from "./CalenderDay.vue";
import Store from "../store.js";

export default {
  //alle Export defaults werden später von vue-cli in ein einziges Objekt zusammengeführt - unbenanner export, bei import Name egal
  name: "CalenderWeek",
  components: { CalenderDay },
  data(){               //Nutzen des Stores als Data Attribut, data ist eine FUnktion die ein Objekt zurückgibt
      return {
          calendarWeekData: Store.state.calendarWeekData,
      }
  }
};
</script>

<!-- Achtung! Alle Styles egal aus welchen Komponenten sind immer global verfügbar - scoped verhindert das -->
<style scoped>
h5 {
  color: red;
}
</style>
