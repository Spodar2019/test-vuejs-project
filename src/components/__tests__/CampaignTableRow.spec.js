import { shallowMount } from "@vue/test-utils";
import CampaignTableRow from "@/components/CampaignTableRow";
import store from "@/store";

describe("CampaignTableRow.vue Implementation Test", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(CampaignTableRow, {
      store,
      propsData: {
        campaign: {}
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("initializes with correct elements", () => {});
});
