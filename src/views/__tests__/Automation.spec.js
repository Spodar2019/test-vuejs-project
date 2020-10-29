import { shallowMount } from "@vue/test-utils";
import Automation from "@/views/Automation";
import store from "@/store";

describe("Automation.vue Implementation Test", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Automation, {
      store,
      propsData: {
        id: "123"
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("initializes with correct elements", () => {});
});
