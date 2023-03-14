const baseUrl = "https://miksepokemonapi.azurewebsites.net/api/pokemons"

Vue.createApp({
    data() {
        return {
            pokemons: [],
            amountToShow: null,
            nameToGetBy: "",
            singlePokemon: null,
            deleteId: null,
            deleteMessage: "",
            addData: { name: "", level: null, pokeDex: null, pType: "", sType: null},
            addMessage: "",
            updateData: { id: null, name: "", level: null, pokeDex: null, pType: "", sType: null},
            updateMessage: "",
        }
    },
    methods: {
        getAllPokemons() {
            this.helperGetAndShow(baseUrl)
        },
        getWithFilters(name, amount) {
            var customConfig = {
                headers: {
                  amount: amount,
                }
              }
            const url = baseUrl + "?namefilter=" + name
            this.helperGetAndShow(url, customConfig)
        },
        /*
        getByPType() {
        },
        getBySType() {
        },*/
        async helperGetAndShow(url, config) {
            try {
                const response = await axios.get(url, config)
                this.pokemons = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getById(id) {
            const url = baseUrl + "/" + id
            try {
                const response = await axios.get(url)
                this.singlePokemon = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async deletePokemon(deleteId) {
            const url = baseUrl + "/" + deleteId
            try {
                response = await axios.delete(url)
                this.deleteMessage = response.status + " " + response.statusText
                this.getAllPokemons()
            } catch (ex) {
                alert(ex.message)
            }
        },
        async addPokemon() {
            try {
                response = await axios.post(baseUrl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllPokemons
            } catch (ex) {
                alert(ex.message)
            }
        },
        async updatePokemon() {
            const url = baseUrl + "/" + this.updateData.id
            try {
                response = await axios.put(url, this.updateData)
                this.updateMessage = "response " + response.status + " " + response.statusText
                this.getAllPokemons()
            } catch (ex) {
                alert(ex.message)
            }
        }
    }
}).mount(("#app"))