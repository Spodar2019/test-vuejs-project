import { createLocalVue, shallowMount } from "@vue/test-utils";
import AddCampaigns from "@/components/AddCampaigns";
import store from "@/store";

import VueRouter from "vue-router";
import bootstrap from "bootstrap/dist/js/bootstrap.min";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.prototype.$bootstrap = bootstrap;

describe("AddCampaigns.vue Implementation Test", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(AddCampaigns, {
      localVue,
      store
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("initializes with correct elements", () => {});
});
