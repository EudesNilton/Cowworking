import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.error(error);
  

  return (
    <div>
      <h1>Eita, errou!</h1>
      {isRouteErrorResponse(error) ? (
        <>
          <p>{error.statusText || "Erro desconhecido"}</p>
          <p>{error.data?.message || "Algo deu errado."}</p>
        </>
      ) : (
        <p>Ocorreu um erro inesperado.</p>
      )}
    </div>
  )
}

export default ErrorPage