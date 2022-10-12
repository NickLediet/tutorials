<template>
    <h1>Current count is <span class="counter">{{count}}</span></h1>
</template>
<script>
export default {
    name: 'counter',
    data() {
        return {
            count: 0
        }
    }
}
</script>