webpackJsonp([1],{"9M+g":function(t,e){},Jmt5:function(t,e){},L3Ck:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=o("VU/8")({name:"App"},a,!1,function(t){o("Pe99")},null,null).exports,i=o("/ocq"),n={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){o("L3Ck")},"data-v-16cfaa73",null).exports;var l=o("mtWM"),m=o.n(l),c=o("thjQ"),d=o.n(c);m.a.defaults.headers.common.Authorization=localStorage.getItem("token");var u={data:function(){return{users:[],user:[],fields:[{key:"Nombre",label:"Nombre"},{key:"ApellidoPaterno",label:"Apellido Paterno"},{key:"ApellidoMaterno",label:"Apellido Materno"},{key:"Edad",label:"Edad"},{key:"Sexo",label:"Sexo"},{key:"Carrera",label:"Carrera"},{key:"action",label:"Acción"}],form:{edad:"",nombre:""},token:"",edd:!1}},methods:{ed:function(t){var e=this;t.preventDefault(),this.users=this.users.filter(function(t){return t.Edad.includes(e.form.edad)}),console.log(this.users),alert(this.users)},nom:function(t){var e=this;t.preventDefault(),this.users=this.users.filter(function(t){return t.Nombre.includes(e.form.nombre)}),console.log(this.users),alert(this.users)},getUsers:function(){var t=this;this.token=localStorage.getItem("token"),console.log("Token: ",this.token);var e="http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/users/?Token="+this.token;m.a.get(e).then(function(e){console.log(e.data),t.users=e.data,t.user=t.users}).catch(function(t){console.log(t)})},ids:function(){var t=this;this.token=localStorage.getItem("token"),console.log("Token: ",this.token);var e="http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/IDS/?Token="+this.token;this.users,m.a.get(e).then(function(e){console.log(e.data),t.users=e.data}).catch(function(t){console.log(t)})},energia:function(){var t=this;this.token=localStorage.getItem("token"),console.log("Token: ",this.token);var e="http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/ENERGIA/?Token="+this.token;m.a.get(e).then(function(e){console.log(e.data),t.users=e.data}).catch(function(t){console.log(t)})},petrolera:function(){var t=this;this.token=localStorage.getItem("token"),console.log("Token: ",this.token);var e="http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/PETROLERA/?Token="+this.token;m.a.get(e).then(function(e){console.log(e.data),t.users=e.data}).catch(function(t){console.log(t)})},biomedica:function(){var t=this;this.token=localStorage.getItem("token"),console.log("Token: ",this.token);var e="http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/BIOMEDICA/?Token="+this.token;m.a.get(e).then(function(e){console.log(e.data),t.users=e.data}).catch(function(t){console.log(t)})},logout:function(){localStorage.setItem("token",0),d()("Correcto","cierre de sesión exitoso","success"),location.href="/"},pgValid:function(){0==localStorage.getItem("token")&&(d()("Error","Usuario o contraseñas incorrectas","error"),location.href="/")}},mounted:function(){this.pgValid(),this.getUsers()}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col text-left"},[o("h2",[t._v("Listado de Usuarios")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"success",to:{name:"NuevoUser"}}},[t._v("Nuevo Usuario")]),t._v(" "),o("label",{staticStyle:{visibility:"hidden"}},[t._v("'      '")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(e){return t.getUsers()}}},[t._v("Todos")]),t._v(" "),o("label",{staticStyle:{visibility:"hidden"}},[t._v("'.............................................'")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.logout()}}},[t._v("Cerrar sesión")]),o("br"),o("br"),t._v(" "),o("div",[o("b-form",{attrs:{inline:""},on:{submit:t.ed}},[o("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username"}},[t._v("Edad: ")]),t._v(" "),o("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.edad,expression:"form.edad"}],staticClass:"form-control",attrs:{id:"inline-form-input-username",placeholder:"Edad"},domProps:{value:t.form.edad},on:{input:function(e){e.target.composing||t.$set(t.form,"edad",e.target.value)}}})]),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"success"}},[t._v("Filtrar")])],1)],1),t._v(" "),o("br"),t._v(" "),o("b-form",{attrs:{inline:""},on:{submit:t.nom}},[o("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username"}},[t._v("Nombre: ")]),t._v(" "),o("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nombre,expression:"form.nombre"}],staticClass:"form-control",attrs:{id:"inline-form-input-username",placeholder:"Nombre"},domProps:{value:t.form.nombre},on:{input:function(e){e.target.composing||t.$set(t.form,"nombre",e.target.value)}}})]),t._v(" "),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Filtrar")])],1),t._v(" "),o("br"),o("br"),t._v(" "),o("label",{staticStyle:{visibility:"hidden"}},[t._v("'      '")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.ids()}}},[t._v("IDS")]),t._v(" "),o("label",{staticStyle:{visibility:"hidden"}},[t._v("'     '")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.energia()}}},[t._v("ENERGIA")]),t._v(" "),o("label",{staticStyle:{visibility:"hidden"}},[t._v("'     '")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.petrolera()}}},[t._v("PETROLERA")]),t._v(" "),o("label",{staticStyle:{visibility:"hidden"}},[t._v("'     '")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(e){return t.biomedica()}}},[t._v("BIOMEDICA")]),t._v(" "),o("br"),o("br"),t._v(" "),o("div",{staticClass:"col-md-12"},[o("b-table",{attrs:{striped:"",hover:"",items:t.users,fields:t.fields},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[o("b-button",{attrs:{size:"sm",variant:"warning",to:{name:"UserEdit",params:{userId:e.item.id}}}},[t._v("Editar")]),t._v(" "),o("b-button",{attrs:{size:"sm",variant:"danger",to:{name:"UserDelete",params:{userId:e.item.id}}}},[t._v("Eliminar")])]}}])})],1)],1)])])},staticRenderFns:[]},v=o("VU/8")(u,f,!1,null,null,null).exports,p={data:function(){return{selected1:"A",options1:[{item:"Masculino",name:"Masculino"},{item:"Femenino",name:"Femenino"}],selected:null,options:[{item2:"IDS",name2:"IDS"},{item2:"ENERGIA",name2:"ENERGIA"},{item3:"PETROLERA",name2:"PETROLERA"},{item4:"BIOMEDICA",name2:"BIOMEDICA"}],userId:this.$route.params.userId,form:{Nombre:"",ApellidoPaterno:"",ApellidoMaterno:"",Edad:"",Sexo:"",Direccion:"",Carrera:""}}},methods:{onSubmit:function(t){t.preventDefault();var e="http://ec2-54-205-38-170.compute-1.amazonaws.com/api/v1/users/"+this.userId+"/";m.a.put(e,this.form).then(function(t){console.log(t.data),d()("Usuario Actualizado Exitosamente","","success"),location.href="/users"}).catch(function(t){d()("Ha ocurrido un error. Intentalo mas tarde","","error"),console.log(t)})},getUser:function(){var t=this,e="http://ec2-54-205-38-170.compute-1.amazonaws.com/api/v1/users/"+this.userId+"/";m.a.get(e).then(function(e){console.log(e.data),t.form.Nombre=e.data.Nombre,t.form.ApellidoPaterno=e.data.ApellidoPaterno,t.form.ApellidoMaterno=e.data.ApellidoMaterno,t.form.Edad=e.data.Edad,t.form.Direccion=e.data.Direccion,t.form.Sexo=e.data.Sexo,t.form.Carrera=e.data.Carrera}).catch(function(t){console.log(t)})},pgValid:function(){0==localStorage.getItem("token")&&(d()("Error","Usuario o contraseñas incorrectas","error"),location.href="/")}},created:function(){this.pgValid(),this.getUser()}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Nombre ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Nombre,expression:"form.Nombre",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"nombre"},domProps:{value:t.form.Nombre},on:{input:function(e){e.target.composing||t.$set(t.form,"Nombre",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Apellido Paterno ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.ApellidoPaterno,expression:"form.ApellidoPaterno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"ape_p"},domProps:{value:t.form.ApellidoPaterno},on:{input:function(e){e.target.composing||t.$set(t.form,"ApellidoPaterno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Apellido Materno ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.ApellidoMaterno,expression:"form.ApellidoMaterno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"ape_m"},domProps:{value:t.form.ApellidoMaterno},on:{input:function(e){e.target.composing||t.$set(t.form,"ApellidoMaterno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Edad")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Edad,expression:"form.Edad",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"number",name:"Edad"},domProps:{value:t.form.Edad},on:{input:function(e){e.target.composing||t.$set(t.form,"Edad",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Sexo")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("b-form-select",{staticClass:"mb-3",attrs:{options:t.options1,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.form.Sexo,callback:function(e){t.$set(t.form,"Sexo","string"==typeof e?e.trim():e)},expression:"form.Sexo"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Dirección")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Direccion,expression:"form.Direccion",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"Direccion"},domProps:{value:t.form.Direccion},on:{input:function(e){e.target.composing||t.$set(t.form,"Direccion",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Carrera")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("b-form-select",{staticClass:"mb-3",attrs:{options:t.options,"value-field":"item2","text-field":"name2","disabled-field":"notEnabled"},model:{value:t.form.Carrera,callback:function(e){t.$set(t.form,"Carrera","string"==typeof e?e.trim():e)},expression:"form.Carrera"}})],1)]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"rows"},[o("div",{staticClass:"col text-left"},[o("b-button",{attrs:{size:"sm",type:"submit",variant:"outline-warning"}},[t._v("Actualizar")]),t._v(" "),o("b-button",{attrs:{size:"sm",type:"submit",variant:"danger",href:"/users"}},[t._v("Cancelar")])],1)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col text-left"},[e("h2",[this._v("Editar Usuario")])])])}]},g=o("VU/8")(p,b,!1,null,null,null).exports,C={data:function(){return{userId:this.$route.params.userId,form:{Nombre:"",ApellidoPaterno:"",ApellidoMaterno:"",Edad:"",Sexo:"",Direccion:"",Carrera:""}}},methods:{onSubmit:function(t){t.preventDefault();var e="http://ec2-54-205-38-170.compute-1.amazonaws.com:8000/api/v1/users/"+this.userId+"/";m.a.delete(e,this.form).then(function(t){console.log(t.data),d()("Usuario Eliminado Exitosamente","","success"),location.href="/users"}).catch(function(t){d()("Ha ocurrido un error. Intentalo mas tarde","","error"),console.log(t)})},getUser:function(){var t=this,e="http://ec2-54-205-38-170.compute-1.amazonaws.com:8000/api/v1/users/"+this.userId+"/";m.a.get(e).then(function(e){console.log(e.data),t.form.Nombre=e.data.Nombre,t.form.ApellidoPaterno=e.data.ApellidoPaterno,t.form.ApellidoMaterno=e.data.ApellidoMaterno,t.form.Edad=e.data.Edad,t.form.Direccion=e.data.Direccion,t.form.Sexo=e.data.Sexo,t.form.Carrera=e.data.Carrera}).catch(function(t){console.log(t)})},pgValid:function(){0==localStorage.getItem("token")&&(d()("Error","Usuario o contraseñas incorrectas","error"),location.href="/")}},created:function(){this.pgValid(),this.getUser()}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Nombre ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Nombre,expression:"form.Nombre",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"nombre",disabled:""},domProps:{value:t.form.Nombre},on:{input:function(e){e.target.composing||t.$set(t.form,"Nombre",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Apellido Paterno ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.ApellidoPaterno,expression:"form.ApellidoPaterno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"ape_p",disabled:""},domProps:{value:t.form.ApellidoPaterno},on:{input:function(e){e.target.composing||t.$set(t.form,"ApellidoPaterno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Apellido Materno ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.ApellidoMaterno,expression:"form.ApellidoMaterno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"ape_m",disabled:""},domProps:{value:t.form.ApellidoMaterno},on:{input:function(e){e.target.composing||t.$set(t.form,"ApellidoMaterno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Edad")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Edad,expression:"form.Edad",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"number",name:"Edad",disabled:""},domProps:{value:t.form.Edad},on:{input:function(e){e.target.composing||t.$set(t.form,"Edad",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Sexo")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Sexo,expression:"form.Sexo",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"Sexo",disabled:""},domProps:{value:t.form.Sexo},on:{input:function(e){e.target.composing||t.$set(t.form,"Sexo",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Dirección")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Direccion,expression:"form.Direccion",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"Direccion",disabled:""},domProps:{value:t.form.Direccion},on:{input:function(e){e.target.composing||t.$set(t.form,"Direccion",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Carrera")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Carrera,expression:"form.Carrera",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"Carrera",disabled:""},domProps:{value:t.form.Carrera},on:{input:function(e){e.target.composing||t.$set(t.form,"Carrera",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"rows"},[o("div",{staticClass:"col text-left"},[o("b-button",{attrs:{size:"sm",type:"submit",variant:"outline-success"}},[t._v("Eliminar")]),t._v(" "),o("b-button",{attrs:{size:"sm",type:"submit",variant:"danger",href:"/users"}},[t._v("Cancelar")])],1)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col text-left"},[e("h2",[this._v("¿Seguro que desea eliminar el siguiente Usuario?")])])])}]},h=o("VU/8")(C,_,!1,null,null,null).exports,E={data:function(){return{selected1:"A",options1:[{item:"Masculino",name:"Masculino"},{item:"Femenino",name:"Femenino"}],selected:null,options:[{item2:"IDS",name2:"IDS"},{item2:"ENERGIA",name2:"ENERGIA"},{item3:"PETROLERA",name2:"PETROLERA"},{item4:"BIOMEDICA",name2:"BIOMEDICA"}],form:{Nombre:"",ApellidoPaterno:"",ApellidoMaterno:"",Edad:"",Sexo:"",Direccion:"",Carrera:""}}},methods:{onSubmit:function(t){t.preventDefault(),console.log(this.form);m.a.post("http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/users/",this.form).then(function(t){console.log(t.data),d()("Usuario Creado Exitosamente","","success"),location.href="/users"}).catch(function(t){d()("Ha ocurrido un error. Intentalo mas tarde","","error"),console.log(t)})},pgValid:function(){0==localStorage.getItem("token")&&(d()("Error","Usuario o contraseña incorrectas","error"),location.href="/")}},mounted:function(){this.pgValid()}},x={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Nombre ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Nombre,expression:"form.Nombre",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"nombre"},domProps:{value:t.form.Nombre},on:{input:function(e){e.target.composing||t.$set(t.form,"Nombre",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Apellido Paterno ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.ApellidoPaterno,expression:"form.ApellidoPaterno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"ape_p"},domProps:{value:t.form.ApellidoPaterno},on:{input:function(e){e.target.composing||t.$set(t.form,"ApellidoPaterno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Apellido Materno ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.ApellidoMaterno,expression:"form.ApellidoMaterno",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"ape_m"},domProps:{value:t.form.ApellidoMaterno},on:{input:function(e){e.target.composing||t.$set(t.form,"ApellidoMaterno",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Edad")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Edad,expression:"form.Edad",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"number",name:"Edad"},domProps:{value:t.form.Edad},on:{input:function(e){e.target.composing||t.$set(t.form,"Edad",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Sexo")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("b-form-select",{staticClass:"mb-3",attrs:{options:t.options1,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:t.form.Sexo,callback:function(e){t.$set(t.form,"Sexo","string"==typeof e?e.trim():e)},expression:"form.Sexo"}})],1)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Dirección")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.Direccion,expression:"form.Direccion",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"Direccion"},domProps:{value:t.form.Direccion},on:{input:function(e){e.target.composing||t.$set(t.form,"Direccion",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Carrera")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("b-form-select",{staticClass:"mb-3",attrs:{options:t.options,"value-field":"item2","text-field":"name2","disabled-field":"notEnabled"},model:{value:t.form.Carrera,callback:function(e){t.$set(t.form,"Carrera","string"==typeof e?e.trim():e)},expression:"form.Carrera"}})],1)]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"rows"},[o("div",{staticClass:"col text-left"},[o("b-button",{attrs:{size:"sm",type:"submit",variant:"outline-success"}},[t._v("Guardar")]),t._v(" "),o("b-button",{attrs:{size:"sm",type:"submit",variant:"danger",href:"/users"}},[t._v("Cancelar")])],1)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col text-left"},[e("h2",[this._v("Crear Usuario")])])])}]},w=o("VU/8")(E,x,!1,null,null,null).exports,A={data:function(){return{form:{username:"",password:""}}},methods:{onSubmit:function(t){t.preventDefault();m.a.post("http://ec2-3-83-90-221.compute-1.amazonaws.com/api/v1/generate_token",this.form).then(function(t){console.log("token:",t),d()("Correcto","Inicio de sesión exitoso","success"),m.a.defaults.headers.common["X-CSRF-TOKEN"]=t.data.csrf_token,localStorage.setItem("token",t.data.token),location.href="/users"}).catch(function(t){d()("Ha ocurrido un error. Intentalo mas tarde","","error"),console.log(t)})}}},y={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col"},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-body"},[o("form",{on:{submit:t.onSubmit}},[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Username ")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.username,expression:"form.username",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"nombre"},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"title"}},[t._v("Password")]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),t._v(" "),o("br"),t._v(" "),o("div",{staticClass:"rows"},[o("div",{staticClass:"col text-left"},[o("b-button",{attrs:{size:"sm",type:"submit",variant:"outline-success"}},[t._v("Iniciar Sesión")])],1)])])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col text-left"},[e("h2",[this._v("Inicio de sesión")])])])}]},k=o("VU/8")(A,y,!1,null,null,null).exports;r.default.use(i.a);var N=new i.a({routes:[{path:"/",name:"login",component:k},{path:"/users/nuevo",name:"NuevoUser",component:w},{path:"/users",name:"ListUser",component:v},{path:"/users/:userId/edit",name:"UserEdit",component:g},{path:"/users/:userId/delete",name:"UserDelete",component:h}],mode:"history"}),S=o("Tqaz");o("Jmt5"),o("9M+g");r.default.config.productionTip=!1,r.default.use(S.a),new r.default({el:"#app",router:N,components:{App:s},template:"<App/>"})},Pe99:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fc18220ae74050711378.js.map