import { StatsButtons } from 'shared/features/Article/ArticleStatsButtons/StatsButtons';
import type { Article as ArticleType } from '../../../../shared/types/article';
import s from './post.module.css';

import avatar from 'assets/images/Logo_for_a_website_about_Lake_Baikal.png';
import { IconButton } from 'shared/components/IconButton';


type ArticleProps = {
  article: ArticleType;
};

// Карточка поста (отдельной статьи)

// export const ArticleView = ({ article }: ArticleProps) => {
//   return (
//     <div className={s.postCard}>
//       <div className={s.centeredContentWrapper}>
//         <div className={s.header}>
//           <div className={s.headerLeft}>
//             <span>{article.section}</span>
//             <div className={s.authorInfo}>
//               <img src={article.user.avatar} alt={`${article.user.fullName}'s Avatar`} className={s.avatar} />
//               <span>{article.user.fullName}</span>
//             </div>
//             <span>{article.publication_date}</span>
//           </div>
//           {/* <div className={styles.headerRight}>
//             <IconButton>...</IconButton>
//           </div> */}
//         </div>

//         <h2>{article.title}</h2>
//       </div>

//       <div className={s.coverImage}>
//         <img src={article.cover_image} alt="Cover" />
//       </div>

//       <div className={s.centeredContentWrapper}>{article.content}</div>
//       <div className={s.centeredContentWrapper}>
//         <StatsButtons likes={article.likes} />
//       </div>
//     </div>
//   );
// };

export const ArticleView = ({ article }: ArticleProps) => {
  return (
    <div className={s.postCard}>
      <div className={s.centeredContentWrapper}>
        {/* <span>{article.section}</span> */}
        <div className={s.header}>
          <h2 className={s.title}>{article.title}</h2>
          <div className={s.headerLeft}>
            <div className={s.authorInfo}>
              <img src={avatar} alt={`${article.user.fullName}'s Avatar`} className={s.avatar} />
              <span>{article.user.fullName}</span>
            </div>
            <span className={s.publication_date}>{article.publication_date}</span>
          </div>
          {/* <div className={s.headerRight}>
            <IconButton>...</IconButton>
          </div> */}
        </div>
        <div className={s.coverImage}>
          {/* исправить путь! */}
          <img src={article.cover_image} alt="Cover" />
          {/* <img src={baikal1} alt="Cover" /> */}
        </div>
        <div className={s.centeredContentWrapper}>
          <p className={s.content}>{article.content}</p>
        </div>

        {/* <h3 className={s.pod_title}>Географическое положение и размеры котловины</h3>
        <div className={s.centeredContentWrapper}>
          <p className={s.content}>
            Находится в центре Азии на границе Иркутской области и Республики Бурятия в Российской Федерации. Озеро
            протянулось с юго-запада на северо-восток на 636 км в виде гигантского полумесяца. Ширина водоёма колеблется
            в пределах от 24 до 79 км. Дно Байкала в самой глубокой его части на 1187 метров ниже уровня Мирового
            океана. Высотная отметка уреза воды Байкала установлена (так как Байкал зарегулирован) в пределе 456—457
            метров над уровнем моря, но в Тихоокеанской системе высот. В результате «реальный» уровень Байкала
            фактически неизвестен.
          </p>
          <p className={s.content}>
            Площадь водной поверхности Байкала — 31 722 км² (без учёта островов), что примерно равно площади таких
            стран, как Бельгия или Нидерланды. По площади водного зеркала Байкал занимает седьмое место среди крупнейших
            озёр мира. Площадь водосборного бассейна — 571 тыс. км². Длина береговой линии — 2000 км.
          </p>
          <p className={s.content}>
            Озеро находится в своеобразной котловине, со всех сторон окружённой горными хребтами и сопками. При этом
            западное побережье — скалистое и обрывистое, рельеф восточного побережья — более пологий (местами горы
            отступают от берега на десятки километров).
          </p>
        </div>
        <div className={s.coverImage}>
          <img src={article.cover_image} alt="Cover" />
          <img src={baikal2} alt="Cover" />
        </div> */}

        {/* <h3 className={s.pod_title}>Глубины</h3> */}
        {/* <div className={s.centeredContentWrapper}>
          <p className={s.content}>
            Байкал — самое глубокое озеро на Земле. Современное значение максимальной глубины озера — 1642 м — было
            установлено в 1983 году Л. Г. Колотило и А. И. Сулимовым во время выполнения гидрографических работ
            экспедицией ГУНиО МО СССР.
          </p>
          <p className={s.content}>
            Максимальная глубина была нанесена на карты в 1992 году и подтверждена в 2002 году в результате выполнения
            совместного бельгийско-испанско-российского проекта по созданию новой батиметрической карты Байкала, когда
            были оцифрованы глубины в 1 312 788 точках акватории озера (значения глубин были получены в результате
            перевычисления данных акустического зондирования, совмещённых с дополнительной батиметрической информацией,
            в том числе эхолокации и сейсмического профилирования; один из авторов открытия максимальной глубины, Л. Г.
            Колотило, был участником этого проекта).
          </p>
          <p className={s.content}>
            Озеро находится в своеобразной котловине, со всех сторон окружённой горными хребтами и сопками. При этом
            западное побережье — скалистое и обрывистое, рельеф восточного побережья — более пологий (местами горы
            отступают от берега на десятки километров).
          </p>
        </div> */}
        {/* <div className={s.coverImage}>
          <img src={article.cover_image} alt="Cover" />
          <img src={baikal3} alt="Cover" />
        </div> */}
      </div>
      {/* <div className={s.centeredContentWrapper}>
        <StatsButtons likes={article.likes} />
      </div> */}
    </div>
  );
};

// export const ArticleView = ({ article }: ArticleProps) => {
//   return (
//     <div className={s.postCard}>
//       <div className={s.centeredContentWrapper}>
//       {/* <span>{article.section}</span> */}
//         <div className={s.header}>
//           <h2 className={s.title}>{article.title}</h2>
//           <div className={s.headerLeft}>
//             <div className={s.authorInfo}>
//               <img src={avatar} alt={`${article.user.fullName}'s Avatar`} className={s.avatar} />
//               <span>{article.user.fullName}</span>

//             </div>
//             <span className={s.publication_date}>{article.publication_date}</span>
//           </div>
//           {/* <div className={styles.headerRight}>
//             <IconButton>...</IconButton>
//           </div> */}
//         </div>
//         <div className={s.coverImage}>
//           {/* исправить путь! */}
//         {/* <img src={article.cover_image} alt="Cover" /> */}
//         <img src={baikal1} alt="Cover" />
//         </div>
//         <div className={s.centeredContentWrapper}>
//           <p className={s.content}>
//             {article.content}
//           </p>
//         </div>

//         <h3 className={s.pod_title}>Географическое положение и размеры котловины</h3>
//         <div className={s.centeredContentWrapper}>
//           <p className={s.content}>Находится в центре Азии на границе Иркутской области и Республики Бурятия в Российской Федерации.
//              Озеро протянулось с юго-запада на северо-восток на 636 км в виде гигантского полумесяца.
//              Ширина водоёма колеблется в пределах от 24 до 79 км.
//              Дно Байкала в самой глубокой его части на 1187 метров ниже уровня Мирового океана.
//              Высотная отметка уреза воды Байкала установлена (так как Байкал зарегулирован) в пределе 456—457 метров над уровнем моря, но в Тихоокеанской системе высот.
//              В результате «реальный» уровень Байкала фактически неизвестен.
//           </p>
//           <p className={s.content}>
//           Площадь водной поверхности Байкала — 31 722 км² (без учёта островов), что примерно равно площади таких стран, как Бельгия или Нидерланды.
//           По площади водного зеркала Байкал занимает седьмое место среди крупнейших озёр мира. Площадь водосборного бассейна — 571 тыс. км².
//           Длина береговой линии — 2000 км.
//           </p>
//           <p className={s.content}>
//           Озеро находится в своеобразной котловине, со всех сторон окружённой горными хребтами и сопками.
//           При этом западное побережье — скалистое и обрывистое, рельеф восточного побережья — более пологий (местами горы отступают от берега на десятки километров).
//           </p>
//           </div>
//           <div className={s.coverImage}>
//         {/* <img src={article.cover_image} alt="Cover" /> */}
//         <img src={baikal2} alt="Cover" />
//         </div>

//         <h3 className={s.pod_title}>Глубины</h3>
//         <div className={s.centeredContentWrapper}>
//           <p className={s.content}>Байкал — самое глубокое озеро на Земле. Современное значение максимальной глубины озера — 1642 м — было установлено в 1983 году Л. Г. Колотило и А. И. Сулимовым во время выполнения гидрографических работ экспедицией ГУНиО МО СССР.
//           </p>
//           <p className={s.content}>
//           Максимальная глубина была нанесена на карты в 1992 году и подтверждена в 2002 году в результате выполнения совместного
//           бельгийско-испанско-российского проекта по созданию новой батиметрической карты Байкала, когда были оцифрованы глубины в
//           1 312 788 точках акватории озера (значения глубин были получены в результате перевычисления данных акустического зондирования,
//           совмещённых с дополнительной батиметрической информацией, в том числе эхолокации и сейсмического профилирования; один из авторов
//           открытия максимальной глубины, Л. Г. Колотило, был участником этого проекта).
//           </p>
//           <p className={s.content}>
//           Озеро находится в своеобразной котловине, со всех сторон окружённой горными хребтами и сопками.
//           При этом западное побережье — скалистое и обрывистое, рельеф восточного побережья — более пологий (местами горы отступают от берега на десятки километров).
//           </p>
//           </div>
//           <div className={s.coverImage}>
//         {/* <img src={article.cover_image} alt="Cover" /> */}
//         <img src={baikal3} alt="Cover" />
//         </div>

//       </div>
//       <div className={s.centeredContentWrapper}>
//         <StatsButtons likes={article.likes} />
//       </div>
//     </div>
//   );
// };

// export const ArticleView = ({ article }: ArticleProps) => {
//   return (
//     <div className={s.postCard}>
//       <div className={s.centeredContentWrapper}>
//         <div className={s.header}>
//           <div className={s.headerLeft}>
//             <span>{article.section}</span>
//             <div className={s.authorInfo}>
//               <img src={article.user.avatar} alt={`${article.user.fullName}'s Avatar`} className={s.avatar} />
//               <span>{article.user.fullName}</span>
//             </div>
//             <span>{article.publication_date}</span>
//           </div>
//           {/* <div className={styles.headerRight}>
//             <IconButton>...</IconButton>
//           </div> */}
//         </div>

//         <h2>{article.title}</h2>
//       </div>

//       <div className={s.coverImage}>
//         <img src={article.cover_image} alt="Cover" />
//       </div>

//       <div className={s.centeredContentWrapper}>{article.content}</div>
//       <div className={s.centeredContentWrapper}>
//         <StatsButtons likes={article.likes} />
//       </div>
//     </div>
//   );
// };
