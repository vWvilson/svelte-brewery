<script>

import {onMount} from 'svelte'

import { flip } from 'svelte/animate';

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
            

    //   const URL =  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=AIzaSyDjD-QmoPcvOaMKv4qUcSkmANZSzq82bWs"
    //   let data = [];
    //     onMount(async function() {
    //     const response = await fetch(URL);
    //     data = await response.json();
    //    data= data.data;
    //     console.log(data)
    // });

</script>
            
	

{#each venues as venue}
<div class="card" >
    <img src="http://placeimg.com/250/250/nature" alt="" id="brewery-image" aspectRatio="16x9">
    <div id="text-container">
        <h2 class="title">{venue.venue.name}</h2>
        <p class="location"><i class="fas fa-map-marker"></i>
                            <!-- {venue.venue.location.formattedAddress[0]}<br> -->
                            {venue.venue.location.formattedAddress[1]}<br></p>
   
    </div>
 <button>more</button>
</div>


{/each}
   
    

<style>
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
    border-radius: 3px;
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
           















