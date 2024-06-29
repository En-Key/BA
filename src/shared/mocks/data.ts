import nerpa from 'assets/images/nerpa 1.png';
import baykal from 'assets/images/red-sunset.png';
import icemountain from 'assets/images/ice-mountain 1.png';
import ice from 'assets/images/ice 1.png';
import lake from 'assets/images/lake 1.png';
import sun from 'assets/images/sun 1.png';
import zakat from 'assets/images/zakat 1.png';
import icy from 'assets/images/icy.png';
import vawe from 'assets/images/vawe.png';
import baykal1 from 'assets/images/baykal 1.png';
import nightBaikal from 'assets/images/night-baikal.jpg';
import nightBaikal2 from 'assets/images/night-baikal2.png';
import nightBaikal3 from 'assets/images/night-baikal3.png';
import nightBaikal4 from 'assets/images/night-baikal4.png';
import nightBaikal5 from 'assets/images/night-baikal5.png';
import nightBaikal6 from 'assets/images/night-baikal6.png';


export type CardDataType = {
  id: number;
  img: string;
  category: string;
  title: string;
  desc: string;
};

export const cardData: CardDataType[] = [
  {
    id: 1,
    img: nerpa,
    category: "животные",
    title: "Нерпа",
    desc: "Байкальский тюлень",
  },
  {
    id: 2,
    img: icemountain,
    category: "природа",
    title: "Зимний Байкал",
    desc: "Зимний Байкал",
  },
  {
    id: 3,
    img: baykal,
    category: "природа",
    title: "Закат зимой",
    desc: "Зимний Байкал",
  },
  {
    id: 4,
    img: ice,
    category: "природа",
    title: "Лёд Байкала",
    desc: "Зимний Байкал",
  },
  {
    id: 5,
    img: lake,
    category: "вода",
    title: "Горы",
    desc: "Байкал",
  },
  {
    id: 6,
    img: sun,
    category: "природа",
    title: "Лёд Байкала",
    desc: "Зимний Байкал",
  },
  {
    id: 7,
    img: zakat,
    category: "природа",
    title: "Зимний закат",
    desc: "Зимний Байкал",
  },
  {
    id: 8,
    img: icy,
    category: "природа",
    title: "Лёд",
    desc: "Зимний Байкал",
  },
  {
    id: 9,
    img: vawe,
    category: "природа",
    title: "Байкальские волны",
    desc: "Байкал летом",
  },
  {
    id: 10,
    img: baykal1,
    category: "растения",
    title: "Скала Шаманка",
    desc: "Байкал летом",
  },
  // {
  //   id: 11,
  //   img: nightBaikal,
  //   category: "ночь",
  //   title: "Ночной утёс",
  //   desc: "Лед Байкала ночью",
  // },
  {
    id: 12,
    img: nightBaikal2,
    category: "ночь",
    title: "Лед Байкала",
    desc: "Лед Байкала ночью",
  },
  {
    id: 13,
    img: nightBaikal3,
    category: "ночь",
    title: "Лед Байкала",
    desc: "Лед Байкала ночью",
  },
  {
    id: 14,
    img: nightBaikal4,
    category: "ночь",
    title: "Ночной утёс",
    desc: "Лед Байкала ночью",
  },
  {
    id: 15,
    img: nightBaikal5,
    category: "ночь",
    title: "вечерний Байкал",
    desc: "вечерний Байкал",
  },
  {
    id: 16,
    img: nightBaikal6,
    category: "ночь",
    title: "вечерний Байкал",
    desc: "вечерний Байкал",
  }, 
];