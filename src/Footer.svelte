 <div id="contain">
 <div id="left">
<h1>BREWFINDER</h1>
</div>
<div id="right">
<div>
<i class="fas fa-beer"></i><i class="fab fa-twitter"></i><i class="fab fa-instagram-square"></i>
</div>


</div>
 </div>

 <style>
   @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

  h1 {
    padding: 1em;
    font-size: 4em;
    color: #C5B18B;
  }

  #left {
    grid-area: left;
  }

  #right {
   
    grid-area: right;
    text-align: right;
    padding-right: 2em;
  }

  .fas,
  .fab {
    color: #C5B18B;
    line-height: 4.5em;
    font-size: 36px;
    margin:1em;
  }

  #contain {
    color: white;
    display: grid;
    grid-template-columns: 30vw 70vw;
    grid-template-areas:
      "left right";


    background-color: #2B344F;
    padding: 1rem 0;

  }




   
 </style>