<template lang="html">
    
    <div class="container">

        <div class="row">

            <div class = "col text-left">
                <h2>Inicio de sesión</h2>
                </div>
            </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class = "card-body">
                        <form @submit="onSubmit" >
                            
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Username </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="nombre" class="form-control" v-model.trim="form.username">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-6">
                                    <input type="password"  name="password" class="form-control" v-model.trim="form.password">
                                </div>
                            </div>
                            <br>
                            <div class="rows">
                                <div class="col text-left">
                                    <b-button size="sm" type="submit" variant="outline-success">Iniciar Sesión</b-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import axios from "axios";
import swal from "sweetalert";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      const path = `http://ec2-54-205-38-170.compute-1.amazonaws.com/api/v1/login`;
      const path1 = `http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/generate_token`;

      axios
        .post(path1, this.form)
        .then(response => {
          console.log("token:" , response);
          swal("Correcto", "Inicio de sesión exitoso", "success")
          axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrf_token;
          localStorage.setItem('token', response.data.token)
          location.href = '/users'
        })
        .catch(error => {
          swal("Ha ocurrido un error. Intentalo mas tarde", "", "error");
          console.log(error);
        });
    },
  },
};
</script>