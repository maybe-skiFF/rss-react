import { IPeopleCards } from 'src/interfaces';
import { BASE_URL } from 'src/variables';

export async function getCards(): Promise<IPeopleCards> {
  try {
    const resp = await fetch(`${BASE_URL}`);

    return (await resp.json()) as IPeopleCards;
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}
