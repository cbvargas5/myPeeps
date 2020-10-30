import { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxios = (url: string, method: string | undefined = 'get') => {
  useEffect(() => {
// do stuff
  }, [url, method])
}