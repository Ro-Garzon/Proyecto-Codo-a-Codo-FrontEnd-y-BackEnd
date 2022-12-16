if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                caballeros: [],
                errored: false,
                loading: true,
                url: "http://romina.pythonanywhere.com/caballeros"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.caballeros = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(caballero) {
                const url = 'http://romina.pythonanywhere.com/caballeros/' + caballero;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}
