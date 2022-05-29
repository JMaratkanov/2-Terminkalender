<template>
  <div class="container-fluid mt-5">
    <!-- container-fluid: Abstand links und rechts -->
    <div class="row">
      <div class="col-12">
        <!-- Row besteht aus 12 Spalten - volle Bootstrapbreite -->
       
        <calenderweek></calenderweek>
    
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <!-- [][][][][X]X][X][X][][][X][X]-->
        
        <calender-entry></calender-entry>
        
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button class="btn btn-lg mb-2">
            <!-- großer Button -->
            <i class="fas fa-cogs"></i>
            <!-- Zahnrad icon-->
          </button>
        </div>
       
        <calender-settings></calender-settings>
    
      </div>
    </div>
  </div>
</template>

<script>
import CalenderWeek from "./components/CalenderWeek.vue";
import CalenderEntry from './components/CalenderEntry.vue';
import CalenderSettings from './components/CalenderSettings.vue';

export default {
  name: "App",
  components: {
    //CalenderWeek
    'Calenderweek': CalenderWeek,
    CalenderEntry,
    CalenderSettings,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
