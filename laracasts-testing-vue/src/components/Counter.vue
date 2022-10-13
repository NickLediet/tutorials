<template>
    <div class="counter">
        <h1 class="counter__text">
            Current count is: 
            <span class="counter__count">{{count}}</span>
        </h1>
        <button 
            @click="increment"
            class="counter__add">+</button>
        <button 
            @click="decrement"
            class="counter__decrement">-</button>

    </div>
</template>
<script>
export default {
    name: 'counter',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count = (this.count > 0) ? 
                (this.count - 1) : 0;
        }
    }
}
</script>