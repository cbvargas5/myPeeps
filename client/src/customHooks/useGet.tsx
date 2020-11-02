import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContactData, ContactDetailsData, GetMethodResponseState } from '../types'




export const useGet = (url: string) => {

  console.log(url)
  const [getMethodResponse, setGetMethodResponse] = useState<GetMethodResponseState>({ responseData: null, isLoading: true })

  useEffect(() => {
    setGetMethodResponse({ responseData: null, isLoading: true })
    axios.get<ContactData[] | ContactDetailsData>(url)
      .then(({ data }) => {
        setGetMethodResponse({ responseData: data, isLoading: false })
      })
  }, [url])

  return getMethodResponse
}