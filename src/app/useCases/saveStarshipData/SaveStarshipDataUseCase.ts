import Starship from '../../../interfaces/Starship.interface';
import { StarshipRepository } from '../../repositories/StarshipRepository';

export class SaveStarshipDataUseCase {
  constructor(private readonly starshipRepository: StarshipRepository) {}

  async execute(starshipData: any): Promise<Starship> {
    const currentDate = new Date();
    const starship: Starship = starshipData;
    starship.creado = currentDate;
    starship.editado = currentDate;

    console.log("SaveStarshipDataUseCase", starship);
    return this.starshipRepository.save(starship);
  }
}