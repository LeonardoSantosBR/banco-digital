import { Transform } from 'class-transformer';

export const PixKeyNormalize = () => {
  return Transform(({ value }) => value.replace(/[^\d]/g, ''));
};
