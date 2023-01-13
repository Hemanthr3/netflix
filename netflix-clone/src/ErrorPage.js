import React from 'react'
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
  return (
    <div>Ooops!!! Something went wrong
    <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default ErrorPage