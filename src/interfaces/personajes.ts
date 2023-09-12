import { Extra } from "./location";


export interface Personaje extends Extra {
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
