import { ArticleList } from '../../features/ArticleList/ui/ArticleList';
import { useFetch } from '../../hooks/useFetch';
import { Article } from '../../shared/types/article';

export const FreshPage = () => {
  const { data: articles, isLoading } = useFetch<Article[]>('/fresh_articles');

  return (
    <div>
      <h2>Свежие статьи</h2>
      <ArticleList articles={articles ?? []} />
    </div>
  );
};
