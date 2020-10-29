<template>
  <div>
    <button
      class="btn btn-success d-flex align-items-center shadow"
      data-toggle="modal"
      data-target="#add-campaigns-modal"
    >
      <IconPlus />
      <span>Add campaigns</span>
    </button>
    <div
      class="modal fade"
      id="add-campaigns-modal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add campaigns</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="list-group">
              <li
                v-for="(campaign, index) in campaigns"
                :key="'campaign-' + index"
                class="list-group-item"
              >
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    :checked="selectedCampaignIds.indexOf(campaign.id) !== -1"
                    class="custom-control-input"
                    @change="toggleCampaign(campaign)"
                    :id="'campaign-list-' + campaign.id"
                  />
                  <label
                    class="custom-control-label"
                    :for="'campaign-list-' + campaign.id"
                  >
                    <span class="ml-2">{{ campaign.name }}</span>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button @click="addCampaigns" type="button" class="btn btn-primary">
              Add campaigns
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPlus from "@/assets/icons/icon-plus.svg";

export default {
  name: "AddCampaigns",
  components: { IconPlus },
  data: function() {
    return {
      campaigns: [],
      selectedCampaignIds: []
    };
  },
  computed: {
    selectedCampaigns: function() {
      const { selectedCampaignIds, campaigns } = this;
      return campaigns.filter(e => selectedCampaignIds.indexOf(e.id) !== -1);
    }
  },
  methods: {
    toggleCampaign: function(campaign) {
      const { selectedCampaignIds } = this;

      if (selectedCampaignIds.indexOf(campaign.id) === -1) {
        selectedCampaignIds.push(campaign.id);
      } else {
        delete this.selectedCampaignIds[
          this.selectedCampaignIds.indexOf(campaign.id)
        ];
      }

      this.selectedCampaignIds = Object.values(selectedCampaignIds);
    },
    addCampaigns: function() {
      const { selectedCampaigns } = this;
      console.log("selectedCampaigns", selectedCampaigns);
    }
  },
  created: async function() {
    this.campaigns = await this.$store.dispatch("getCampaigns");
  },
  beforeDestroy: function() {
    document.body.classList.remove("modal-open");
  }
};
</script>
