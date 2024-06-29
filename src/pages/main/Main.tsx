import React, { useContext, useState } from 'react';
import clsx from 'clsx';

// import main_banner_light from 'assets/images/lake-baikal-light.png';
// import main_banner_light from 'assets/images/main-banner-light.png';
import main_banner_light from 'assets/images/Main-banner-light-new2.jpg';
import main_banner_dark from 'assets/images/main-banner-dark.png';
import second_banner from 'assets/images/baikal_main1.png';
import third_banner from 'assets/images/baikal_main2.png';

import s from './main.module.css';
import { ThemeContext } from 'features/context/i18n';
import { faqList } from 'shared/mocks/faqList';
import { Accordeon } from 'shared/components/Accordeon';
import { Slider } from 'shared/components/Slider';
import { Maps } from 'pages/map/Map';

export const Main = () => {
 
  const Data = useContext(ThemeContext);
  if (!Data) return null;
  const { theme, setTheme } = Data;

  // const handleLightThemeClick = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light')
  // }

  let darkTheme;

  if (theme === 'dark') {
    darkTheme = true;
  } else darkTheme = false;

  return (
    <>
    <div className={s.main_container}>
      <div className={s.main}>
        <div className={s.main_banner}>
          {!darkTheme && <img className={s.main_banner_image} src={main_banner_light} alt="Baikal-image" />}
          {darkTheme && <img className={s.main_banner_image} src={main_banner_dark} alt="Baikal-image" />}
          <div className={s.main_banner_header}>
            <h1>
              Добро пожаловать
              <br />
              на Байкал
            </h1>
            <h3 className={s.main_header_description}>Самое Сердце Сибири</h3>
          </div>
        </div>
      </div>
      </div>

      <section className={s.second_section}>
        <div className={s.second_section_container}>
          <div className={s.second_section_text}>
            <div className={s.mini_header_container}>
              <div className={s.mini_header}></div>
              <p className={s.mini_header_p}>УЗНАТЬ О БАЙКАЛЕ</p>
            </div>
            <h1 className={s.header}>Озеро Байкал</h1>
            <p className={s.p}>
              Озеро Байкал – это настоящая сокровищница природы. <br />
              Его воды являются одними из самых чистых и прозрачных на Земле, а берега украшены величественными горами,
              пышными лесами и бескрайними степями. <br />
              Байкал известен также своим удивительным разнообразием флоры и фауны. <br />
              Здесь можно встретить множество уникальных видов растений и животных, в том числе и тех, которые не
              встречаются больше нигде на планете. <br />
              Озеро Байкал также является местом миграции для многих видов птиц, что делает его настоящим райским
              уголком для фотографов дикой природы. Оно расположено в южной части Восточной Сибири и является самым
              глубоким и старым озером на планете. <br />
              Байкал – это не просто озеро, это уникальный экосистемный комплекс, который притягивает внимание ученых и
              туристов со всего мира.
            </p>
          </div>
          <div className={s.second_section_image}>
            <img className={s.second_section_image} src={second_banner} alt="Baikal-image" />
          </div>
        </div>
      </section>

      <section className={s.third_section}>
        <div className={s.second_section_container}>
          <div className={s.second_section_text}>
            <div className={s.mini_header_container}>
              <div className={s.mini_header}></div>
              <p className={s.mini_header_p}>ЧТО МЫ ДЕЛАЕМ</p>
            </div>
            <h1 className={s.header}>О проекте</h1>
            <p className={s.p}>
              Очень часто начинающим путешественникам сложно определиться с направлением, выбором маршрута, возникает
              множество вопросов. <br />
              Мы постараемся помочь вам в этом.
            </p>
          </div>
          <div className={s.second_section_image}>
            <img className={s.second_section_image} src={third_banner} alt="Baikal-image" />
          </div>
        </div>
      </section>

      <section className={s.second_section}>
        <div className={s.second_section_container}>
          <div className={s.second_section_text}>
            <div className={s.mini_header_container}>
              <div className={s.mini_header}></div>
              <p className={s.mini_header_p}>ПОЛУЧИТЕ ОТВЕТ НА СВОЙ ВОПРОС</p>
            </div>
            <h1 className={s.header}>Часто задаваемые вопросы</h1>
          </div>
        </div>
        <Accordeon faqList={faqList} />
      </section>

      <section className={s.third_section}>
        <div className={s.second_section_container}>
          <div className={s.second_section_text}>
            <div className={s.mini_header_container}>
              <div className={s.mini_header}></div>
              <p className={s.mini_header_p}>ПУТЕШЕСТВУЙТЕ С НАМИ</p>
            </div>
            <h1 className={s.header}>Популярные направления</h1>
          </div>
        </div>
        <Slider />
      </section>

      <section className={s.second_section}>
        <div className={s.second_section_container}>
          <div className={s.second_section_text}>
            <div className={s.mini_header_container}>
              <div className={s.mini_header}></div>
              <p className={s.mini_header_p}>ИНТЕРЕСНЫЕ МЕСТА</p>
            </div>
            <h1 className={s.header}>Карта Байкала</h1>
          </div>
        </div>
        <Maps />
      </section>
      {/* <StatsButtons likes={postData.likes} /> */}
    </>
  );
};
