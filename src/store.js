//Ein einfacher Store

import {calendarWeekData} from "./seed.js";
import { reactive } from "vue"; //Funktion von vue die ein Objekt nimmt und es reactive macht
import { readonly } from "vue";

//3 Objekte
const state = reactive({ //Daten die wir verwalten: hier ein Array mit Objekten
    calendarWeekData,    //Zugriff mit state.calenderWeekData

});
//data und computed Attribute werden automatisch zum reactivity-System hinzugefügt, Hier aber keine vue Instanz sondern reines JS

const getters ={};
const mutations = {};

//exportiere Objekt, was diese 3 enthält
export default{
    //state,  //state wird direkt exportiert und es muss ein direkter Zugriff verhindert werden
    state: readonly(state),
    getters, 
    mutations,   //hirüber werden veränderungen durchgeführt
};