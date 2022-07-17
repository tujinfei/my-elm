<template>
  <div class="Home">Home</div>
</template>

<script>
import { getAllCitys } from '@/api/home'
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  created() {
    this.getAllCitys()
  },
  mounted() {},
  methods: {
    async getAllCitys() {
      try {
        const res = await getAllCitys({ user_id: null })
        console.log('res', res)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
