import numeral from 'numeral';
import 'numeral/locales';

export function formatBRL(value) {
  numeral.locale('pt-br');
  return numeral(value).format('$ 0,0.00');
}
