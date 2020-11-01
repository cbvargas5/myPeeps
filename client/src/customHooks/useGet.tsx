import { useEffect, useState } from 'react'
import axios from 'axios'
import { Contact, ContactDetails, GetMethodResponseState } from '../types'




export const useGet = (url: string) => {

  const [getMethodResponse, setGetMethodResponse] = useState<GetMethodResponseState>({ responseData: null, isLoading: true })

  useEffect(() => {
    setGetMethodResponse({ responseData: null, isLoading: true })
    axios.get<Contact[] | ContactDetails>(url)
      .then(({ data }) => {
        setGetMethodResponse({ responseData: data, isLoading: false })
      })
  }, [url])

  return getMethodResponse
}