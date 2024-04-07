import StarshipMappedData from '../../../interfaces/StarshipMappedData.interface';
import { ExternalApiResponse } from '../../entities/ExternalApiResponse';
import { StarshipMapper } from '../../mappers/StarshipMapper';
import { ExternalApiService } from './ExternalApiService';

export class GetModifiedDataUseCase {
  constructor(private externalApiService: ExternalApiService) {}

  async execute(): Promise<StarshipMappedData[]> {
    try {
      const apiResponse: ExternalApiResponse = await this.externalApiService.fetchDataFromExternalApi();
      const modifiedData = StarshipMapper.mapToSpanish(apiResponse);

      return modifiedData;
    } catch (error) {
      throw new Error('Error processing data');
    }
  }
}
