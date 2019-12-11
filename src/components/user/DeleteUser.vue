<template lang="html">
    
    <div class="container">

        <div class="row">

            <div class = "col text-left">

                <h2>¿Seguro que desea eliminar el siguiente Usuario?</h2>

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
                                    <input type="text"  name="nombre" class="form-control" v-model.trim="form.Nombre" disabled>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Apellido Paterno </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="ape_p" class="form-control" v-model.trim="form.ApellidoPaterno" disabled>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Apellido Materno </label>
                                <div class="col-sm-6">
                                    <input type="text"  name="ape_m" class="form-control" v-model.trim="form.ApellidoMaterno" disabled>
                                </div>
                            </div>

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Edad</label>
                                <div class="col-sm-6">
                                    <input type="number"  name="Edad" class="form-control" v-model.trim="form.Edad" disabled>
                                </div>
                            </div>

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Sexo</label>
                                <div class="col-sm-6">
                                    <input type="text"  name="Sexo" class="form-control" v-model.trim="form.Sexo" disabled>
                                </div>
                            </div>

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Dirección</label>
                                <div class="col-sm-6">
                                    <input type="text"  name="Direccion" class="form-control" v-model.trim="form.Direccion" disabled>
                                </div>
                            </div>

                              <div class="form-group row">
                                <label for="title" class="col-sm-2 col-form-label">Carrera</label>
                                <div class="col-sm-6">
                                    <input type="text"  name="Carrera" class="form-control" v-model.trim="form.Carrera" disabled>
                                </div>
                            </div>
                            <br>
                            <div class="rows">
                                <div class="col text-left">
                                    <b-button size="sm" type="submit" variant="outline-success">Eliminar</b-button>
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

            const path = `http://ec2-54-205-38-170.compute-1.amazonaws.com:8000/api/v1/users/${this.userId}/`;

            axios.delete(path, this.form).then((response) =>{
                console.log(response.data)
                swal("Usuario Eliminado Exitosamente", "", "success")
                location.href = '/users'
               
            })
            .catch((error) =>{
                swal("Ha ocurrido un error. Intentalo mas tarde", "", "error")
                console.log(error)
            })
        },

        getUser(){
            const path = `http://ec2-54-205-38-170.compute-1.amazonaws.com:8000/api/v1/users/${this.userId}/`;

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