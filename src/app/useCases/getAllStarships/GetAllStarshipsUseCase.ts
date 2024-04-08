import Starship from '../../../interfaces/Starship.interface';
import { StarshipRepository } from '../../repositories/StarshipRepository';

export class GetAllStarShipsUseCase {
  constructor(private readonly starshipRepository: StarshipRepository) {}

  async execute(): Promise<Starship[]> {

    return this.starshipRepository.getAll();
  }
}