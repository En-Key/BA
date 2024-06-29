import { ReactNode } from 'react';
import s from './section.module.css';

// export type SectionProps = {
//   sectionData: Section;
// };

type mapPointsProps = {
  mapPointsData: mapPointsType;
};

export type mapPointsType = {
  id: number;
  coordinates: number[];
  hint: string;
  link?: string;
  image?: string;
  address?: string;
  content?: string;
};

export type Section = {
  id: number;
  pre_title?: string;
  hint: string;
  image?: string;
  content?: string;
};

export const Section = (props: mapPointsProps) => {
  const { mapPointsData } = props;

  return (
    <div className={s.container}>
    <div className={s.second_section}>
      <div className={s.second_section_container}>
        <h1 className={s.header}>{mapPointsData.hint}</h1>
        <div className={s.second_section_image}>
          <img className={s.second_section_image} src={mapPointsData.image} alt="Baikal-image" />
        </div>
        <p className={s.p}>{mapPointsData.content}</p>
      </div>
    </div></div>
  );
};

// export const Section = (props: SectionProps) => {
//   const { sectionData } = props;

//   return (
//     <div className={s.second_section}>
//         <div className={s.second_section_container}>
//         <div className={s.second_section_text}>
//             <div className={s.mini_header_container}>
//               <div className={s.mini_header}></div>
//               <p className={s.mini_header_p}>{sectionData.pre_title}</p>
//             </div>
//             <h1 className={s.header}>{sectionData.title}</h1>
//             <p className={s.p}>{sectionData.content}</p>
//         </div>
//         <div className={s.second_section_image}>
//             <img className={s.second_section_image} src={sectionData.cover_image} alt="Baikal-image" />
//         </div>
//         </div>
//     </div>
//   );
// };

// export const BaseContainer = ({ children }: { children: ReactNode }) => {
//   return <div className={style.baseContainer}>{children}</div>;
// };
