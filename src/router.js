import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PostPage from "./pages/PostPage.vue";


const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/posts",
			name: "posts",
			component: PostPage,
		},
	],
});

export { router };
