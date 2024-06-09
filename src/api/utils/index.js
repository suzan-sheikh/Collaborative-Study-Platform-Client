import axios from "axios"

// Image upload
export const imageUpload = async image => {

    console.log('from hook',image);

  const formData = new FormData()
  formData.append('image', image)

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  )
  return data.data.display_url
}