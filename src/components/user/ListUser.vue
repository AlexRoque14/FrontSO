<template lang="html">
    <div class="container">
        <div class="row">
            <div class = "col text-left">
                <h2>Listado de Usuarios</h2>
                <b-button size="sm" variant="success"    :to="{ name: 'NuevoUser'}" >Nuevo Usuario</b-button>
                <label style="visibility: hidden">'      '</label>
                <b-button size="sm" variant="secondary"  @click="getUsers()">Todos</b-button>
                 <label style="visibility: hidden">'.............................................'</label>
                <b-button size="sm" variant="danger"     @click="logout()">Cerrar sesión</b-button><br><br>
               
                <div>
                <b-form inline @submit="ed">
                  <label class="sr-only" for="inline-form-input-username">Edad: </label>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <input v-model ="form.edad" id="inline-form-input-username" class="form-control" placeholder="Edad"></input>
                  </b-input-group>
                  <b-button type="submit" variant="success">Filtrar</b-button>
                </b-form>
                </div> <br>
                <b-form inline @submit="nom">
                  <label class="sr-only" for="inline-form-input-username">Nombre: </label>
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                    <input v-model ="form.nombre" id="inline-form-input-username" class="form-control" placeholder="Nombre"></input>
                  </b-input-group>
                  <b-button type="submit" variant="primary">Filtrar</b-button>
                </b-form>
                <br><br>
                <label style="visibility: hidden">'      '</label>
                <b-button size="sm" variant="primary"    @click="ids()">IDS</b-button>
                <label style="visibility: hidden">'     '</label>
                <b-button size="sm" variant="primary"    @click="energia()">ENERGIA</b-button>
                <label style="visibility: hidden">'     '</label>
                <b-button size="sm" variant="primary"    @click="petrolera()">PETROLERA</b-button>
                <label style="visibility: hidden">'     '</label>
                <b-button size="sm" variant="primary"    @click="biomedica()">BIOMEDICA</b-button>
                <br><br>
                <div class="col-md-12">
                  <b-table striped hover :items="users" :fields = "fields" >
                    <template v-slot:cell(action)="data">
                      <b-button size="sm" variant="warning" :to="{ name: 'UserEdit' , params: {userId: data.item.id}}" >Editar</b-button>
                      <b-button size="sm" variant="danger"  :to="{ name: 'UserDelete' , params: {userId: data.item.id}}">Eliminar</b-button>
                    </template> 
                  </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

export default {
  data() {
    return {
      users: [],
      user: [],
      fields: [
        { key: "Nombre", label: "Nombre" },
        { key: "ApellidoPaterno", label: "Apellido Paterno" },
        { key: "ApellidoMaterno", label: "Apellido Materno" },
        { key: "Edad", label: "Edad" },
        { key: "Sexo", label: "Sexo" },
        { key: "Carrera", label: "Carrera" },
        { key: "action", label: "Acción" }
      ],
      form : {
        edad: '',
        nombre: ''
      },
      token: "",
      edd: false
    };
  },
  methods: {

    ed(evt) {
      evt.preventDefault();

      this.users = this.users.filter((user) => user.Edad.includes(this.form.edad));
      console.log(this.users);
      alert(this.users)

    },
     nom(evt) {
      evt.preventDefault();
      this.users = this.users.filter((user) => user.Nombre.includes(this.form.nombre));
      console.log(this.users);
      alert(this.users)
    },

    getUsers() {
      this.token = localStorage.getItem("token");
      console.log("Token: ", this.token);
      const path =
        "http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/users/?Token=" +
        this.token;
      axios
        .get(path)
        .then(response => {
          console.log(response.data);
          this.users = response.data;
          this.user = this.users;
        })
        .catch(error => {
          console.log(error);
        });
    },

    ids() {
      this.token = localStorage.getItem("token");
      console.log("Token: ", this.token);
      const path =
        "http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/IDS/?Token=" +
        this.token;this.users
      axios
        .get(path)
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    energia() {
      this.token = localStorage.getItem("token");
      console.log("Token: ", this.token);
      const path =
        "http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/ENERGIA/?Token=" +
        this.token;
      axios
        .get(path)
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

      petrolera() {
      this.token = localStorage.getItem("token");
      console.log("Token: ", this.token);
      const path =
        "http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/PETROLERA/?Token=" +
        this.token;
      axios
        .get(path)
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

      biomedica() {
      this.token = localStorage.getItem("token");
      console.log("Token: ", this.token);
      const path =
        "http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/BIOMEDICA/?Token=" +
        this.token;
      axios
        .get(path)
        .then(response => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

   
    logout() {
      localStorage.setItem("token", 0);
      swal("Correcto", "cierre de sesión exitoso", "success");
      location.href = "/";
    },

    pgValid() {
      if (localStorage.getItem("token") == 0) {
        swal("Error", "Usuario o contraseñas incorrectas", "error");
        location.href = "/";
      }
      //  this.getUsers();
      
    }
  },

  mounted() {
    this.pgValid();
    this.getUsers()
  }
};
</script>