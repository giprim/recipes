import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://random-recipes.p.rapidapi.com/ai-quotes',
  headers: {
    'x-rapidapi-host': 'random-recipes.p.rapidapi.com',
    'x-rapidapi-key': '1928aa76c3msh12d0543b8640813p1b3c8cjsneb28e6b3b6ed',
  },
});
