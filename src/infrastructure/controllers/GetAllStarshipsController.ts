
import { APIGatewayProxyHandler } from 'aws-lambda';
import { GetAllStarShipsUseCase } from '../../app/useCases/getAllStarships/GetAllStarshipsUseCase';
import { StarshipRepository } from '../../app/repositories/StarshipRepository';

const starshipRepository = new StarshipRepository();
const getAllStarShipsUseCase = new GetAllStarShipsUseCase(starshipRepository);

export const getAllStarShips: APIGatewayProxyHandler = async (event) => {
  try {
    const allStarships = await getAllStarShipsUseCase.execute();
    console.log("allStarships", allStarships);
    return {
      statusCode: 201,
      body: JSON.stringify(allStarships),
    };
  } catch (error) {
    console.error("GetAllStarShipsController: Error al listar las naves:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Error al listar las naves', error }),
    };
  }
};
