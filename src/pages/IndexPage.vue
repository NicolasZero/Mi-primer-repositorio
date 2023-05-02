<template>
  <q-page padding>
    <!-- <h3>Noticias</h3> -->
    <!-- <h4>{{ variable_paco }}</h4> -->
    <div class="q-gutter-y-lg">
      <q-card>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fuga
          quis ex natus voluptate animi amet earum maxime, sed alias hic
          voluptates incidunt error quo magni. Autem, architecto. Suscipit,
          optio.
        </q-card-section>
      </q-card>

      <q-card>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima fuga
          quis ex natus voluptate animi amet earum maxime, sed alias hic
          voluptates incidunt error quo magni. Autem, architecto. Suscipit,
          optio.
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const variable_paco = ref("paco");
    return {
      variable_paco,
    };
  },
});
</script>
