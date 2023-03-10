<template>
    <button class="btn btn-primary">
        <i class="fa fa-2px fa-plus"
            :class="icon"
        ></i>
    </button>
</template>

<script>
export default {
    props: {
        icon : {
            type: String,
            default: 'fa-plus'
        }
    }
}
</script>

<style lang="scss" scoped>

button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    height: 40px;
    border-radius: 100%;
}

</style>