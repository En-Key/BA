import avatar from 'assets/images/avatar.jpg';
import s from './footer.module.css'; // Путь к вашему файлу стилей
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from 'router/routes';

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footer_top}>
        <div className={s.footer_container}>
          {/* <h1>Остались вопросы?</h1> */}
          <Link to={ROUTES.ROOT} className={s.footer_top_link}>
            Baikal Travel
          </Link>
          <Link to={ROUTES.MAP} className={s.footer_top_link}>
            Карта
          </Link>
          <Link to={ROUTES.SIGHTS} className={s.footer_top_link}>
            Места
          </Link>
          <Link to={ROUTES.GALLERY} className={s.footer_top_link}>
            Галерея
          </Link>
        </div>
      </div>
    </div>
  );
};

//       <div className={s.footer_bottom}>
//         <div className={s.footer_container}>
//           <div className={s.leftSection}>
//             <Link to={ROUTES.ROOT} className={s.logo}>
//               Baikal Travel
//             </Link>
//           </div>

//           <div className={s.rightSection}>
//             <ul className={s.header_nav_list}>
//               <Link to={ROUTES.MAP} className={s.header_nav_item}>
//                 Карта
//               </Link>
//               <Link to={ROUTES.SIGHTS} className={s.header_nav_item}>
//                 Места
//               </Link>
//               <Link to={ROUTES.GALLERY} className={s.header_nav_item}>
//                 Галерея
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

//   return (
//     // <!-- footer -->
//     // <footer class="page-footer">
//     //   <div class="page-footer__top">
//     //     <div class="container">
//     //       <div class="page-footer__row">

//     //         <!-- footer top -->
//     //         <div class="page-footer__contact">
//     //           <div class="page-footer__contact-column">
//     //             <ul class="page-footer__contact-column-title">
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">О студии</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Направления</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Преподаватели</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Расписание</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Контакты</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Личный кабинет</a></li>
//     //             </ul>
//     //           </div>
//     //           <div class="page-footer__contact-column">
//     //             <ul class="page-footer__contact-column-title">
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Подарочные сертификаты</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Пробное занятие</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Стоимость занятий</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Группы и расписание</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Индивидуальные занятия</a></li>
//     //             </ul>
//     //           </div>
//     //           <div class="page-footer__contact-column">
//     //             <ul class="page-footer__contact-column-title">
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Аренда</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Оферта</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Политика конфиденциальности</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Заказать звонок</a></li>
//     //             </ul>
//     //           </div>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <!-- footer-bottom -->
//     //   <div class="page-footer__bottom">
//     //     <div class="container">
//     //       <div class="page-footer__bottom-row">
//     //         <div class="page-footer__bottom-contact-column">
//     //           <a href="index.html"><img src="images/logo-footer.svg" alt="logo"></a>
//     //           <div class="page-footer__bottom-contact-column-title">
//     //             <p>
//     //               СТУДИЯ ДЖАЗОВОГО ТАНЦА
//     //             </p>
//     //             <p>
//     //               <a href="#!">© Dance Space 1999-2023 гг.</a>
//     //             </p>
//     //           </div>
//     //         </div>

//     //         <!-- contacts -->
//     //         <address class="page-footer__bottom-contact">
//     //           <div class="page-footer__bottom-contact-column-phone">
//     //             <p>
//     //               <a href="tel:+78009999999">8 800 999 99 99</a><br>
//     //               <p>Нижний Новгород, ул. Ульянова д. 1</p>
//     //             </p>
//     //           </div>
//     //         </address>

//     //         <!-- social -->
//     //         <div class="page-footer__social">
//     //           <a href="mailto:DanceSpace@gmail.com">DanceSpace@gmail.com</a>
//     //           <ul class="social-list">
//     //             <li class="social-list__item"><a href="#!">
//     //               <img src="images/insragram.svg" alt="instagram">
//     //             </a></li>
//     //             <li class="social-list__item"><a href="#!">
//     //               <img src="images/vkontakte.svg" alt="vkontakte">
//     //             </a></li>
//     //             <li class="social-list__item"><a href="#!">
//     //               <img src="images/youtube.svg" alt="youtube">
//     //             </a></li>
//     //           </ul>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </footer>

//     <footer className={s.footer}>
//       <div className={s.footer_top}>
//         <div className={s.footer_container}>
//           <h1 className={s.footer_top_text}>Остались вопросы?</h1>
//           <p className={s.footer_top_description}>Мы поможем вам найти на них ответы</p>
//         </div>
//       </div>
