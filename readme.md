# AWS-DEMO

Este proyecto es una demostración de cómo construir una aplicación en AWS utilizando el **Serverless Framework**. Proporciona servicios para manejar datos de naves espaciales.

## Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente manera:

```
AWS-DEMO/
├── src/
│   ├── app/
│   │   ├── useCases/
│   │   │   ├── getModifiedData/
│   │   │   │   ├── GetModifiedDataUseCase.ts
│   │   │   │   └── ExternalApiService.ts
│   │   │   ├── saveStarshipData/
│   │   │   │   ├── SaveStarshipDataUseCase.ts
│   │   │   ├── getAllStarships/
│   │   │   │   ├── GetAllStarshipsUseCase.ts
│   │   ├── entities/
│   │   │   └── Starship.ts
│   │   ├── repositories/
│   │   │   └── StarshipRepository.ts
│   │   ├── services/
│   │   │   ├── AuthService.ts
│   │   │   └── NotificationService.ts
│   ├── interfaces/
│   │   ├── ExternalApiResponse.ts
│   │   ├── StarshipRepositoryInterface.ts
│   ├── infrastructure/
│   │   ├── controllers/
│   │   │   ├── GetModifiedDataController.ts
│   │   │   ├── SaveStarshipController.ts
│   │   │   └── GetAllStarshipsController.ts
│   │   ├── dataSources/
│   │   │   ├── DynamoDBAdapter.ts
│   ├── middlewares/
│   │   ├── ErrorLoggerMiddleware.ts
│   │   └── AuthMiddleware.ts
├── test/
│   ├── app/
│   │   ├── useCases/
│   │   │   ├── getModifiedData/
│   │   │   │   ├── GetModifiedDataUseCase.test.ts
│   │   │   ├── saveStarshipData/
│   │   │   │   ├── SaveStarshipDataUseCase.test.ts
│   │   │   ├── getAllStarships/
│   │   │   │   ├── GetAllStarshipsUseCase.test.ts
│   ├── infrastructure/
│   │   ├── dataSources/
│   │   │   ├── DynamoDBAdapter.test.ts
```

## Instrucciones de Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.

## Ejemplos de Uso

- **Obtener datos modificados**: Este endpoint obtiene datos modificados. Puedes acceder a él aquí: https://ots8nz2gr1.execute-api.us-east-1.amazonaws.com/hello

- **Obtener todas las naves espaciales**: Este endpoint obtiene una lista de todas las naves espaciales desde SWAPI y devuelve un objeto mapeado con los atributos traducidos al español. Puedes acceder a él aquí: https://ots8nz2gr1.execute-api.us-east-1.amazonaws.com/starship

## Scripts

- `dev`: Ejecuta el servidor local con `serverless offline`.
- `deploy`: Implementa la aplicación en AWS con `serverless deploy`.
- `start`: Inicia el servidor local con `serverless offline start`.
- `test`: Ejecuta las pruebas con `jest`.

## Servicios y Endpoints

### Servicios
    - `hello`: Función Lambda llamada `swdemo-dev-hello` (308 kB).
    - `swdemo`: Función Lambda llamada `swdemo-dev-swdemo` (308 kB).
    - `addStarship`: Función Lambda llamada `swdemo-dev-addStarship` (308 kB).
    - `listStarship`: Función Lambda llamada `swdemo-dev-listStarship` (308 kB).

### Endpoints

- **GET /hello**
Este es un ejemplo de endpoint. No realiza ninguna acción significativa, pero se utiliza para verificar que el servicio esté en funcionamiento.
Puedes acceder a él aquí.

- **GET /swdemo**
Este endpoint obtiene el listado de naves espaciales desde SWAPI y devuelve un objeto mapeado con los atributos traducidos al español.
Puedes acceder a él aquí.

- **POST /starship**
Este endpoint crea una nueva nave espacial. Puede recibir un objeto JSON como el siguiente ejemplo:

```json
{
    "nombre": "CR90 corvette",
    "modelo": "CR90 corvette",
    "fabricante": "Corellian Engineering Corporation",
    "costo_en_creditos": "3500000",
    "longitud": "150",
    "velocidad_maxima_atmosfera": "950",
    "tripulacion": "30-165",
    "pasajeros": "600",
    "capacidad_carga": "3000000",
    "consumibles": "1 year",
    "clasificacion_nave": "corvette",
    "pilotos": [],
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/"
    ],
    "creado": "2014-12-10T14:20:33.369000Z",
    "editado": "2014-12-20T21:23:49.867000Z",
    "url": "https://swapi.py4e.com/api/starships/2/"
}
```


- **GET /starship**
Este endpoint obtiene todas las naves espaciales almacenadas en el sistema. Puedes acceder a él aquí.