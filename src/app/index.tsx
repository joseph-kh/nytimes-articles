import React from "react";
import { FlatList, RefreshControl } from "react-native";
import ArticleListItem from "@/components/article/ArticleListItem";
import { useMostPopularArticles } from "@/services/api";
import Loader from "@/components/ui/Loader";
import Divider from "@/components/ui/Divider";
import useModal from "@/hooks/useModal";
import { router } from "expo-router";
import { useSWRConfig } from "swr";
import { useLoader } from "@/contexts/LoaderContext";
import ErrorModal from "@/components/modals/ErrorModal";

const Articles: React.FC = () => {
  const {
    mostPopularArticles,
    isMostPopularArticlesLoading,
    isMostPopularArticlesError,
  } = useMostPopularArticles();
  const { mutate } = useSWRConfig();

  const { isModalVisible, toggleModal } = useModal();

  const { isLoading, setIsLoading } = useLoader();

  const onArticlePress = (article: Article) => {
    router.push({ pathname: "/article", params: article });
  };

  const onRefresh = async () => {
    setIsLoading(true);
    try {
      await mutate("most-popular-articles");
    } finally {
      setIsLoading(false);
    }
  };

  const articles: Article[] = mostPopularArticles?.results?.map(
    (result: Article) => {
      return {
        id: result.id,
        title: result.title,
        published_date: result.published_date,
        byline: result.byline || "N/A",
        section: result.section || "N/A",
        abstract: result.abstract,
        media:
          result.media[0]?.["media-metadata"][2].url ||
          "https://cdn.discordapp.com/attachments/1148605640856572054/1148605814857277581/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",
      };
    }
  );

  if (isMostPopularArticlesLoading || isLoading) return <Loader />;

  if (isMostPopularArticlesError)
    return (
      <ErrorModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        onConfirm={onRefresh}
        title="Something went wrong!"
        message="Try again"
        ctaText="OK"
      />
    );

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => `${item.id}`}
      ItemSeparatorComponent={() => <Divider />}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => (
        <ArticleListItem
          article={item}
          onArticlePress={onArticlePress.bind(this, item)}
        />
      )}
    />
  );
};

export default Articles;
