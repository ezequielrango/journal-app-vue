<template>
    <div class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10} })">

        <div class="entry-title d-flex">
            <span class="text-success">10</span>
            <span class="mx-1 fs-5">Marzo</span>
            <span class="mx-2 fw-light">2023</span>
        </div>

        <div class="entry-description">
            Sint quis proident consectetur ullamco ullamco. Ipsum veniam nulla excepteur nisi pariatur fugiat. Ut excepteur magna id mollit do cillum ipsum veniam.
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
 .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>