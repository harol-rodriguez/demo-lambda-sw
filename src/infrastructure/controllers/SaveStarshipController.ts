
import { APIGatewayProxyHandler } from 'aws-lambda';
import { SaveStarshipDataUseCase } from '../../app/useCases/saveStarshipData/SaveStarshipDataUseCase';
import { StarshipRepository } from '../../app/repositories/StarshipRepository';

const starshipRepository = new StarshipRepository();
const saveStarshipUseCase = new SaveStarshipDataUseCase(starshipRepository);

export const saveStarship: APIGatewayProxyHandler = async (event) => {
  try {
    const starshipData = JSON.parse(event.body as string);

    const savedStarship = await saveStarshipUseCase.execute(starshipData);
    console.log("savedStarship", savedStarship);
    return {
      statusCode: 201,
      body: JSON.stringify(savedStarship),
    };
  } catch (error) {
    console.error("saveStarshipController: Error al guardar la nave espacial:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Error al guardar la nave espacial', error }),
    };
  }
};
