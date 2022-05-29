<template>
  <div class="container-fluid mt-5">    <!-- container-fluid: Abstand links und rechts -->
    <div class="row">
      <div class="col-12">        <!-- Row besteht aus 12 Spalten - volle Bootstrapbreite -->
        <!-- Anfang: Template für die Calendar-Week-Component -->
        <div id="calender-week">
          <div class="card-group">  <!-- Bootstrapklasse sorgt dafür, dass wir innerhalb dieses Divs mehrere Cards in einer Zeile erstellen können -->
            <div class="card" v-for="i in 7" :key="i">    <!-- i in 7 führt 7x den gleichen inhalt aus, kex wird an das i gebunden weil es eine einzigartige Nr ist-->
              <div class="card-header text-center" role="button"> <!-- durch role=button ändert sich der Cursor -->
                <strong>Montag</strong>
              </div>
              <div class="card-body">
                <!-- Anfang: Template für die Calendar-Day-Component -->
                <div id="calendar-day">
                  <!-- Anfang: Template für die Calendar-Event-Component -->
                  <div id="calendar-event">
                    <div class="alert text-center">
                      <div>
                        <strong>Hoch</strong>
                      </div>

                      <div>Vue.js 3 lernen</div>

                      <div>
                        <i class="fas fa-edit me-2" role="button"></i>  <!-- fontawwesome buttons, me = margin-end = außenabstand rechts 2 --> 
                        <i class="far fa-trash-alt" role="button"></i>
                      </div>
                    </div>
                  </div>
                  <!-- Ende: Template für die Calendar-Event-Component -->
                </div>
                <!-- Ende: Template für die Calendar-Day-Component -->
              </div>
            </div>
          </div>
        </div>
        <!-- Ende: Template für die Calendar-Week-Component -->
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">  <!-- [][][][][X]X][X][X][][][X][X]-->
        <!-- Anfang: Template für die Calendar-Entry-Component -->
        <div id="calender-entry">
          <div class="card">
            <div class="card-header text-center">
              <h5>Neuer Termin für: <strong>Montag</strong></h5>
            </div>
            <div class="card-body">
              <input
                type="text"
                class="form-control"
                placeholder="Neuer Eintrag"
              />
              <select class="form-select mt-2">
                <option value="-1">Hoch</option>
                <option value="0">Mittel</option>
                <option value="1">Tief</option>
              </select>
              <div class="text-center mt-3">
                <span
                  v-for="i in 5"
                  :key="i"
                  class="d-inline-block alert alert-primary m-0 me-2 square"
                  role="button"
                >
                </span>
              </div>
              <hr />
              <div class="d-grid gap-2">
                <button class="btn btn-primary">Eintragen</button>
                <button class="btn btn-danger">Inhalt löschen</button>
              </div>
            </div>
          </div>
        </div>
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button class="btn btn-lg mb-2">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- Anfang: Template für die Calendar-Settings-Component -->
        <div id="calendar-settings">
          <div class="card">
            <div class="card-header text-center bg-success text-white">
              <strong>Einstellungen</strong>
            </div>
            <div class="card-body">
              <ul class="nav nav-pills nav-fill">
                <li v-for="i in 2" :key="i" class="nav-item" role="button">
                  <a class="nav-link"
                    ><i class="fas fa-icons text-success"></i
                  ></a>
                </li>
              </ul>
              <hr />
              <ul class="nav nav-pills nav-fill">
                <li class="nav-item" role="button">
                  <a class="nav-link"
                    ><i class="fas fa-sort-numeric-down-alt text-success"></i
                  ></a>
                </li>
                <li class="nav-item" role="button">
                  <a class="nav-link"
                    ><i class="fas fa-sort-alpha-down text-success"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Ende: Template für die Calendar-Day-Component -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
