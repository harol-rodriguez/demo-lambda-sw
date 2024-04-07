import axios from 'axios';
import { ExternalApiResponse } from '../../entities/ExternalApiResponse';

export class ExternalApiService {
  async fetchDataFromExternalApi(): Promise<ExternalApiResponse> {
    try {
      const response = await axios.get('https://swapi.py4e.com/api/starships/');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data from external API');
    }
  }
}
