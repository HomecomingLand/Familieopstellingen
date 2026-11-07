import { site } from '../site.config';

/**
 * Pricing rule (agreed with Jessica):
 *  - Private persons pay the listed price, VAT INCLUDED  (e.g. € 120 total).
 *  - Companies pay the listed price EXCLUDING VAT, plus VAT on top (e.g. € 120 + 21% = € 145.20).
 * The listed price is the `price` field of an event ("€ 120"). Non-numeric prices ("op aanvraag") return null.
 */
export type CustomerType = 'particulier' | 'bedrijf';

export function parsePrice(price?: string): number | null {
  if (!price) return null;
  const m = price.replace(/\s/g, '').match(/(\d+(?:[.,]\d{1,2})?)/);
  return m ? Number(m[1].replace(',', '.')) : null;
}

export function quote(base: number, type: CustomerType, rate = site.vatRate) {
  const r = (n: number) => Math.round(n * 100) / 100;
  if (type === 'bedrijf') {
    const vat = r(base * rate);
    return { net: r(base), vat, total: r(base + vat) };
  }
  const net = r(base / (1 + rate));
  return { net, vat: r(base - net), total: r(base) };
}

export function euro(n: number, locale: 'nl' | 'en') {
  return new Intl.NumberFormat(locale === 'nl' ? 'nl-BE' : 'en-IE', { style: 'currency', currency: 'EUR' }).format(n);
}
