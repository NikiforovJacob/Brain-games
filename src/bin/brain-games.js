#!/usr/bin/env node
import { dialog } from '..';
import startBrainCalc from '../games/calc';
import startBrainEven from '../games/even';
import startBrainGcd from '../games/gcd';
import startBrainPrime from '../games/prime';
import startBrainProgression from '../games/progression';

const games = [startBrainCalc,
  startBrainEven,
  startBrainGcd,
  startBrainPrime,
  startBrainProgression,
];

dialog(games);
