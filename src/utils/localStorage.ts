import type { FormValues } from '../components/OrderForm/OrderForm';

export const saveToLS = (key: string, value: FormValues): void => {
  const JSONData = JSON.stringify(value);
  localStorage.setItem(key, JSONData);
};

export const loadFromLS = (key: string) => {
  const data = localStorage.getItem(key);

  if (!data) return null;

  try {
    const parseData = JSON.parse(data);
    return parseData;
  } catch {
    return data;
  }
};
