import {describe, it} from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';


describe('Counter.vue', () => {
    it('should render', () => {
        const wrapper = shallowMount(Counter);

        expect(wrapper).toMatchSnapshot();
    });

    it('defaults to a count of zero', () => {
        const wrapper = shallowMount(Counter);
        const count = wrapper.vm.count;

        expect(count).toBe(0);
    })

    it('presents the current count', () => {
        const wrapper = shallowMount(Counter);
        const count = wrapper.vm.count;
        const countEl = wrapper.find('.counter')

        expect(parseInt(countEl.text())).toBe(count);
    });
});