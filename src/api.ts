const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

type obj = {
  nums: number[];
  start: number;
  end: number;
};

export async function fetchNums(field: string = `topstories`) {
  const json: any = await fetch(`${BASE_URL}/${field}.json`).then((response) =>
    response.json()
  );
  return json;
}

export async function fetchArticles(
  nums: number[],
  start: number,
  end: number
) {
  const objArr = await Promise.all(
    nums.slice(start, end).map((articleNum) => {
      const value = fetch(`${BASE_URL}/item/${articleNum}.json`).then(
        (response) => response.json()
      );
      return value;
    })
  );
  return objArr;
}
