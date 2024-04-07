// // src/app/useCases/saveStarshipData/SaveStarshipDataUseCase.ts

// import StarshipMappedData from '../../../interfaces/StarshipMappedData.interface';
// import { StarshipRepository } from '../../repositories/StarshipRepository';


// export class SaveStarshipDataUseCase {
//   constructor(private readonly starshipRepository: StarshipRepository) {}

//   static async execute(starshipData: any): Promise<StarshipMappedData> {
//     const currentDate = new Date();
//     const starship = new Starship(starshipData);
//     starship.created = currentDate;
//     starship.edited = currentDate;
//     return this.starshipRepository.save(starship);
//   }
// }
