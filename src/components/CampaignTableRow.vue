<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      <div
        v-for="(originalLocation, index) in originalLocations"
        :key="'original-location-' + index"
      >
        {{ getLocation(originalLocation) }}
      </div>
    </td>
    <td>
      <div
        v-for="(breakdownLocation, index) in breakdownLocations"
        :key="'breakdown-location-' + index"
      >
        {{ getLocation(breakdownLocation) }}
      </div>
    </td>
    <td>
      <span class="badge bg-success m-1">Sync Succeeded</span>
      <span class="badge bg-danger m-1">Sync Failed</span>
    </td>
    <td>
      <button
        @click="reSyncCampaign"
        class="btn btn-outline shadow m-1"
        title="Remove Campaign"
      >
        <IconRepeat /> re-sync
      </button>
      <button
        @click="removeCampaign"
        class="btn btn-danger shadow m-1"
        title="Remove Campaign"
      >
        <IconTrash /> Remove
      </button>
    </td>
  </tr>
</template>

<script>
import IconTrash from "@/assets/icons/icon-trash.svg";
import IconRepeat from "@/assets/icons/icon-repeat.svg";

export default {
  name: "CampaignTableRow",
  components: { IconTrash, IconRepeat },
  props: {
    campaign: {
      type: Object,
      required: true
    }
  },
  computed: {
    entity: function() {
      const { entity } = this.campaign;
      return entity || {};
    },
    locationSummary: function() {
      const { locationSummary } = this.campaign;
      return locationSummary || {};
    },
    originalLocations: function() {
      const { locationSummary } = this;
      return locationSummary.originalLocations || [];
    },
    breakdownLocations: function() {
      const { locationSummary } = this;
      return locationSummary.breakdownLocations || [];
    },
    name: function() {
      const { entity } = this;
      return entity.name || "-";
    }
  },
  methods: {
    /**
     * TODO
     */
    removeCampaign: function() {
      const { id } = this.entity;
      alert("Removed #" + id);
    },
    /**
     * TODO
     */
    reSyncCampaign: function() {},
    /**
     *
     * @param originalLocation
     * @returns {string|string}
     */
    getLocation: function(originalLocation) {
      const { locationType, count } = originalLocation;
      return locationType && count
        ? `${this._capitalizeFirstLetter(locationType)} (${count})`
        : "-";
    }
  }
};
</script>
