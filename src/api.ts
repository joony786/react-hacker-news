const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

interface Ijson {
  title: string;
  by: string;
  text?: string;
  url: string;
  score: number;
  id: number;
  time: number;
  descendants: number;
  parent?: number;
  kids?: number[];
}

export async function fetchNums(field: string = `top`) {
  const json: number[] = await fetch(`${BASE_URL}/${field}stories.json`).then(
    (response) => response.json()
  );
  return json;
}

export async function fetchArticles(
  nums: number[],
  start: number,
  end: number
) {
  const objArr: Ijson[] = await Promise.all(
    nums.slice(start, end).map((articleNum) => {
      const value = fetch(`${BASE_URL}/item/${articleNum}.json`).then(
        (response) => response.json()
      );
      return value;
    })
  );
  return objArr;
}

export async function fetchArticle(num: number) {
  const obj: object = await fetch(`${BASE_URL}/item/${num}.json`).then(
    (response) => response.json()
  );
  return obj;
}
