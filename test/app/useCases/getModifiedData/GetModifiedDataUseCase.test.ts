import { ExternalApiService } from "../../../../src/app/useCases/getModifiedData/ExternalApiService";
import { GetModifiedDataUseCase } from "../../../../src/app/useCases/getModifiedData/GetModifiedDataUseCase";

describe('GetModifiedDataUseCase', () => {
  it('should return mapped data', async () => {
    // Crea una instancia del caso de uso con un mock de ExternalApiService
    const externalApiServiceMock = {
      fetchDataFromExternalApi: jest.fn(() => ({
        results: [
          // Datos de ejemplo aquí...
        ],
      })),
    };
    const useCase = new GetModifiedDataUseCase(externalApiServiceMock as unknown as ExternalApiService);

    // Ejecuta el caso de uso
    const modifiedData = await useCase.execute();

    // Verifica que el método del servicio externo se haya llamado
    expect(externalApiServiceMock.fetchDataFromExternalApi).toHaveBeenCalled();

    // Verifica que los datos mapeados sean correctos (puedes agregar más expectativas según tus necesidades)
    expect(modifiedData).toEqual([
      // Datos mapeados aquí...
    ]);
  });
});
