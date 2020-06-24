
<script>
	import Navbar from './Navbar.svelte'
	import Card from "./Card.svelte"
	import Footer from "./Footer.svelte"
	
	
</script>





<body>
<div class="layout">
	<Navbar />
		<main>
			<Card />
		

		</main>
			
	<Footer />
</div>
</body>




<style>

	body {
		margin:0 auto;
		padding:0;
	}
	main {
		display:grid;
		grid-template-columns: repeat(4, 24vw);
		grid-row-gap: 1em;
		background-color: #C5C6C7;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}




	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>






