import { TPagination, TParametr, TPatch } from './definitions';

export const addParamsToUrl = (url: string, params?: TParametr[]): string => {
  if (!params || params.length === 0) return url;
  const paramsStrigs = [];
  for (const item of params) {
    paramsStrigs.push(`${item.name}=${item.value}`);
  }
  return url + '?' + paramsStrigs.join('&');
};

export const addNextPrevious = <T extends TPagination>(
  initial: T
): TPatch<T> => {
  const nextUrl = initial.next ? new URL(initial.next) : getDummyParam();
  const previousUrl = initial.previous
    ? new URL(initial.previous)
    : getDummyParam();

  const newNext = nextUrl.searchParams.get('page') || '1';
  const newPrevious = previousUrl.searchParams.get('page') || '1';
  const rez: TPatch<T> = {
    ...initial,
    next_internal: parseInt(newNext),
    previous_internal: parseInt(newPrevious),
  };

  return rez;
};

const getDummyParam = () => ({
  searchParams: {
    get: (param: string) => '-1',
  },
});
