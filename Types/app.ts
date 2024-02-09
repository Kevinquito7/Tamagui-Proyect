interface Film {
  id: number;
  title: string;
  duration: number;
  director: string;
  scene?: Scene[]; // Otras propiedades opcionales
  releaseDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface Scene {
  id: number;
  description: string;
  budget: number;
  minutes: number;
  film_id: number;
  characters: Character[];
  releaseDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface Character {
  id: number;
  description: string;
  cost: number;
  scene_id: number;
  releaseDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
