import Starship from '../../../interfaces/Starship.interface';
import { ExternalApiResponse } from '../../entities/ExternalApiResponse';
import { StarshipMapper } from '../../mappers/StarshipMapper';
import { ExternalApiService } from './ExternalApiService';

export class GetModifiedDataUseCase {
  constructor(private externalApiService: ExternalApiService) {}

  async execute(): Promise<Starship[]> {
    try {
      const apiResponse: ExternalApiResponse = await this.externalApiService.fetchDataFromExternalApi();
      const modifiedData = StarshipMapper.mapToSpanish(apiResponse);

      return modifiedData;
    } catch (error) {
      throw new Error('Error processing data');
    }
  }
}
