<script setup>

</script>

<template>
    <div
        class="relative flex items-center p-0 m-4 overflow-hidden bg-center bg-cover rounded-2xl bg-gradient-to-tl from-purple-700 to-pink-500 ">
        <img src="src/assets/img/shapes/waves-white.svg" alt="pattern-lines"
            class="absolute top-0 left-0 w-full opacity-60">
        <div class="container pt-24 pb-48 z-2 lg:pb-40">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 mx-auto text-center shrink-0 md:flex-0 md:w-1/2">
                    <h3 class="text-white">Welcome To Tree Care Blog</h3>
                    <p class="text-white">Explore and get the gist of Tree's World</p>
                </div>
            </div>
        </div>
    </div>

    <nav
        class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">

        <div class="container flex flex-wrap items-center justify-between lg:flex-nowrap">

            <a class="py-2.5 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-white lg:ml-0"
                href="../../pages/dashboards/default.html">Tree Care Blog</a>



            <div
                class="items-center w-full pt-4 pb-2 transition-all duration-350 ease-soft-in-out lg-max:max-h-0 lg-max:overflow-auto lg-max:hidden lg-max:bg-white lg-max:shadow-soft-3xl md-max:relative grow basis-full rounded-2xl lg:flex lg:basis-auto lg:py-0">

                <ul class="flex flex-col pl-0 mx-auto mb-0 list-none md-max:w-full lg:flex-row">

                    <li
                        class="relative mx-2 group md-max:static lg:after:content-[''] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full">
                        <router-link
                            class="flex items-center justify-between px-4 py-2 pl-2 font-normal text-white transition-all cursor-pointer select-none lg:group-hover:opacity-75 lg-max:text-slate-700 ease-soft-in-out lg:px-2 text-sm"
                            :to="{ name: 'home' }">
                            Home
                        </router-link>
                    </li>
                    <li
                        class="relative mx-2 group md-max:static lg:after:content-[''] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full">
                        <router-link
                            class="flex items-center justify-between px-4 py-2 pl-2 font-normal text-white transition-all cursor-pointer select-none lg:group-hover:opacity-75 lg-max:text-slate-700 ease-soft-in-out lg:px-2 text-sm"
                            :to="{ name: 'categories' }">
                            Categories
                        </router-link>
                    </li>
                    <li
                        class="relative mx-2 group md-max:static lg:after:content-[''] lg:after:top-0 lg:hover:after:top-full lg:after:absolute lg:after:left-0 lg:after:-bottom-6 lg:after:w-full lg:after:h-full">
                        <router-link
                            class="flex items-center justify-between px-4 py-2 pl-2 font-normal text-white transition-all cursor-pointer select-none lg:group-hover:opacity-75 lg-max:text-slate-700 ease-soft-in-out lg:px-2 text-sm"
                            :to="{ name: 'contact' }">
                            Contact
                        </router-link>
                    </li>

                </ul>
                <ul class="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
                    <li>
                        <a href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind" target="_blank"
                            class="inline-block px-8 py-2 mb-0 mr-1 font-bold text-center uppercase align-middle bg-white border-0 cursor-pointer text-xs leading-pro text-slate-500 tracking-tight-soft shadow-soft-md bg-150 bg-x-25 rounded-7">Let's
                            Chat</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>