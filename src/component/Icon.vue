<template>
  <i
    v-if="type"
    :class="[`${prefix}-font`,`${prefix}-${type}`]"
  ></i>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class VIcon extends Vue {
  @Prop() type: string|undefined
  @Prop({ default: 'vi' }) prefix: string|undefined
}
</script>
