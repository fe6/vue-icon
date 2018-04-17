<template>
  <i
    v-if="type"
    :class="[`${prefix}-font`,`${prefix}-${type}`, {
      'vi-spin': !!spin,
    }]"
  ></i>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class VIcon extends Vue {
  @Prop([String]) type: string|undefined
  @Prop([Boolean]) spin: boolean|undefined
  @Prop({ default: 'vi' }) prefix: string|undefined
}
</script>
