import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleView } from '../../features/Article/ui/Article';
import Loader from '../../shared/components/loader';
import { Article } from '../../shared/types/article';

export const ArticlePage = () => {
  const { id } = useParams();

  const [article, setArticle] = useState<Article | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://788413a1796040ee.mokky.dev/articles/${id}`)
      .then(res => res.json())
      .then((articlesData: Article) => {
        setArticle(articlesData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [id]);

  if (!article || isLoading) return <Loader />;

  return <ArticleView article={article} />;
};
