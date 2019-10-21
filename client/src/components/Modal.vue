<template>
    <div class="modal" v-if="showModal">
        <div v-if="showModal" class="modal-content">
            <div>
                <slot name="header"></slot>
            </div>
            <div>
                <slot name="body"></slot>
            </div>
            <div>
                <button class="button" @click="closeModal">Close</button>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'app-modal',
    props: {
        showModal: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('clicked');
        }
    },
  };
</script>
<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.button {
  margin: 30px;
  font-size: 15px;
  transition: 0.1s ease-in-out;
  padding: 5px;
  border-radius: 5px;
  background-color: lightgrey;
  box-shadow: 3px 3px 2px grey;
}

.button:focus {
  outline: 0;
}

.button:active {
  box-shadow: 1px 1px 0.5px grey;
  transform: translateY(4px);
}

</style>
