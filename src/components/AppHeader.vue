<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">BOOLPRESS</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<router-link 
						:to="{ name: 'home' }" 
						class="nav-link active" 
						aria-current="page" 
						href="#">Home
					</router-link>
					</li>
					<li>
						<router-link 
						:to="{ name: 'posts' }" 
						class="nav-link active" 
						aria-current="page" 
						href="#">Post
					</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
