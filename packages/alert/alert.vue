<template>
    <div class="alert">
        {{test}}
    </div>
</template>
<script>
export default {
    name: 'alert',
    data() {
        return {
            test: 'alert test'
        }
    }
}
</script>
<style scoped>
.alert {
    color: red
}
</style>


