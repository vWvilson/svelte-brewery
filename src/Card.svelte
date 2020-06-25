<script>

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
            

{#if yes}
{#each venues as venue (venue.venue.id)}
<div in:fly="{{ y: 200, duration: 2000 }}" out:fade class="card">
    <img src="http://placeimg.com/250/250/nature" alt="" id="brewery-image" >
    <div id="text-container">
        <h2 class="title">{venue.venue.name}</h2>
        <p class="location"><i class="fas fa-map-marker"></i>
                            {venue.venue.location.formattedAddress[1]}<br>
        </p>

      
    <div class="checkbox">
        <label>
			<input type=checkbox bind:checked={venue.venue.checked} on:change={() => {handleCheck(venue.venue.id)}}>
						visited
		</label>
	</div>
</div>
    <button>more</button>
</div>
{/each}
{/if}
   
   


   
    

<style>
img {
    width:80%;
}
button {
    background-color: #C5B18B;
    color: white;
    border: none;
    width: 90%;
    padding: .5em
}
button:hover {
    background-color: #af8b46;
}
  

.card {
    width: 23vw;
    color: #2B344F;
    position: relative;
    background-color: white;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
}

h2 {
    margin: 0 auto;
    font-size: clamp(1em, 1.2vw, 2em);
}

   

p {
    font-size:1em
}

#brewery-image {
    padding: 1em;
}

#text-container {
    padding: .5em;

}

.fa-map-marker {
    color:#F93E01;
    padding-right:8px;
}



</style>
           















