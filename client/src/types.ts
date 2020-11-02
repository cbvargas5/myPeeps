export interface ContactData {
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
  phone_num: string | null;
}

export interface ContactDetailsData {
  addresses: Address[] | any[];
  phoneNumbers: PhoneNumber[] | any[];
}

export interface GetMethodResponseState {
  responseData: ContactData[] | ContactDetailsData | null;
  isLoading: boolean;
}