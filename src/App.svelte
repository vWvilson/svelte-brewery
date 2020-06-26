<script>
	import Navbar from './Navbar.svelte'
	import Card from "./Card.svelte"
	import Footer from "./Footer.svelte"
	import Map from './Map.svelte';
	import MapMarker from './MapMarker.svelte';


 import {onMount} from 'svelte'
import { fade, fly } from 'svelte/transition';


const endPoint = "https://api.foursquare.com/v2/venues/explore?";
const parameters = {
            client_id:"5ELCQIWOQFDSFHTV5R0YOHE3ZTLY3Z3MZPYZBMJ0QZBJ0TLD",
            client_secret:"G2PI00PVIA3KONNFCFF50MCYY2L0ROUBGPV1AWV4NKEEMOB2",
            query:'brewery',
            near:"Pittsburgh",
            radius: 10000,
            v:20181107
        }
 
let venues = []
   
         
onMount(async function() {
    const response = await fetch(endPoint + new URLSearchParams(parameters));
    venues = await response.json();
    venues= venues.response.groups[0].items;
});
         
            
let yes="false"
 
const handleCheck = (id) => {
    venues = venues.filter((venue)=> venue.venue.id != id )
    console.log(venues)
    console.log(id)
   
 }
	
</script>


	





<body>

		<Navbar />
			<main>
				<Card />
			</main>
				<section class="map-container">
				<Map lat={40.44} lon={-79.99} zoom={10.5}>
				{#each venues as venue (venue.venue.id)}
						<MapMarker lat={venue.venue.location.lat} lon={venue.venue.location.lng} label="{venue.venue.name}"/>
				{/each}
					</Map>
				</section>
			
				<Footer />
		

</body>


	

			
		





<style>
	body {
		height:100vh;
		margin: 0 auto;
		padding: 0;
	}


	main {
		display: grid;
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



