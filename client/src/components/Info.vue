<template lang="html">
  <div class="info">
    <section class="header">
      <h1>Please, let me introduce you our developing team:</h1>
      <ul class="header-list">
        <div class="auri">
          <li>Aurimas Drungilas</li>
        </div>
        <div class="stan">
          <li>Stanislaus Tarnev</li>
        </div>
        <div class="adam">
          <li>Adam D. Hidvegi</li>
        </div>
      </ul>
    </section>
<section class="text">
  <h1>About the project:</h1>
  <p>Our main goal was to create a simple application, what you can use to learn a new language while having fun. It includes a quick quiz at the very beginning to make you prepared to play with our game. Right after the quiz you can have information about the rules of the game. Don't worry, they are really simple!</p>
  <p>We highly recommend you to go through the navigation bar in order from left to right to have all the information you need to play an extremely enjoyable game.</p>
  <p>Of course, you can skip a few steps at any time, on the Game page you will find reminders about the rules and a little help for the language on both sides, if you don't exactly know what to do.</p>
  <p style="font-size: 27px; font-weight: bolder;">Thank you very much for using our application and please, enjoy your time!</p>
</section>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  li {
    margin-right: 30px;
    line-height: 40px;
  }

  .header {
    padding-top: 40px;
    font-size: 21px;
  }

  .header-list {
    list-style: none;
    display: block;
    font-size: 21px;
  }

  .text {
    margin-right: 200px;
    margin-left: 200px;
    font-size: 21px;
  }

/* Aurimas underline */
  .auri, .stan, .adam {
    padding: 10px;
    display: inline-block;
  }

  .auri:after{
    position: relative;
    content: "";
    visibility: hidden;
    top:-2px;
    height: 2px;
    width: 0;
    display: block;
    transition: all 1s;
    left: 40%;
  }

  .auri:hover:after {
    background-color: #264726;
    visibility: visible;
    width: 170px;
    left: -5%;
  }

/* Stan underline */
  .stan {
    display: inline-block;
  }

  .stan:after{
    position: relative;
    content: "";
    visibility: hidden;
    top:-2px;
    height: 2px;
    width: 0;
    display: block;
    transition: all 1s;
    left: 40%;
  }

  .stan:hover:after {
    background-color: #264726;
    visibility: visible;
    width: 160px;
    left: -5%;
  }

/* Adam underline */
  .adam {
    display: inline-block;
  }

  .adam:after{
    position: relative;
    content: "";
    visibility: hidden;
    top:-2px;
    height: 2px;
    width: 0;
    display: block;
    transition: all 1s;
    left: 40%;
  }

  .adam:hover:after {
    background-color: #264726;
    visibility: visible;
    width: 160px;
    left: -5%;
  }


</style>
