
import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import createLogger from 'vuex/dist/logger';
const DEBUG = process.env.NODE_ENV === 'development';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: DEBUG,
  plugins: DEBUG ? [createLogger({})] : [],
  modules: {}
});
