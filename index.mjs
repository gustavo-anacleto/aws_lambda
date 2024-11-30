import { log } from "./log.mjs";

export const handler = async (event) => {
    log("Log de execução", JSON.stringify(event))
    log("Publicando alterção na funcion via GH Actions")
    
    return {
      statusCode: 200,
      body: JSON.stringify(event),
    };
  };
  