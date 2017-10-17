'use strict';

const innKeeper = require('../../characters/npc/innkeeper');

module.exports = {
  desc: 'A kocsma ezen része üres, csak a pultos törölget egy poharat a pult mögött.',
  deadNpcDesc: 'A kocsma ezen résza üres, a pult mögött sem áll senki, csak a legyek halk zümmögését hallod.',
  shortDesc: 'a távolban egy ház körvonalait látod. Egy kocsma.',
  npc: innKeeper,
  item: null,
  accessible: true
};