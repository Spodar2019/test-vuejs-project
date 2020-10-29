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
      <span class="badge badge-success">Success</span>
    </td>
    <td>
      <button
        @click="removeCampaign"
        class="btn btn-danger shadow"
        title="Remove Campaign"
      >
        <IconTrash />
      </button>
    </td>
  </tr>
</template>

<script>
import IconTrash from "@/assets/icons/icon-trash.svg";

export default {
  name: "CampaignTableRow",
  components: { IconTrash },
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
    removeCampaign: function() {
      const { id } = this.entity;
      alert("Removed #" + id);
    },
    getLocation: function(originalLocation) {
      const { locationType, count } = originalLocation;
      return locationType && count
        ? `${this._capitalizeFirstLetter(locationType)} (${count})`
        : "-";
    }
  }
};
</script>

<style scoped></style>
