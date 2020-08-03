import Vue from 'vue'
import App from './App.vue'
import LoadScript from 'vue-plugin-load-script';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ui5-/];

Vue.use(LoadScript);
Vue.loadScript("https://openui5nightly.hana.ondemand.com/resources/sap-ui-core.js")
.then(function () {
  return Vue.loadScript("https://openui5nightly.hana.ondemand.com/resources/sap/ui/test/Opa5.js")
}).then(function () {
  console.log("autowaiter: ", window.sap.ui.test.autowaiter._autoWaiter);
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}).catch(function () {
  console.error("cannot load ui5 core");
});
