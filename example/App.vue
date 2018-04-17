<template>
  <div>
    自带
    <Icon type="loading1" />
    <Icon type="loading2" />
    <Icon type="loading3" />
    <Icon type="loading4" />
    <br>扩展
    <Icon type="xiazai" prefix="test" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Icon from '@/component/index';
import '@/style/index';
import './iconfont.scss';

@Component({
  components: {
    Icon,
  },
})

export default class App extends Vue {}
</script>
