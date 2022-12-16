if (document.getElementById("app")) {
    const { createApp } = Vue
 
    createApp({
        data() {
            return {
                damas: [],
                errored: false,
                loading: true,
                url: "http://romina.pythonanywhere.com/damas"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.damas = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(dama) {
                const url = 'http://romina.pythonanywhere.com/damas/' + dama;
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
