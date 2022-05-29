<template>
  <div class="card">
    <!-- i in 7 führt 7x den gleichen inhalt aus, kex wird an das i gebunden weil es eine einzigartige Nr ist-->
    <div class="card-header text-center" role="button"> <!-- durch role=button ändert sich der Cursor -->
     
      <!--<strong>Montag</strong>-->
      <strong>{{day.fullName}}</strong>
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
  //Arrayschreibweise - nicht empfohlen
  //props: ["day"],   

  props:{
      //day: Object,//boolean, String, Number, Array, Object, Function; Falls wechseln kann [String, Number]

      //Noch mehr Anpassung? Einstellungen nur für Warnungen
      day:{
          type: Object,
          required: true,
          default: function(){
              return {
              id: -1,
              fullName: "leer",
              events:[],
              validator: function(value){
                  if(Object.keys(value).includes("id")){
                      return true;
                  }
              }
          }
          }//bei empty - zb 100 bei primitiven Datentypen, sonst Fk die Objekt returnt
      }
  }

};
</script>

<style scoped></style>
