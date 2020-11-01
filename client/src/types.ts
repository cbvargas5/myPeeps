export interface Contact {
  contact_id: string;
  first_name: string;
  last_name: string | null;
  category: string | null;
  notes: string | null;
}

export interface Address {
  address_id: string;
  contact_id: string;
  street_address: string | null;
  city: string | null;
  state_name: string | null;
  zip: string | null;
}

export interface PhoneNumber {
  phone_id: string;
  contact_id: string;
  phone_num: string;
}

export interface ContactDetails {
  addresses: Address[];
  phoneNumbers: PhoneNumber[];
}

export interface GetMethodResponseState {
  responseData: Contact[] | ContactDetails | null;
  isLoading: boolean;
}