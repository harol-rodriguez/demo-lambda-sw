import StarshipMappedData from '../../interfaces/StarshipMappedData.interface';
import { ExternalApiResponse } from '../entities/ExternalApiResponse';

export class StarshipMapper {
  static mapToSpanish(apiResponse: ExternalApiResponse): StarshipMappedData[]  {
    return apiResponse.results.map((starship) => ({
      nombre: starship.name,
      modelo: starship.model,
      fabricante: starship.manufacturer,
      costo_en_creditos: starship.cost_in_credits,
      longitud: starship.length,
      velocidad_maxima_atmosfera: starship.max_atmosphering_speed,
      tripulacion: starship.crew,
      pasajeros: starship.passengers,
      capacidad_carga: starship.cargo_capacity,
      consumibles: starship.consumables,
      clasificacion_nave: starship.starship_class,
      pilotos: starship.pilots,
      peliculas: starship.films,
      creado: starship.created,
      editado: starship.edited,
      url: starship.url,
    }));
  }
}
