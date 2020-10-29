<template>
  <div class="container mt-5 mb-5">
    <h2 class="mb-4">Automation #{{ id }}</h2>
    <CampaignTable :campaigns="computedCampaigns" />
  </div>
</template>

<script>
import CampaignTable from "@/components/CampaignTable";

export default {
  name: "Automation",
  components: { CampaignTable },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      campaigns: []
    };
  },
  computed: {
    /**
     *
     * @returns Array
     */
    computedCampaigns: function() {
      const { campaigns } = this;
      const temporaryCampaigns = this.$store.getters.getTemporaryCampaigns;
      return campaigns.concat(temporaryCampaigns);
    }
  },
  created: async function() {
    this.$store.commit("setTemporaryCampaigns", []);
    this.campaigns = await this.$store.dispatch("getAutomationEntity", this.id);
  }
};
</script>
