import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiEndpoint: "http://localhost:8080/api_endpoints"
  },
  mutations: {},
  actions: {
    /**
     * get campaigns /AutomationEntity/GetByAutomationId
     * @param state
     * @param dispatch
     * @param automationId
     * @returns {Promise<unknown>}
     */
    getAutomationEntity: function({ state, dispatch }, automationId) {
      return new Promise((resolve, reject) => {
        Axios.get(
          state.apiEndpoint +
            "/AutomationEntity-GetByAutomationId-" +
            automationId +
            ".json"
        )
          .then(response => {
            resolve(response.data);
          })
          .catch(async error => {
            await dispatch("handleErrors", error);
            reject();
          });
      });
    },
    /**
     * get available campaigns /api/facebook/getcampaigns/
     * @param state
     * @param dispatch
     * @returns {Promise<unknown>}
     */
    getCampaigns: function({ state, dispatch }) {
      return new Promise((resolve, reject) => {
        Axios.get(state.apiEndpoint + "/Campaigns.json")
          .then(response => {
            const { adsets } = response.data;
            resolve(adsets || []);
          })
          .catch(async error => {
            await dispatch("handleErrors", error);
            reject();
          });
      });
    },
    /**
     *  TODO handle api response errors
     */
    handleErrors: function() {
      //TODO
    }
  },
  modules: {}
});
