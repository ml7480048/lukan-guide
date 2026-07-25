/**
 * TEMPORARY IMAGERY.
 *
 * Every URL below is a verified Unsplash photograph, used as a stand-in until
 * Oleksandra's own photographs are available. Nothing here shows Oleksandra or
 * one of her groups, and no image is captioned as if it did.
 *
 * To replace a slot: drop the file into /public and swap the value. Nothing else
 * has to change. The full replacement list lives in README.md.
 */

const U = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const IMG = {
  // Room I — the field behind the opening plate. Blue hour over the Forum.
  hero: U('1678970388666-e50b8006ab51'),
  // Room II — a marble face, standing in for the portrait slot next to it.
  guide: U('1615497994569-db84b0f1dd55'),
  // Room IV — light in the dark, for the underground stratigraphy.
  underground: U('1491566102020-21838225c3c8'),
  // Room VII — the lit Colosseum above the ticket desk.
  desk: U('1552832230-c0197dd311b5'),
  // Inner section headers.
  around: U('1732271339895-c7d1873048ea'),
  museums: U('1492140818141-7b1370b0b5ee'),
  events: U('1526385915680-5f21e15e9fd0'),
  hotels: U('1548585742-1df49e753a83'),
  nightlife: U('1590273971191-2af8df641e2c'),
  shopping: U('1596627118111-5b6c7890bc1b'),
  info: U('1570803047969-3827d216c06c'),
  kids: U('1716807335095-8948ce6ab482'),
  phrasebook: U('1554533899-787ef890e98f'),
  figures: U('1560686930-c9f0bc1807cc'),
  vienna: U('1567597435927-80055c207c1c'),
} as const;

export const TOUR_IMG = {
  classic: U('1570803047969-3827d216c06c'),
  night: U('1552832230-c0197dd311b5'),
  antique: U('1509024644558-2f56ce76c490'),
  squares: U('1529154036614-a60975f5c760'),
  trastevere: U('1670792373724-39fd52df804e'),
  christian: U('1586884542514-f6bef0283446'),
  clement: U('1491566102020-21838225c3c8'),
  borghese: U('1716807335095-8948ce6ab482'),
  centuries: U('1558594144-7eeeaa34d22b'),
  vatican: U('1624347061892-822a65656966'),
  tivoli: U('1632403419014-c1a68ed5e3b8'),
  castelli: U('1697393009716-4341aaa3a198'),
  farnesina: U('1616878443669-3e10990549f3'),
  massimo: U('1548112996-1535f97de0de'),
  capitoline: U('1554533899-787ef890e98f'),
  giulia: U('1560686930-c9f0bc1807cc'),
  legends: U('1617452171508-5a66544a9bbb'),
  caravaggio: U('1666714049746-b5c064f764c7'),
  bernini: U('1529791231326-d72cd5c0c273'),
  bracciano: U('1663841365331-f8eb24e88e26'),
  ostia: U('1610529026778-bbe6214912b4'),
  subiaco: U('1671275548255-568917b45f81'),
} as const;
