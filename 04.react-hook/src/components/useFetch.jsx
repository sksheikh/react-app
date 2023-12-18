import React,{useState, useEffect} from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  
  useEffect(() => {
    fetch(url)
    .then((res) => {
      if(!res.ok){
        throw Error('Data not found')
      }
      return res.json()
    })
    .then((data) => {
      setData(data)
      setIsLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setIsLoading(false);
    })
  }, [url]);

  return {data, isLoading, error}
}

