import { useBreakpoints } from '@vueuse/core';

const screens = {
  sm: 768,
  md: 992,
  lg: 1280,
  xl: 1600,
};
export function useBravadoBreakPoints() {
  return useBreakpoints(screens);
}
