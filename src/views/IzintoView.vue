<template>
  <div class="wrapper">
    <h1 class="title">Izinto</h1>
    <div class="content">
      <div
        v-for="(box, idx) in boxes"
        :key="box.text + idx"
        class="box"
        v-show="box.visible"
        :style="{ gridColumn: box.col, gridRow: box.row }"
      >
        {{ box.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

function createBoxes() {
  const letters = 'ABCDEFGHI'
  const arr = []
  for (let i = 0; i < 9; i++) {
    const col = (i % 3) + 1
    const row = Math.floor(i / 3) + 1
    arr.push({ text: letters[i], position: i, col, row, visible: false })
  }
  return arr
}

const boxes = ref(createBoxes())

onMounted(() => {
  boxes.value.forEach((b, i) => {
    setTimeout(() => {
      b.visible = true
    }, i * 120)
  })
})
</script>

<style scoped>
.wrapper {
  height: 100%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  box-sizing: border-box;
}

.title {
  align-self: center;
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.content {
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  box-sizing: border-box;
  min-height: 200px;
}

.box {
  width: 100%;
  height: 100%;
  min-width: 80px;
  min-height: 80px;
  background: #f6f7fb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #222;
  box-shadow: 0 2px 6px rgba(16, 24, 40, 0.06);
  /* visual polish when revealed */
  transition:
    transform 200ms ease,
    opacity 200ms ease;
  transform-origin: center;
  opacity: 1;
}

@media (max-width: 640px) {
  .box {
    font-size: 2rem;
  }
}
</style>
