if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                maquillajes: [],
                errored: false,
                loading: true,
                url: "http://romina.pythonanywhere.com/maquillajes"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.maquillajes = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(maquillaje) {
                const url = 'http://romina.pythonanywhere.com/maquillajes/' + maquillaje;
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
