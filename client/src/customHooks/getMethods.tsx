import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContactData, ContactListGetMethodResponseState } from '../types'


export const useGetContacts = () => {
  const ENDPOINT: string = '/api/contacts'
  console.log(ENDPOINT)
  const [getMethodResponse, setGetMethodResponse] = useState<ContactListGetMethodResponseState>({ responseData: null, isLoading: true })

  useEffect(() => {
    setGetMethodResponse({ responseData: null, isLoading: true })
    axios.get<ContactData[]>(ENDPOINT)
      .then(({ data }) => {
        setGetMethodResponse({ responseData: data, isLoading: false })
      })
  }, [])

  return getMethodResponse
}