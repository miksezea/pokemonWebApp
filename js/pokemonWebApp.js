const baseUrl = "https://miksepokemonapi.azurewebsites.net/api/pokemons"

Vue.createApp({
    data() {
        return {
            pokemons: [],
            singlePokemon: null,
            typeToGetBy: "",
            deleteId: 0,
            deleteMessage: "",
            addData: { name: "", level: 0, pokeDex: 0, Ptype: "", Stype: null},
            addMessage: "",
            updateData: { id: 0, name: "", level: 0, pokeDex: 0, Ptype: "", Stype: null},
            updateMessage: ""

        }
    },
    methods: {
        getAllPokemons() {
            this.helperGetAndShow(baseUrl)
        },
        getByPType() {

        },
        getBySType() {

        },
        async helperGetAndShow(url) {
            try {
                const response = await axios.get(url)
                this.pokemons = await response.data
            } catch (ex) {
                alert(ex.message)
            }
        },
        async getById(id) {
            
        },
        async deleteCar(deleteId) {

        },
        async addCar() {

        },
        async updateCar() {

        }
    }

}).mount(("#app"))