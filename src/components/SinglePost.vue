<script setup>
import axios from 'axios';
import { ref, computed, reactive, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import Header from './parts/Header.vue';

const router = useRoute();
const slug = ref(router.params.slug)
const postDetail = ref([])
const isLoading = ref(true)

const endPointUrlForSinglePost = computed(() => {
    return `https://treeservicesinarlingtontexas.com/wp-json/wp/v2/posts?_fields=id,featured_media,title,slug,featured_image_url,content&slug=${slug.value}`
})

axios.get(endPointUrlForSinglePost.value)
    .then((response) => {
        postDetail.value = response.data[0]
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        isLoading.value = false
    })

</script>

<template>
    <!-- PreLoader -->
    <div v-if="isLoading" class="flex items-center justify-center h-screen">
        <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
            </div>
        </div>
    </div>

    <Header :title="postDetail.title.rendered" />
    <!-- postDetail -->
    <div class="w-full max-w-full px-3 mb-6 lg:w-8/12 lg:mb-0 shrink-0 -mt-32 mx-auto ">
        <div class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="relative">
                <a class="block shadow-xl rounded-2xl">
                    <img :src="postDetail.featured_image_url" alt="img-blur-shadow"
                        class="max-w-full shadow-soft-2xl rounded-2xl" />
                </a>
            </div>
            <div class="flex-auto px-5 pt-8 pb-5">
                <p
                    class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                    {{ postDetail.category }}
                </p>

                <p class="mb-6 leading-normal text-sm">
                    <span v-html="postDetail.content.rendered"></span>
                </p>

            </div>
        </div>
    </div>
    <!-- postDetail End -->
</template>

<style scoped></style>