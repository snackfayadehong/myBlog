<template>
  <button class="btn" @click="backTop"></button>
</template>

<script setup>
//props
const props = defineProps({
  scrollTopValue: {
    type: Number,
    required: true,
    default: 0,
  },
});
//emit
const emit = defineEmits(["update:scrollTopValue"]);
//methods
const backTop = () => {
  if (props.scrollTopValue >= 800) {
    emit("update:scrollTopValue", 0);
  }
};
</script>

<style lang="less" scoped>
.backToTop-container-active-enter {
  transition: opacity 0.3s ease;
}
.backToTop-container-active-leave {
  transition: opacity 0.2s inherit;
}

@keyframes scroll-up {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
    opacity: 0.3;
  }
  40% {
    transform: translateY(-30px);
    opacity: 1;
  }
  60% {
    transform: translateY(-15px);
    opacity: 0.7;
  }
}
.btn {
  position: fixed;
  right: 10em;
  bottom: 6em;
  width: 3.5em;
  height: 3.5em;
  display: inline-block;
  border-radius: 33%;
  transition: all 0.2s;
  border: none;
  background-color: white;
  animation: scroll-up 2s infinite;
}
.btn:hover {
  animation: none;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::before,
.btn::after {
  width: 25px;
  height: 7px;
  border-radius: 3px;
  background: orange;
  position: absolute;
  content: "";
}
.btn::before {
  transform: rotate(-45deg) translate(0, -50%);
  left: 0.4rem;
}

.btn::after {
  transform: rotate(45deg) translate(0, -50%);
  right: 0.4rem;
}
</style>
