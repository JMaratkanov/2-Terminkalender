/*
1) Node mit npm zusammen installieren (node enthält npm)
2) Vue Cli installieren: npm -install -g @vue/cli@4.5.13 oder npm -install -g @vue/cli
   im Visual Studio Code Terminal
3) Neues leeres Projekt erstellen im Terminal:
	vue create terminkalender

package.json:
Name, Version, scripts:
serve - Entwicklungsserver starten mit service von cli
build - Anwendung bauen für webserver
lint - Analysiert JS Code und gibt Empfehlungen
Dependencies - Installierte Pakete
core-js für modernes JS
Dev-Dependencies - Abhängigkeiten die nur für die Entwicklung da sind, werden nicht mit build übernommen

node_modules:
enthält alle Pakete und Dateien die bei der Installation erzeugt wurden

public:
enthält das Template an das wir uns binden - index.html
enthält div id = app 
hier kann man wenn man möchte bootstrap einbinden
Eleganter: statt cdn link mit npm install bootstrap und integrieren:
einbinden was man möchte aus modules ->
z.B. in Rootkomponent App.vue in styles als globalen Style festlegen mit relativem Pfad
~ => Verweis node_modules Ordner
<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
</style>

Font-Awesome:
npm install --save @fortawesome/fontawesome-free

babel.config.js: JS compiler zum Kompilieren von modernem JS für alte Browser
Wandelt zb ein JS Promise in älteren JS Code um
ACHTUNG: für vuex und axios braucht man Promise Support
module.exports = {
  presets: [
    //'@vue/cli-plugin-babel/preset'
    ['@babel/preset-env', {corejs:"core-js@3"}]
  ]
}

src:
main.js:
Einstiegspunkt in die Anwendung
mount - binden an das div Element mit id app
.vue Dateien werden in reguläres JS vom Cli umgewandelt

App.vue:
ist ein single-file-component

assets: Ort für statische Dateien


*/



import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
