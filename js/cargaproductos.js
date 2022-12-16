//consumir json para tarjetas de productos

const { createApp } = Vue

const appM=createApp({//fragancias de damas
  data() {
    return {
      fragM: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.fragM=data
                this.cargando=false  
            })

    }
  },
  created(){
  this.fetchData("http://romina.pythonanywhere.com/damas") 
  }
}).mount('#appM')



const appH=createApp({//fragancias de caballeros
  data() {
    return {
      fragH: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
              this.fragH=data  
              this.cargando=false
              }
            )
    }
  },
  created(){
  this.fetchData("http://romina.pythonanywhere.com/caballeros") 
  }
}).mount('#appH')



const appN=createApp({//fragancias de niños
  data() {
    return {
      fragN: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.fragN=data
                this.cargando=false
            })

    }
  },
  created(){
  this.fetchData("http://romina.pythonanywhere.com/ni%C3%B1os") 
  }
}).mount('#appN')



const appMaq=createApp({//maquillaje
  data() {
    return {
      maq: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.maq=data
                this.cargando=false
            })

    }
  },
  created(){
  this.fetchData("http://romina.pythonanywhere.com/maquillajes") 
  }
}).mount('#appMaq')



const appP=createApp({//promociones
  data() {
    return {
      prom: [],
      cargando:true
    }
  },
  methods: {
    fetchData(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => { 
                this.prom=data
                this.cargando=false
            })

    }
  },
  created(){
  this.fetchData("http://romina.pythonanywhere.com/promos") 
  }
}).mount('#appP')


/*https://ro-garzon.github.io/json-proyecto-eclat/productos.json*/