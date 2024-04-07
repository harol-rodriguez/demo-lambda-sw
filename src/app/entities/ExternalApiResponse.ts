// src/entities/ExternalApiResponse.ts
export interface ExternalApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[]; // Falta definir la estructura de los objetos recibidos del servicio externo
}
