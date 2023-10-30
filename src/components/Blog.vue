<script setup>
import axios, { isCancel, AxiosError } from 'axios';
import { ref, computed, onMounted } from 'vue'
import Header from './parts/Header.vue';

const articles = ref([])
const pageCount = ref(1);
const isLoading = ref(true)

const endPointUrl = computed(() => {
    return `https://treeservicesinarlingtontexas.com/wp-json/wp/v2/posts?_fields=id,featured_media,title,slug,featured_image_url,excerpt&&per_page=3&page=${pageCount.value}`
})


function fetchArticles() {
    axios.get(endPointUrl.value)
        .then(function (response) {
            articles.value = articles.value.concat(response.data)
        }).catch(function (error) {
            console.log(error)
        }).finally(() => {
            isLoading.value = false
        })
}

//Fetching Initial Articles
fetchArticles();

//Load More
function loadMore() {
    pageCount.value++
    fetchArticles()

}


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
    <Header title="Welcome To Tree Care Blog" desc="Explore and get the gist of Tree's World" />
    <div class="container">
        <div class="-mt-32">
            <div class="block">
                <div class="flex flex-wrap -mx-3 ">
                    <!-- Article -->
                    <div v-for="(article, index) in articles" :key="index"
                        class="w-full max-w-full px-3 mb-6 lg:w-4/12 lg:mb-0 shrink-0 mt-5">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div class="relative">
                                <a class="block shadow-xl rounded-2xl">
                                    <img :src="article.featured_image_url" alt="img-blur-shadow"
                                        class="max-w-full shadow-soft-2xl rounded-2xl" />
                                </a>
                            </div>
                            <div class="flex-auto px-5 pt-8 pb-5">
                                <p
                                    class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                                    {{ article.category }}
                                </p>
                                <router-link :to="{ name: 'singlePost', params: { slug: article.slug } }">
                                    <h5><span v-html="article.title.rendered"></span></h5>
                                </router-link>

                                <p class="mb-6 leading-normal text-sm">
                                    <span v-html="article.excerpt.rendered"></span>
                                </p>

                                <div class="flex items-center justify-between">
                                    <router-link :to="{ name: 'singlePost', params: { slug: article.slug } }"
                                        class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">
                                        Read More
                                    </router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- Article End -->
                </div>
            </div>

            <div class="text-center mt-8">
                <button @click="loadMore()" type="button"
                    class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">
                    Load More
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>