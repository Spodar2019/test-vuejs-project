import { createLocalVue, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home";
import store from "@/store";

import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Home.vue Implementation Test", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      localVue,
      store,
      router
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("initializes with correct elements", () => {});
});
