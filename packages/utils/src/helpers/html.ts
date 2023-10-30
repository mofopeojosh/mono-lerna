import { HighlightedText } from '../types/graphql';

export const htmlHighlightedText = (entity: HighlightedText): string => {
  const { highlightFrom, highlightTo, text } = entity;
  if (highlightFrom == null || highlightTo == null) {
    return text;
  }
  const newSubstr = `<strong>${text.slice(highlightFrom, highlightTo)}</strong>`;
  return [text.slice(0, highlightFrom), newSubstr, text.slice(highlightTo, text.length)].join('');
};
