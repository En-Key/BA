import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../router/routes';
import { Article } from '../../../types/article';
import { StatsButtons } from '../ArticleStatsButtons/StatsButtons';
import s from './post.module.css';

import baikal1 from 'assets/images/Lake_Baikal 1.png';
// import baikal2 from 'assets/images/Baikal_2.png';
// import baikal3 from 'assets/images/Baikal_5.png';

import avatar from 'assets/images/avatar_img.jpg';
// import avatar from 'assets/images/avatar.jpg';

type PostCardProps = {
  postData: Article;
};

export const PostCard = (props: PostCardProps) => {
  const { postData } = props;

  return (
    <div className={s.postCard}>
      <div className={s.header}>
        <div className={s.headerLeft}>
          <span>{postData.section}</span>
          <div className={s.authorInfo}>
            {/* исправить путь! */}
          <img src={avatar} alt="avatar" className={s.avatar} />
            {/* <img src={postData.user.avatar} alt="avatar" className={s.avatar} /> */}
            {/* <span>{postData.user.fullName}</span> */}
          </div>
          <span>{postData.publication_date}</span>
        </div>
        <div className={s.headerRight}>
          {/* <button className={s.moreOptionsButton}>Подписаться</button> */}
        </div>
      </div>
      <Link to={`${ROUTES.ARTICLE}/${postData.id}`}>
        <h2 className={s.title}>{postData.title}</h2>
      </Link>

      <div className={s.coverImage}>
        {/* <img src={`${postData.cover_image}`} alt={postData.cover_image} /> */}
        <img src={postData.cover_image} alt={postData.cover_image} />
        {/* <img src={baikal1} alt="avatar"  /> */}
      </div>

      {/* <StatsButtons likes={postData.likes} /> */}
    </div>
  );
};
