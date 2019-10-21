<template lang="html">
  <div v-on:click="handleClick" class="player-cards">
    <!-- Player Card {{card}} -->
    <img class="player-card" :src="card.front_url">
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  props: ['card'],
  methods: {
    handleClick() {
      eventBus.$emit('player-card-clicked', this.card);
    }
  },


  // // enable draggables to be dropped into this
  // interact('.player-card').dropzone({
  //   // only accept elements matching this CSS selector
  //   accept: '#yes-drop',
  //   // Require a 75% element overlap for a drop to be possible
  //   overlap: 0.75,
  //
  //   // listen for drop related events:
  //
  //   ondropactivate: function (event) {
  //     // add active dropzone feedback
  //     event.target.classList.add('drop-active')
  //   },
  //   ondragenter: function (event) {
  //     var draggableElement = event.relatedTarget
  //     var dropzoneElement = event.target
  //
  //     // feedback the possibility of a drop
  //     dropzoneElement.classList.add('drop-target')
  //     draggableElement.classList.add('can-drop')
  //     draggableElement.textContent = 'Dragged in'
  //   },
  //   ondragleave: function (event) {
  //     // remove the drop feedback style
  //     event.target.classList.remove('drop-target')
  //     event.relatedTarget.classList.remove('can-drop')
  //     event.relatedTarget.textContent = 'Dragged out'
  //   },
  //   ondrop: function (event) {
  //     event.relatedTarget.textContent = 'Dropped'
  //   },
  //   ondropdeactivate: function (event) {
  //     // remove active dropzone feedback
  //     event.target.classList.remove('drop-active')
  //     event.target.classList.remove('drop-target')
  //   }
  // })
  //
  // interact('.drag-drop')
  // .draggable({
  //   inertia: true,
  //   modifiers: [
  //     interact.modifiers.restrictRect({
  //       restriction: 'parent',
  //       endOnly: true
  //     })
  //   ],
  //   autoScroll: true,
  //   // dragMoveListener from the dragging demo above
  //   onmove: dragMoveListener
  // })


}

</script>

<style lang="css" scoped>
.player-cards {
  display: inline-block;
  flex-wrap: wrap;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: center;
}

.player-card {
  width: 90px;
  height: auto;
  cursor: pointer;
  box-shadow: 4px 4px 1px rgba(0, 0, 0, 0.6);
  margin: 5px;
  transition: all .3s ease-in-out;
  /* transform-origin: center; */
}

.player-card:hover {
  overflow: hidden;
  box-shadow: 0px 0px 0px grey;
  transform: scale(1.9);
  margin-left: 40px;
  margin-right: 40px;
}

</style>
