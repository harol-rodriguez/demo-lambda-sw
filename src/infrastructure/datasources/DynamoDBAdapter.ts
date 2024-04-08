import { DynamoDBClient, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";

export class DynamoDBAdapter {
  private readonly client: DynamoDBClient; 

  constructor() {
    this.client = new DynamoDBClient({}); 
  }

  async put(tableName: string, item: any): Promise<any> {
    const params = {
      TableName: tableName,
      Item: item,
    };
  
    try {
      const command = new PutItemCommand(params);
      await this.client.send(command);
      console.error('adapter item', params);
      return item; // Retorna el item guardado
    } catch (error) {
      console.error('Error al guardar el dato:', error, params);
      throw error;
    }
  }

  async list(tableName: string): Promise<any[]> {
    const params = {
      TableName: tableName,
    };

    try {
      const command = new ScanCommand(params);
      const result = await this.client.send(command);
      return result.Items || [];
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }
}
