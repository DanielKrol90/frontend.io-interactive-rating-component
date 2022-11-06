import getElement from './getelments';
import { getElementAll } from './getelment.js';

export const ratingCard = getElement('.rating__card');
export const ratingBtns = getElement('.rating__card-scores');
export const eachBtns = getElementAll('.button__secondary');
export const submitBtn = getElement('.button__primary');
export const selectedCard = getElement('.thanks__card');
export const textResult = getElement('.thanks__rate-value-answer');
export const home = getElement('.home');
export const errorMessage = getElement('.error');