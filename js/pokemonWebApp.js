const baseUrl = "https://miksepokemonapi.azurewebsites.net/api/pokemons"

Vue.createApp({
    data() {
        return {
            pokemons: [],
            singlePokemon: null,
            nameToGetBy: "",
            deleteId: 0,
            deleteMessage: "",
            addData: { name: "", level: 0, pokeDex: 0, ptype: "", stype: null},
            addMessage: "",
            updateData: { id: 0, name: "", level: 0, pokeDex: 0, ptype: "", stype: null},
            updateMessage: ""

        }
    },
    methods: {
        getAllPokemons() {
            this.helperGetAndShow(baseUrl)
        },
        getByName(name) {
            const url = baseUrl + "?name=" + name
            this.helperGetAndShow(url)
        },
        /*getByPType() {

        },
        getBySType() {

        },*/
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
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