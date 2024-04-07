
import { APIGatewayProxyHandler } from 'aws-lambda';
import { GetModifiedDataUseCase } from '../../app/useCases/getModifiedData/GetModifiedDataUseCase';
import { ExternalApiService } from '../../app/useCases/getModifiedData/ExternalApiService';

export const getModifiedDataController: APIGatewayProxyHandler = async (event) => {
  try {
    const getModifiedDataUseCase = new GetModifiedDataUseCase(new ExternalApiService());
    const modifiedData = await getModifiedDataUseCase.execute();

    return {
      statusCode: 200,
      body: JSON.stringify(modifiedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error processing data' }),
    };
  }
};
