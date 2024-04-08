
import { DynamoDBAdapter } from '../../infrastructure/datasources/DynamoDBAdapter';
import Starship from '../../interfaces/Starship.interface';

export class StarshipRepository {
  private readonly tableName = 'swdemoTable';
  private readonly db: DynamoDBAdapter;

  constructor() {
    try {
      this.db = new DynamoDBAdapter();
    } catch (error) {
      console.error('Error al inicializar DynamoDBAdapter:', error);
      throw error;
    }
  }

  async save(starship: Starship): Promise<Starship> {
    const params = {
      TableName: this.tableName,
      Item: starship,
    };
  
    try {
      await this.db.put(params.TableName, params.Item);
      return starship;
    } catch (error) {
      console.error('Error al guardar la nave:', error);
      throw error;
    }
  }

  async getAll(): Promise<Starship[]> {
    try {
      const result = await this.db.list(this.tableName);
      return result as Starship[];
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }
}
