<template>
  <q-page class="flex flex-center">
    <div class="row flex-center">
      <div class="col-12 col-sm-10 col-md-6 col-lg-4">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section>
            <!-- Cedula -->
            <q-input
              rounded
              outlined
              v-model="text"
              label="Cédula"
              color="purple-6"
            >
              <template v-slot:prepend>
                <q-icon name="person" color="purple-6" />
              </template>
            </q-input>
          </q-card-section>

          <!-- Contraseña -->
          <q-card-section>
            <q-input
              v-model="password"
              rounded
              outlined
              :type="isPwd ? 'password' : 'text'"
              label="Contraseña"
              color="purple-6"
            >
              <template v-slot:prepend>
                <q-icon name="key" color="purple-6" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-section class="flex justify-between items-center">
            <q-checkbox
              v-model="right"
              label="Mantener sesion"
              color="purple-6"
            />
            <span class="text-purple-6 cursor-pointer"
              >¿Olvido su contraseña?</span
            >
          </q-card-section>

          <!-- boton -->
          <q-card-section>
            <q-btn
              class="full-width"
              label="Entrar"
              type="submit"
              color="purple-6"
              rounded
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageLogin",
});
</script>
