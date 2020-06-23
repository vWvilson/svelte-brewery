<script>

import {onMount} from 'svelte'


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
         console.log(venues)
 });
            

</script>
            
	

{#each venues as venue}
<div class="card">
    <img src="http://placeimg.com/250/250/nature" alt="" id="brewery-image">
    <div id="text-container">
        <h1 class="title">{venue.venue.name}</h1>
        <p class="location">{venue.venue.location.formattedAddress[0]}<br>
                            {venue.venue.location.formattedAddress[1]}<br></p>
        <p class="hours">{venue.venue.hours}</p>
        <p class="food">{venue.venue.food}</p>
    </div>
    <button>more</button>
</div>
{/each}
   
    
           














<style>
.card {
    width: 20vw;
    color: #2B344F;

    border-radius: 3px;
    background-color: white;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
}

h1 {
    margin: 0 auto;
}

#brewery-image {
    padding: 1em;
}

#text-container {
    padding: .5em;

}

button {
    background-color: #C5B18B;
    color: white;
    border: none;
    width: 90%;
    padding: .5em
}

</style>
