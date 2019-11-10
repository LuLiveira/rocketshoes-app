import numeral from 'numeral';
import 'numeral/locales';

export function format(value) {
  numeral.locale('pt-br');
  return numeral(value).format('$ 0,0.0');
}
