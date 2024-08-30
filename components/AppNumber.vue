<script lang="ts" setup>

const num = useState('random', () => Math.random())

const refreshNum = () => {
  num.value = Math.random()
}

</script>

<template>
  <div>
    <div>
      <p>Number: {{ num }}</p>
      <button @click="refreshNum">クリック</button>
    </div>
  </div>
</template>

<style scoped lang="css">
.Margin {
  margin-top: 10px;
}

.SampleData {
  background-color: #ffeeed;
}

.ToLogin {
  background-color: #ffeeed;
}
</style>
