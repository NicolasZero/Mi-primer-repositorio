<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-btn flat icon="star" to="/" label="Inicio" />
        <q-btn flat icon="menu_book" to="educacion" label="Educación" />
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
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

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
