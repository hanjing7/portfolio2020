export class Site {
  name: string;
  url: string;
  src: string;
}

export const Sites: Site[] = [
  {
    name: 'BrokerCheck',
    url: 'https://brokercheck.finra.org/',
    src: 'https://brokercheck.finra.org/ad857b185462ccd0b29e2d88f8e90ca3.png'
  },
  {
    name: 'OFAC',
    url: 'https://ofac.finra.org/#/',
    src:
      'https://www.bdginternational.com/wp-content/uploads/2017/09/Blog-Treasury-Dept-logo-1080x414.png'
  },
  {
    name: 'Fund Analyzer',
    url: 'https://tools.finra.org/fund_analyzer/',
    src: 'https://www.vizzit.se/h/wp-content/uploads/2016/08/header.logo_.web_.analyzer.png'
  },
  {
    name: 'Compliance Calendar',
    url: 'https://www.finra.org/compliance-calendar',
    src: 'https://d1.awsstatic.com/serverless/Lambda%20Resources%20images/Logos_cropped/finra_cropped.cec706e511713c50f0d41c88050d0e28879a7023.png'
  },
  {
    name: 'ADP Portal',
    url: 'http://mylife.adpts.com/',
    src: 'http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-ADP-Logo-PNG-Transparent.png'
  },
  {
    name: 'BYTON Home',
    url: 'https://www.byton.com/',
    src: 'https://www.byton.com/img/header-logo-dark.svg'
  }
];
