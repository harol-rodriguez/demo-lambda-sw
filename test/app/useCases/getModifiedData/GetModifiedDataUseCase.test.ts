import { ExternalApiService } from "../../../../src/app/useCases/getModifiedData/ExternalApiService";
import { GetModifiedDataUseCase } from "../../../../src/app/useCases/getModifiedData/GetModifiedDataUseCase";

describe('GetModifiedDataUseCase', () => {
  it('should return mapped data', async () => {
    const externalApiServiceMock = {
      fetchDataFromExternalApi: jest.fn(() => ({
        results: [{
            "name": "CR90 corvette", 
            "model": "CR90 corvette", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "3500000", 
            "length": "150", 
            "max_atmosphering_speed": "950", 
            "crew": "30-165", 
            "passengers": "600", 
            "cargo_capacity": "3000000", 
            "consumables": "1 year", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "60", 
            "starship_class": "corvette", 
            "pilots": [], 
            "films": [
                "https://swapi.py4e.com/api/films/1/", 
                "https://swapi.py4e.com/api/films/3/", 
                "https://swapi.py4e.com/api/films/6/"
            ], 
            "created": "2014-12-10T14:20:33.369000Z", 
            "edited": "2014-12-20T21:23:49.867000Z", 
            "url": "https://swapi.py4e.com/api/starships/2/"
        },],
      })),
    };
    const useCase = new GetModifiedDataUseCase(externalApiServiceMock as unknown as ExternalApiService);

    const modifiedData = await useCase.execute();

    expect(externalApiServiceMock.fetchDataFromExternalApi).toHaveBeenCalled();

    expect(modifiedData).toEqual([{
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
    }]);
  });
});
