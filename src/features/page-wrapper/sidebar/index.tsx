import classes from 'classnames';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import s from './sidebar.module.css';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes, FaCanadianMapleLeaf, FaRegSnowflake } from 'react-icons/fa';
import { TbRouteSquare, TbBuildingPavilion, TbMapSearch } from 'react-icons/tb';
import { IoHome } from 'react-icons/io5';
import { FaQuestion, FaMountain, FaTreeCity } from 'react-icons/fa6';
import { GrGallery, GrScheduleNew } from 'react-icons/gr';
import { RiArticleLine, RiImageAddLine } from 'react-icons/ri';
import { VscNewFile } from 'react-icons/vsc';
// import { SiCodeclimate } from 'react-icons/si';
// import { BiSolidDonateHeart } from 'react-icons/bi';
// import { MdInsights, MdForest, MdLogin } from 'react-icons/md';
// import { GiWaterPolo } from 'react-icons/gi';
// import { PiArticleNyTimesDuotone } from 'react-icons/pi';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handler = () => {
      setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  type MenuItemType = {
    path: string;
    name: string;
    icon: any;
  };

  const menuItem: MenuItemType[] = [
    {
      path: ROUTES.ROOT,
      name: 'Главная',
      icon: <IoHome />,
    },
    {
      path: ROUTES.MAP,
      name: 'Карта',
      icon: <TbMapSearch />,
    },
    {
      path: ROUTES.SIGHTS,
      name: 'Места',
      icon: <FaTreeCity />,
    },
    {
      path: ROUTES.GALLERY,
      name: 'Галерея',
      icon: <GrGallery />,
    },
    {
      path: ROUTES.POPULAR,
      name: 'Статьи',
      icon: <GrScheduleNew />,
    },
    // {
    //   path: ROUTES.FRESH,
    //   name: 'Статьи',
    //   icon: <RiArticleLine />,
    // },

    {
      path: ROUTES.CREATE_ARTICLE,
      name: 'Создать',
      icon: <VscNewFile />,
    },
    {
      path: ROUTES.SEASONS,
      name: 'Фото',
      icon: <RiImageAddLine />,
    },
    {
      path: ROUTES.FAQ,
      name: 'Вопросы',
      icon: <FaQuestion />,
    },
    // {
    //   path: ROUTES.CLIMATE,
    //   name: 'Климат',
    //   icon: <FaRegSnowflake />,
    // },
    // {
    //   path: ROUTES.ROUTES,
    //   name: 'Маршруты',
    //   icon: <TbRouteSquare />,
    // },
    // {
    //   path: `${ROUTES.ARTICLE}/:id`,
    //   name: 'Статьи',
    //   icon: <RiArticleLine />,
    // },
    // {
    //   path: ROUTES.DONATE,
    //   name: 'Поддержать',
    //   icon: <BiSolidDonateHeart />,
    // },
    // {
    //   path: ROUTES.SEASONS,
    //   name: 'Сезоны',
    //   icon: <FaCanadianMapleLeaf />,
    // },
    // {
    //   path: ROUTES.NATURE,
    //   name: 'Природа',
    //   icon: <MdForest />,
    // },
    // {
    //   path: ROUTES.AUTH,
    //   name: 'Войти',
    //   icon: <MdLogin />,
    // },
  ];

  return (
    <div className={s.sidebar_container}>
      <div className={s.sidebar}>
        <div className={s.top_section}>
          <div className={s.bars}>
            <button className={s.nav_btn} onClick={toggle}>
              <FaBars />
            </button>
          </div>
        </div>
        <div style={{ height: isOpen ? '690px' : '0' }} className={s.bottom_section}>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={({ isActive }) => classes(s.link, { [s.active]: isActive })}>
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
