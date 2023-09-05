import useSWR from "swr";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const fetchArticles = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=${API_KEY}`
    );
    if (!res.ok) throw new Error("An error has occurred!");
    return await res.json();
  } catch (e) {
    throw new Error("An error has occurred!");
  }
};

export const useMostPopularArticles = () => {
  const { data, error, isLoading } = useSWR(
    `most-popular-articles`,
    fetchArticles
  );
  return {
    mostPopularArticles: data,
    isMostPopularArticlesLoading: isLoading,
    isMostPopularArticlesError: error,
  };
};
