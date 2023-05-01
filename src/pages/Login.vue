<template>
  <q-page padding class="row flex-center bg-purple-10">
    <q-card class="bg-white col-12 col-sm-8 col-md-4">
      <q-card-section class="text-center">
        <q-img
          src="../../public/img/banner_email.png"
          style="max-width: 500px"
          spinner-color="white"
          key="cover"
          fit="cover"
        />
      </q-card-section>

      <!-- <h4 class="text-center text-purple text-h4 q-my-sm text-weight-bold">
        Bienvenidos
      </h4> -->

      <q-form
        class="row justify-center q-gutter-y-sm q-pb-lg"
        @submit.prevent="procesarFormulario"
      >
        <div class="col-10">
          <q-input
            color="purple"
            label="Cédula"
            label-color="purple"
            outlined
            rounded
            v-model="cedula"
            :rules="[(val) => !!val || 'Por favor escriba su cédula']"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="purple" />
            </template>
          </q-input>
        </div>

        <div class="col-10">
          <q-input
            color="purple"
            label="Contraseña"
            label-color="purple"
            outlined
            rounded
            :type="isPwd ? 'password' : 'text'"
            v-model="clave"
            :rules="[(val) => !!val || 'Por favor escriba su contraseña']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="purple" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                color="purple"
              />
            </template>
          </q-input>
        </div>

        <div class="col-10 flex justify-between items-center">
          <q-checkbox
            class="text-purple text-weight-medium"
            keep-color
            v-model="check"
            color="purple"
            label="Mantener Sesión"
          />

          <q-btn
            label="¿Olvido su contraseña?"
            flat
            color="purple"
            no-caps
            type="button"
            to="recuperar/clave"
          />
        </div>

        <div class="col-10 text-center q-mb-md">
          <q-btn
            label="Entrar"
            class="full-width"
            rounded
            color="purple"
            padding="xs lg"
            size="lg"
          />
        </div>
        <div class="col-10 text-center">
          <q-btn
            label="Registrarse"
            class="full-width"
            rounded
            color="pink"
            padding="xs lg"
            size="md"
          />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageLogin",
  setup() {
    const cedula = ref();
    const clave = ref();
    const check = ref(false);
    const procesarFormulario = () => {
      console.log("envio el formulario");
    };

    return {
      isPwd: ref(true),
      cedula,
      clave,
      check,
      procesarFormulario,
    };
  },
});
</script>
