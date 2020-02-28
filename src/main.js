import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import { Button, Form, Area, NavBar, Icon, Field, Switch, Popup,
        Col, Row, Cell, CellGroup   } from 'vant';
import axios from 'axios';

Vue.use(Button);
Vue.use(Form);
Vue.use(Area);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Switch);
Vue.use(Popup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(CellGroup);

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// axios({
//   url:'http://127.0.0.1:8080/get_buyer_list?status=1'
// }).then(res => {
//   console.log(res);
  
// })