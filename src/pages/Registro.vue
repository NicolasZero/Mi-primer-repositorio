<template>
  <q-page padding class="row flex-center bg-purple-10">
    <div class="bg-white col-12 col-sm-9 col-md-8">
      <q-img
        src="https://cdn.quasar.dev/img/mountains.jpg"
        spinner-color="white"
      />

      <h4 class="text-center text-purple text-h4 q-my-md">Registrarse</h4>

      <q-form class="row justify-center q-gutter-y-md q-pb-md">
        <div class="col-11 col-sm-9 col-md-6 q-px-md">
          <q-input
            color="purple"
            label="Cédula"
            label-color="purple"
            outlined
            rounded
            v-model="cedula"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="purple" />
            </template>
          </q-input>
        </div>

        <div class="col-11 col-sm-9 col-md-6 q-px-md">
          <q-input
            color="purple"
            label="Teléfono"
            label-color="purple"
            outlined
            rounded
            type="tel"
            v-model="telefono"
          >
            <template v-slot:prepend>
              <q-icon name="call" color="purple" />
            </template>
          </q-input>
        </div>

        <div class="col-11 col-sm-9 col-md-12 q-px-md">
          <q-input
            color="purple"
            label="Correo"
            label-color="purple"
            outlined
            rounded
            type="email"
            v-model="correo"
          >
            <template v-slot:prepend>
              <q-icon name="mail" color="purple" />
            </template>
          </q-input>
        </div>

        <div class="col-11 col-sm-9 col-md-6 q-px-md">
          <q-input
            color="purple"
            label="Contraseña"
            label-color="purple"
            outlined
            rounded
            :type="isPwd ? 'password' : 'text'"
            v-model="clave"
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

        <div class="col-11 col-sm-9 col-md-6 q-px-md">
          <q-input
            color="purple"
            label="Confirmar Contraseña"
            label-color="purple"
            outlined
            rounded
            :type="isPwd ? 'password' : 'text'"
            v-model="confirmarClave"
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

        <div class="col-12 flex flex-center">
          <q-btn
            color="purple"
            label="Registrarse"
            padding="xs lg"
            rounded
            size="lg"
            type="submit"
          />
        </div>

        <div class="col-12 flex flex-center">
          <q-btn
            color="pink"
            label="Volver"
            padding="xs lg"
            rounded
            size="md"
            to="/"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "PageRegistro",
  setup() {
    const cedula = ref(null);
    const telefono = ref(null);
    const correo = ref(null);
    const clave = ref(null);
    const confirmarClave = ref(null);

    return {
      isPwd: ref(true),
      cedula,
      telefono,
      correo,
      clave,
      confirmarClave,
    };
  },
});
</script>
