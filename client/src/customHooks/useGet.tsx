import { useEffect, useState } from 'react'
import axios from 'axios'


interface Contact {
  contact_id: string | null;
  first_name: string | null;
  last_name: string | null;
  category: string | null;
  notes: string | null;
}

interface Address {
  address_id: string;
  contact_id: string;
  street_address: string | null;
  city: string | null;
  state_name: string | null;
  zip: string | null;
}

interface PhoneNumber {
  phone_id: string;
  contact_id: string;
  phone_num: string;
}

interface ContactDetails {
  addresses: Address[];
  phoneNumbers: PhoneNumber[];
}

interface getMethodResponseState {
  responseData: Contact[] | ContactDetails | null;
  isLoading: boolean;
}

export const useGet = (url: string) => {

  const [getMethodResponse, setGetMethodResponse] = useState<getMethodResponseState>({ responseData: null, isLoading: true })

  useEffect(() => {
    setGetMethodResponse({ responseData: null, isLoading: true })
    axios.get<Contact[] | ContactDetails>(url)
      .then(({ data }) => {
        setGetMethodResponse({ responseData: data, isLoading: false })
      })
  }, [url])

  return getMethodResponse
}