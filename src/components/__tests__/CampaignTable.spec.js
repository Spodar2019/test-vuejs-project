import { shallowMount } from "@vue/test-utils";
import CampaignTable from "@/components/CampaignTable";
import store from "@/store";

describe("CampaignTable.vue Implementation Test", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(CampaignTable, {
      store,
      propsData: {}
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("initializes with correct elements", () => {});
});
