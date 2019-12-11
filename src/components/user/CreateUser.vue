<template lang="html">
    
    <div class="container">

        <div class="row">

            <div class = "col text-left">

                <h2>Crear Usuario</h2>

                </div>
            </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class = "card-body">
                        <form @submit="onSubmit">

                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Nombre </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="nombre" class="form-control" v-model.trim="form.Nombre">
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Apellido Paterno </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="ape_p" class="form-control" v-model.trim="form.ApellidoPaterno">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Apellido Materno </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="ape_m" class="form-control" v-model.trim="form.ApellidoMaterno">
                                </div>
                            </div>

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Edad</label>
                                <div class="col-sm-6">
                                    <input type="number"  name="Edad" class="form-control" v-model.trim="form.Edad">
                                </div>
                            </div>

                               <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Sexo</label>
                                <div class="col-sm-6">
                                <b-form-select
                                  v-model="selected1"
                                  :options="options1"
                                  class="mb-3"
                                  value-field="item"
                                  text-field="name"
                                  disabled-field="notEnabled"
                                  v-model.trim = "form.Sexo"
                                ></b-form-select>
                                </div>
                            </div> 
                       

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Dirección</label>
                                <div class="col-sm-6">
                                    <input type="text"  name="Direccion" class="form-control" v-model.trim="form.Direccion">
                                </div>
                            </div>

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Carrera</label>
                                <div class="col-sm-6">
                                  <b-form-select
                                  v-model="selected"
                                  :options="options"
                                  class="mb-3"
                                  value-field="item2"
                                  text-field="name2"
                                  disabled-field="notEnabled"
                                  v-model.trim = "form.Carrera"
                                ></b-form-select>
                                </div>
                            </div>
                            <br>
                            <div class="rows">
                                <div class="col text-left">
                                    <b-button size="sm" type="submit" variant="outline-success">Guardar</b-button>
                                    <b-button size="sm" type="submit" variant="danger" href="/users">Cancelar</b-button>
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
       selected1: 'A',
        options1: [
          { item: 'Masculino', name: 'Masculino' },
          { item: 'Femenino', name: 'Femenino' },
        ],

        selected: null,
        options: [
          { item2: 'IDS', name2: 'IDS' },
          { item2: 'ENERGIA', name2: 'ENERGIA' },
          { item3: 'PETROLERA', name2: 'PETROLERA'},
          { item4: 'BIOMEDICA', name2: 'BIOMEDICA'},
        ],
           
      form: {
        Nombre: "",
        ApellidoPaterno: "",
        ApellidoMaterno: "",
        Edad: "",
        Sexo: "",
        Direccion: "",
        Carrera: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      console.log(this.form)
      const path = `http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/users/`;
      axios
        .post(path, this.form)
        .then(response => {
          console.log(response.data);
          swal("Usuario Creado Exitosamente", "", "success");
          location.href = "/users";
        })
        .catch(error => {
          swal("Ha ocurrido un error. Intentalo mas tarde", "", "error");
          console.log(error);
        });
    },
     pgValid(){
      if(localStorage.getItem('token') == 0){
        swal("Error", "Usuario o contraseña incorrectas", "error")
        location.href = '/'
      }
    }
  },

  mounted(){
    this.pgValid();
  }
};
</script>