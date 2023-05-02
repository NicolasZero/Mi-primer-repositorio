<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-purple">
      <!-- <q-toolbar>
        <q-btn flat icon="star" to="/inicio" label="Inicio" />
        <q-btn flat icon="menu_book" to="/educacion" label="Educación" />
        <q-btn flat icon="health_and_safety" to="/salud" label="Salud" />
        <q-btn flat icon="work" to="/economia" label="Economía" />
        <q-btn flat icon="gavel" to="/justicia" label="Justicia" />
        <q-btn
          flat
          icon="handshake"
          to="/participacion"
          label="Participación"
        />
        <q-btn flat icon="diversity_3" to="/cultura" label="Cultura" />
        <q-btn flat icon="medication" to="/cuidados" label="Cuidados" />
      </q-toolbar> -->
      <q-tabs align="left">
        <q-route-tab to="/inicio" label="Inicio" />
        <q-route-tab to="/educacion" label="Educación" />
        <q-route-tab to="/salud" label="Salud" />
        <q-route-tab to="/economia" label="Economía" />
        <q-route-tab to="/justicia" label="Justicia" />
        <q-route-tab to="/participacion" label="Participación" />
        <q-route-tab to="/cultura" label="Cultura" />
        <q-route-tab to="/cuidados" label="Cuidados" />
      </q-tabs>
    </q-header>

    <!-- <q-header elevated class="bg-purple text-white" height-hint="98" reveal>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab icon="star" to="/inicio" label="Inicio" />
        <q-route-tab to="/educacion" label="Page Two" />
        <q-route-tab to="/salud" label="Page Three" />
        <q-route-tab to="/economia" label="Page Four" />
      </q-tabs>
    </q-header> -->

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250">
      <q-list>
        <!-- <q-item-label header> Essential Links </q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      :width="250"
      class="q-pa-md q-gutter-y-lg"
    >
      <!-- <h4 class="text-center">Notificaciones</h4> -->

      <q-card class="my-card bg-amber-2" flat>
        <q-card-section>
          <span class="text-h6 text-amber-10">Perfil</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span>Su perfil está desactualizado.</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn color="amber-8" label="Actualizar" unelevated />
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-teal-2" flat>
        <q-card-section>
          <span class="text-h6 text-teal-10">Encuesta</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span>Hay una nueva encuesta para usted.</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn color="teal-8" label="Responder" unelevated />
        </q-card-section>
      </q-card>
      <!-- drawer content -->
    </q-drawer>

    <q-footer reveal elevated class="bg-purple">
      <q-toolbar>
        <q-toolbar-title>Matria 2023</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { linksList } from "../router/link-list";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
