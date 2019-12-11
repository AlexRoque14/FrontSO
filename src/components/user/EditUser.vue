<template lang="html">
    
    <div class="container">

        <div class="row">

            <div class = "col text-left">

                <h2>Editar Usuario</h2>

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
                                    <!-- <input type="text"  name="Sexo" class="form-control" v-model.trim="form.Sexo"> -->
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
                                    <!-- <input type="text"  name="Carrera" class="form-control" v-model.trim="form.Carrera"> -->
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
                                    <b-button size="sm" type="submit" variant="outline-warning">Actualizar</b-button>
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
import axios from 'axios'
import swal from 'sweetalert'
export default {
    data () {
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
            userId: this.$route.params.userId,
            form: {
                Nombre: '',
                ApellidoPaterno: '',
                ApellidoMaterno: '',
                Edad: '',
                Sexo: '',
                Direccion: '',
                Carrera: '',
            }
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            const path = `http://ec2-54-205-38-170.compute-1.amazonaws.com/api/v1/users/${this.userId}/`;
            axios.put(path, this.form).then((response) =>{
                console.log(response.data)
                swal("Usuario Actualizado Exitosamente", "", "success")
                location.href = '/users'
            })
            .catch((error) =>{
                swal("Ha ocurrido un error. Intentalo mas tarde", "", "error")
                console.log(error)
            })
        },

        getUser(){
            const path = `http://ec2-54-205-38-170.compute-1.amazonaws.com/api/v1/users/${this.userId}/`;

            axios.get(path).then((response) =>{
                console.log(response.data)
                this.form.Nombre = response.data.Nombre
                this.form.ApellidoPaterno = response.data.ApellidoPaterno
                this.form.ApellidoMaterno = response.data.ApellidoMaterno
                this.form.Edad = response.data.Edad
                this.form.Direccion = response.data.Direccion
                this.form.Sexo = response.data.Sexo
                this.form.Carrera = response.data.Carrera
               
            })
            .catch((error) =>{
                console.log(error)
            })
        },
         pgValid(){
            if(localStorage.getItem('token') == 0){
                swal("Error", "Usuario o contraseñas incorrectas", "error")
                location.href = '/'
                }
            }
    },

        created(){
            this.pgValid();
            this.getUser();
        }
}
</script>