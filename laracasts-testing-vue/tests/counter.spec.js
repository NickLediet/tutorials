import {describe, it} from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Counter from '../src/components/Counter.vue';



describe('Counter.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });

    it('should render', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('defaults to a count of zero', () => {
        const count = wrapper.vm.count;

        expect(count).toBe(0);
    })

    it('presents the current count', () => {
        const count = wrapper.vm.count;
        const countEl = wrapper.find('.counter__count')

        expect(parseInt(countEl.text())).toBe(count);
    });

    it('should increment the value when increased', () => {
       const addButtonEl = wrapper.find('.counter__add');

       addButtonEl.trigger('click');
       addButtonEl.trigger('click');
      
       // The count value should have incremented twice
       expect(wrapper.vm.count).toBe(2);
    });

    it('should decrease the value when decremented', () =>  {
        const decrementButtonEl = wrapper.find('.counter__decrement');
        const addButtonEl = wrapper.find('.counter__add');
        // Bring the count up to 2
        addButtonEl.trigger('click');
        addButtonEl.trigger('click');
        // Decrement it to 1
        decrementButtonEl.trigger('click');

        expect(wrapper.vm.count).toBe(1);
    });

    it('should not decrease past zero', () => {
        const decrementButtonEl = wrapper.find('.counter__decrement');

        decrementButtonEl.trigger('click');
        decrementButtonEl.trigger('click');
        decrementButtonEl.trigger('click');

        expect(wrapper.vm.count).toBe(0);
    })
});