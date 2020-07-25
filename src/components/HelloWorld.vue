<template>
  <div>
    <a href="#" @click.prevent="signout">登出</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    signout(){
      const api = 'https://vue-course-api.hexschool.io/logout';
      const vm = this;
      vm.$http.post(api).then((response)=>{
        if(response.data.success){
          vm.$router.push('/login')
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
