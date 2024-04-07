
// // src/infrastructure/controllers/SaveStarshipController.ts

// import { APIGatewayProxyHandler } from 'aws-lambda';
// import { SaveStarshipDataUseCase } from '../../app/useCases/saveStarshipData/SaveStarshipDataUseCase';


// export const saveStarship: APIGatewayProxyHandler = async (event) => {
//   try {
//     const starshipData = JSON.parse(event.body); // Datos enviados en el cuerpo de la solicitud
//     // Validar los datos si es necesario

//     // Ejecutar el caso de uso
//     const savedStarship = await SaveStarshipDataUseCase.execute(starshipData);

//     return {
//       statusCode: 201,
//       body: JSON.stringify(savedStarship),
//     };
//   } catch (error) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Error al guardar la nave espacial' }),
//     };
//   }
// };
