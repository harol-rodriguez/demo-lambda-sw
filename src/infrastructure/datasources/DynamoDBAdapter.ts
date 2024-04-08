import * as AWS from 'aws-sdk';

export class DynamoDBAdapter {
  private readonly client: AWS.DynamoDB.DocumentClient;

  constructor() {
    this.client = new AWS.DynamoDB.DocumentClient();
  }

  async save(tableName: string, item: any): Promise<any> {
    const params = {
      TableName: tableName,
      Item: item,
    };
  
    try {
      await this.client.put(params).promise();
      console.error('adapter item', params);
      return item; // Retorna el item guardado
    } catch (error) {
      console.error('Error al guardar el dato:', error);
      throw error;
    }
  }

  async getAll(tableName: string): Promise<any[]> {
    const params = {
      TableName: tableName,
    };

    try {
      const result = await this.client.scan(params).promise();
      return result.Items || [];
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }
}
