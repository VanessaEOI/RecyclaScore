<template>
  <v-layout>

    <v-app-bar
      class="mb-10"
      title="RecyclaScore"
    ></v-app-bar>

    <v-main>

      <v-row class="justify-center ma-10">
        <h1>Liste des objets disposant du RecyclaScore</h1>
      </v-row>

      <v-row class="justify-center ma-10">
        <v-col cols="6">
          <v-autocomplete
            v-model="search"
            clearable
            label="Autocomplete"
            :items="itemName"
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row class="justify-center ma-10">
        <v-btn>Voir le Score</v-btn>
      </v-row>

      <v-row class="justify-center ma-14">
        <v-card class="v-col-10">
          <v-data-table
            v-model:search="search"
            :items="items"/>
        </v-card>
      </v-row>

    </v-main>

  </v-layout>
</template>

<script setup lang="ts">
import useFetch from "@/composable/useFetch"
import {computed, onMounted, ref} from "vue"

const search = ref([])

const {data: items, error: itemsError, loading:itemsLoading , fetchData: fetchItems} = useFetch('/')

const itemName = computed(() => {
  return items.value.map((item) => item.itemName)
})

onMounted(async () => {
  await fetchItems()
})
</script>
