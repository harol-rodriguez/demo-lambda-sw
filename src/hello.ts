import { APIGatewayProxyHandler } from 'aws-lambda'
import { v4 } from "uuid"

export const handler: APIGatewayProxyHandler = async (event) => {
  const reqBody = JSON.parse(event.body as string)
  console.log(event)
  const jedy = {
    ...reqBody,
    id: v4()
  }

  return {
    statusCode: 200,
    body: JSON.stringify({hello: "SW DEMO!", e: event})
  }
}