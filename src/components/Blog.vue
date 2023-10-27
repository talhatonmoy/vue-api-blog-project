<script setup>
import axios, { isCancel, AxiosError } from 'axios';
import { ref, onBeforeMount } from 'vue'

onBeforeMount(() => {
    axios.get('https://treeservicesinarlingtontexas.com/wp-json/wp/v2/posts?_fields=id,slug,link,title,excerpt,featured_media')
        .then(function (response) {
            articles.value = response.data
        }).catch(function (error) {
            console.log(error)
        })
})

function stripHtmlTags(input) {
    return input.replace(/<\/?[^>]+(>|$)/g, "");
}

const articles = ref([])


</script>

<template>
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
                                <img :src="article.featuredImage" alt="img-blur-shadow"
                                    class="max-w-full shadow-soft-2xl rounded-2xl" />
                            </a>
                        </div>
                        <div class="flex-auto px-5 pt-8 pb-5">
                            <p
                                class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                                {{ article.category }}
                            </p>
                            <a href="javascript:;">
                                <h5>{{ article.title.rendered }}</h5>
                            </a>
                            <p class="mb-6 leading-normal text-sm" v-html="stripHtmlTags(articles.excerpt.rendered)"></p>

                            <div class="flex items-center justify-between">
                                <a :href="article.link"
                                    class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Article End -->




            </div>
        </div>

        <div class="text-center mt-8">
            <button type="button"
                class="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">
                Load More
            </button>
        </div>
    </div>
</template>

<style scoped></style>