// src/infrastructure/controllers/GetModifiedDataController.test.ts
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { GetModifiedDataUseCase } from '../../../src/app/useCases/getModifiedData/GetModifiedDataUseCase';
import { getModifiedDataController } from '../../../src/infrastructure/controllers/GetModifiedDataController';

describe('GetModifiedDataController', () => {
  it('should return 200 with modified data', async () => {
    // Crea un mock del caso de uso
    const useCaseMock = {
      execute: jest.fn(() => [{
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
      }]),
    } as unknown as GetModifiedDataUseCase;

    const event: APIGatewayProxyEvent = {
      httpMethod: 'GET',
      path: '/swdemo',
    } as any;

    const result: APIGatewayProxyResult = await getModifiedDataController(event, undefined as any, undefined as any) as any;

    expect(result.statusCode).toBe(200);
  });
});
