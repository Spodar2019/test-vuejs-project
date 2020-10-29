<template>
  <div class="container">
    <h2>Automation #{{ id }}</h2>
    <CampaignTable :campaigns="campaigns" />
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
  created: async function() {
    this.campaigns = await this.$store.dispatch("getAutomationEntity", this.id);
  }
};
</script>
