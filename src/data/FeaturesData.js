import React from "react";
import {
  GiBrutalHelm,
  GiBuoy,
  GiCandleHolder,
  GiCastleRuins,
  GiCannon,
  GiCastle,
  GiCat,
  GiCharm,
  GiIndianPalace,
} from "react-icons/gi";

const iconStyle = (Icon) => <Icon size="3rem" color="#fefefe" />;

export const featuresData = [
  {
    name: "Fantastyka",
    description:
      "Fantastyka w literaturze romantyzmu jest związana bardzo często z odwołaniami do wierzeń ludowych. Na wzór Szekspira romantycy wprowadzili postacie fantastyczne, zjawy i wizje do swoich utworów. Wystarczy przypomnieć Makbeta i jego majaki podczas uczty, na której pojawiają się widma zabitych i choćby Dziady.",
    icon: iconStyle(GiBrutalHelm),
    imgClass: "one",
  },
  {
    name: "Gotycyzm",
    description:
      "Gotycyzm na gruncie literackim zaistniał w formie tak zwanej powieści gotyckiej, która operowała charakterystycznym zespołem elementów. Pojawia się tu typowe ukształtowanie świata przedstawionego, miejscem akcji jest najczęściej tajemniczy zamek kryjący mroczną historię, w którym zamieszkują duchy przeszłości.",
    icon: iconStyle(GiCastle),
    imgClass: "two",
  },
  {
    name: "Orientalizm",
    description:
      "Orientalizm jest to przejawiająca się zarówno w literaturze jak i sztuce fascynacja życiem, tradycją i kulturą narodów Bliskiego i Dalekiego Wschodu. Twórcy zachwycali się w szczególności kulturą arabską, perską, chińską, hinduską i japońską.",
    icon: iconStyle(GiIndianPalace),
    imgClass: "three",
  },
  {
    name: "Tyrteizm",
    description:
      "Poezja tyrtejska to liryka apelu, mająca charakter nawoływania do walki. W Polsce tyrteizm jest charakterystyczny przede wszystkim dla epoki romantyzmu, kiedy kraj utracił niepodległość, a sposobu na jej odzyskanie upatrywano w otwartej wojnie z wrogiem.",
    icon: iconStyle(GiCannon),
    imgClass: "four",
  },
  {
    name: "Frenezja",
    description:
      "Nurt ten pojawił się przede wszystkim w obrębie powieści francuskiej (zwanej „czarnym” romansem). Do najważniejszych wyróżników tej tendencji należy wprowadzanie do utworu mrocznych i krwawych motywów. Najczęściej fabuła...",
    icon: iconStyle(GiCharm),
    imgClass: "five",
  },
  //   {
  //     name: "Photography",
  //     description: "Travel Photography, Product Photography",
  //     icon: iconStyle(FaPhotoVideo),
  //     imgClass: "six",
  //   },
];
