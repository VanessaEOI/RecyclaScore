// fetch.js
import { ref } from 'vue'

export default function useFetch(url: string) {
  const data = ref([])
  const error = ref()
  const loading = ref(false)

  loading.value = true

  const baseUrl = "http://localhost:8080"

  const fetchData = async () => {
    try {
      const res = await fetch(`${baseUrl}${url}`)
      if (res.ok){
        error.value = "Impossible de charger les données"
      }
      data.value = await res.json()
    } catch (err: any) {
      error.value = err.message
    }
    loading.value = false
  }

  return { data, error, loading, fetchData }
}
