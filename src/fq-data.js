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
});