import { IPeopleCards } from 'src/interfaces';
import { BASE_URL } from 'src/variables';

export async function getCards(pageNum = 1): Promise<IPeopleCards> {
  localStorage.setItem('isLoading', 'true');
  try {
    const resp = await fetch(`${BASE_URL}/?page${pageNum}`);
    localStorage.setItem('isLoading', 'false');

    return (await resp.json()) as IPeopleCards;
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}

export async function getSearchCards(
  searchValue: string | null,
  pageNum = 1,
): Promise<IPeopleCards> {
  localStorage.setItem('isLoading', 'true');
  try {
    const resp = await fetch(
      `${BASE_URL}/?search=${searchValue}&page=${pageNum}`,
    );
    localStorage.setItem('isLoading', 'false');

    return (await resp.json()) as IPeopleCards;
  } catch (err) {
    throw new Error(`GET Response error: ${String(err)}`);
  }
}
