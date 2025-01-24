import { Transform } from 'class-transformer';

export function CpfNormalize() {
  return Transform(({ value }) => value.replace(/[.-]/g, ''));
}
