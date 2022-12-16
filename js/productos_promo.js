if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                promos: [],
                errored: false,
                loading: true,
                url: "http://romina.pythonanywhere.com/promos"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.promos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(promo) {
                const url = 'http://romina.pythonanywhere.com/promos/' + promo;
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
