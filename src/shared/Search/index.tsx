import { useSearchParams } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { mockPosts } from 'shared/mocks/mockArticles';
import s from './search.module.css';
import { Article } from 'shared/types/article';
import { ArticleList } from 'features/ArticleList/ui/ArticleList';

export const Search = () => {
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

  return (
    <div>
      <div className={s.form}>
        <form className={s.search_form}>
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
                    <li className={s.autocomplete_item} onClick={itemClickHandler} key={index}>
                      {article.title}
                    </li>
                  );
                })
              : null}
          </ul>
          {/* <img src={img} alt="img" className={s.search_img} /> */}
        </form>
      </div>

      <ArticleList articles={articles} />
    </div>
  );
};

// return (
//   <div>
//     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//       <h2>Популярные статьи</h2>

//       <Select
//         value={section}
//         onChange={e => {
//           params.set('section', e.target.value);
//           setParams(params);
//         }}
//         options={[
//           { label: 'Все', value: 'all' },
//           { label: 'Путешествия', value: 'Путешествия' },
//           { label: 'Природа', value: 'Природа' },
//           { label: 'Животные', value: 'Животные' },
//         ]}
//       />
//     </div>

//     {isLoading && <Loader />}

//     {!!articles && !isLoading && <ArticleList articles={articles} />}
//   </div>
// );
// };

// export const PopularPage = () => {

//   const data = mockPosts;

//   const [searchValue, setSearchValue] = useState('');
//   const [articles, setArticles] = useState(data);

//   const filteredArticles = data.filter(article =>
//     article.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()),
//   );

//   useEffect(() => {
//     const Debounce = setTimeout(() => {
//       setArticles(filteredArticles);
//     }, 300);
//     return () => clearTimeout(Debounce);
//   }, [filteredArticles, searchValue]);

//   const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

//   const [isOpen, setIsOpen] = useState(true);

//     const itemClickHandler = (e: any) => {
//       setSearchValue(e.target.textContent);
//       setIsOpen(!isOpen);
//   }

//     const inputClickHandler = () => {
//     setIsOpen(true);
//   }

//   return (
//     <div>
//       <div className={s.form}>
//         <form className={s.search_form}>
//           <input
//           type="text"
//           placeholder="Search"
//           className={s.search_input}
//           value={searchValue}
//           onChange={onSearchChange}
//           onClick={inputClickHandler}
//           />
//           <ul className={s.autocomplete}>
//           {
//           searchValue && isOpen
//             ?
//               articles.map((article, index) => {
//               return (
//                 <li className={s.autocomplete_item}
//                   onClick={itemClickHandler}
//                   key={index}>
//                   {article.title}
//                 </li>
//               );
//             })
//             : null
//             }
//           </ul>
//           {/* <img src={img} alt="img" className={s.search_img} /> */}
//         </form>
//       </div>

//       <ArticleList articles={articles} />
//     </div>
//   );
// };

// export const Nature = () => {
//   const [countries, setCountries] = useState([]);
//   const getCountries = () => {
//     axios.get('https://restcountries.eu/rest/v2/all').then(response => {
//       setCountries(response.data);
//     });
//   };

//   console.log(countries);

//   useEffect(() => {
//     getCountries();
//   }, []);

//   const [value, setValue] = useState('');

//   // const filteredCountries = countries.filter(country => {
//   //   return country.name.toLowerCase().includes(value.toLowerCase())
//   // })

//   const [isOpen, setIsOpen] = useState(true);

//   const itemClickHandler = (e: any) => {
//     setValue(e.target.textContent)
//     setIsOpen(!isOpen)
//   }

//   const inputClickHandler = () => {
//     setIsOpen(true)
//   }

//   return (
//     <div>
//       <div className={s.form}>
//         <form className={s.search_form}>
//           <input
//             type="text"
//             placeholder="Search in the country..."
//             className={s.search_input}
//             value={value}
//             onChange={e => setValue(e.target.value)}
//             onClick={inputClickHandler}
//           />

//           {/* <ul className={s.autocomplete}>
//             {countries.map((country, index) => {
//               return (
//                 <li className={s.autocomplete_item} key={index}>
//                   {country}
//                 </li>
//                 // <li className={s.autocomplete_item} key={index}>{country.name}</li>
//               );
//             })}
//           </ul> */}

//           <ul className={s.autocomplete}>
//             {
//               value && isOpen
//               ? countries.map((country, index) => {
//                   return (
//                     <li className={s.autocomplete_item} key={index}
//                     onClick={itemClickHandler}
//                     >
//                       {country}
//                     </li>
//                   )
//               })
//               : null
//             }
//           </ul>

//           {/* <img src={img} alt="img" className={s.search_img} /> */}
//         </form>
//       </div>

//       <div className={s.countries}>
//         {/* {
//           countries.map((country, index) => {
//             return <CountryItem country={country} key={index} />;
//         })
//         } */}
//         {/* {
//           filteredCountries.map((country, index) => {
//             return <CountryItem country={country} key={index} />;
//         })
//         } */}
//       </div>
//     </div>
//   );
// };

// export const PopularPage = () => {
//   // const [params, setParams] = useSearchParams();
//   // const section = params.get('section') || 'all';

//   const { data: articles, isLoading } = useFetch<Article[]>('/articles');

//   return (
//     <div>
//       <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
//         <h2>Популярные статьи</h2>

//         {/* <Select
//           value={section}
//           onChange={e => {
//             params.set('section', e.target.value);
//             setParams(params);
//           }}
//           options={[
//             { label: 'Все', value: 'all' },
//             { label: 'Путешествия', value: 'Путешествия' },
//             { label: 'Животные', value: 'Животные' },
//           ]}
//         /> */}
//       </div>

//       {isLoading && <Loader />}

//       {!!articles && !isLoading && <ArticleList articles={articles} />}
//     </div>
//   );
// };
