<template>
  <div>
    <h2>Icon 图标</h2>
    <p>语义化的矢量图形。</p>
    <h3>如何使用</h3>
    <p>使用 &lt;Icon /&gt; 标签声明组件，指定图标对应的 type 属性，示例代码如下:</p>
    <pre>
      <code>
&lt;Icon type="loading1" /&gt;
      </code>
    </pre>
    <h3>本地部署</h3>
    <p>图标默认托管在 <a href="http://iconfont.cn/">iconfont.cn</a> ，默认公网可访问。如需本地部署，可参考 <a href="https://github.com/fe6/vue-icon/tree/master/example">示例</a> 。</p>
    <h3>API</h3>
    <p>由于图标字体本质上还是文字，可以使用 style 和 class 设置图标的大小和颜色。</p>
    <pre>
      <code>
&lt;Icon type="loading1" :style="{fontSize: '210px'}" /&gt;
      </code>
    </pre>
    <h3>图标列表</h3>
    <h4>组件自带图标</h4>
    <Icon type="loading1" :spin="true" />
    <Icon type="loading2" />
    <Icon type="loading3" />
    <Icon type="loading4" />
    <h4>示例扩展图标</h4>
    <Icon type="xiazai" prefix="test" />
    <table>
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>是否必填</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>图标类型。如果为空则不显示</td>
          <td>boolean</td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td>style</td>
          <td>设置图标的样式，例如 fontSize 和 color</td>
          <td>object</td>
          <td>否</td>
          <td>-</td>
        </tr>
        <tr>
          <td>spin</td>
          <td>是否有旋转动画</td>
          <td>object</td>
          <td>否</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
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
