import Vue from 'vue'
import { mount } from "vue-test-utils";
import Icon from '../src/component/Icon.vue'

describe('Icon.vue', () => {
  let wrapper: any;
  let wrapperNo: any;
  let wrapperPrefix: any;

  beforeEach(() => {
    wrapper = mount(Icon, {
      propsData: {
        type: 'loading1',
      },
    });
    wrapperNo = mount(Icon);
    wrapperPrefix = mount(Icon, {
      propsData: {
        type: 'loading1',
        prefix: 'test',
      },
    });
  });

  it("验证 prop 值是否正确", done => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.props().type).toBe('loading1');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it("验证 class 值是否正确", done => {
    wrapper.vm.$nextTick(() => {
      try {
        expect(wrapper.is('i')).toBe(true);
        expect(wrapper.classes().toString()).toBe('vi-font,vi-loading1');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it("验证 prop 为空不显示", done => {
    wrapperNo.vm.$nextTick(() => {
      try {
        expect(wrapperNo.is('i')).toBe(false);
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it("验证 自定义前缀 prefix", done => {
    wrapperPrefix.vm.$nextTick(() => {
      try {
        expect(wrapperPrefix.is('i')).toBe(true);
        expect(wrapperPrefix.classes().toString()).toBe('test-font,test-loading1');
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
})
