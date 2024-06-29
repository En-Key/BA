import { useSearchParams } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import s from './popularPage.module.css';
import { Search } from 'shared/Search';
import { Article } from 'shared/types/article';
import { ArticleList } from 'features/ArticleList/ui/ArticleList';
import { IoSearchOutline } from 'react-icons/io5';
import { useClickOutside } from 'hooks/useClickOutside';
// import { mockPosts } from 'shared/mocks/mockArticles';

export const PopularPage = () => {
  // const [articles, setArticles] = useState(mockPosts);
  const [articlesD, setArticlesD] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const section = params.get('section') || 'all';

  useEffect(() => {
    setIsLoading(true);

    // const queryParams = section === 'all' ? '' : `?section=${section}`; //параметры фильтрации списка
    // fetch(`https://788413a1796040ee.mokky.dev/articles${queryParams}`)

    fetch(`https://788413a1796040ee.mokky.dev/articles`)
      .then(res => res.json())
      .then((articlesData: Article[]) => {
        setArticlesD(articlesData);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [section]);

  const data = articlesD;

  const [searchValue, setSearchValue] = useState('');
  const [articles, setArticles] = useState(data);

  const filteredArticles = data.filter(article =>
    article.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
  );

  useEffect(() => {
    const Debounce = setTimeout(() => {
      setArticles(filteredArticles);
    }, 300);
    return () => clearTimeout(Debounce);
  }, [filteredArticles, searchValue]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  const [isOpen, setIsOpen] = useState(true);

  const itemClickHandler = (e: any) => {
    setSearchValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(!isOpen), 100);
  });

  return (
    <div className={s.container}>
      <div className={s.form}>
        <form className={s.search_form} ref={menuRef}>
          <input
          
            type="text"
            placeholder="Search"
            className={s.search_input}
            value={searchValue}
            onChange={onSearchChange}
            onClick={inputClickHandler}
          />
          <ul className={s.autocomplete}>
            {searchValue && isOpen
              ? articles.map((article, index) => {
                  return (
                    <li className={s.autocomplete_item} onClick={itemClickHandler} key={index} >
                      {article.title}
                    </li>
                  );
                })
              : null}
          </ul>
          <div className={s.search_img}>
            <IoSearchOutline />
          </div>
          {/* <img src={img} alt="img" className={s.search_img} /> */}
        </form>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
};
