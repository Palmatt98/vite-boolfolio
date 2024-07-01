<template>
	<div class="container">
		<h1>scopri tutte le card</h1>
		<div class="row row-cols-4">
			<div 
				class="col"
				v-for="post in posts"
			>
				<div class="card">
					<div class="card-body">
						<h2>{{ post.title }}</h2>
						<h5>{{ post.content }}</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			posts: [],
		};
	},
	created() {
		axios.get("http://127.0.0.1:8000/api/posts").then((resp) => {
			this.posts = resp.data.result;
		});
	},
};
</script>

<style lang="scss" scoped></style>
