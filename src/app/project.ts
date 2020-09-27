export class Project {
  constructor(
    public name: string,
    public url: string,
    public img: string,
    public slogan: string,
    public desc: string,
    public tag: string,
    public company: string,
    public isToDo: Boolean = false,
    public externalLink: string = ''
  ) {}
}

export const Projects: Project[] = [
  new Project(
    'Service Platform',
    '/service-platform',
    'BService',
    '',
    'Cloud based BYTON service system for centralized info storage and data management',
    'Web',
    'BYTON'
  ),
  new Project(
    'WebCRD',
    '/CRD',
    'CRD',
    '',
    'Web CRD contains the registration records of broker-dealer firms and their associated individuals including their qualification, employment and disclosure histories to facilitates the processing of form filings, fingerprint submissions, qualification exams and continuing education sessions. ',
    'Web',
    'FINRA'
  ),
  new Project(
    'BYTON Website',
    '/BytonWeb',
    'BSite',
    '',
    'Conceptual design of BYTON website that translate next generation smart experience into the world of mobility',
    'Web',
    'BYTON'
  ),
];

export const Projects2: Project[] = [
  new Project(
    'Broker Check',
    '/brokercheck',
    'BrokerCheck',
    '',
    'BrokerCheck helps millions of investors make informed choices about brokers and brokerage firms and provides easy access to their investment adviser information.',
    'Web',
    'FINRA'
  ),
  new Project(
    'BYTON SED',
    '/BytonSED',
    'SED',
    '',
    'Design of a game-changing vision in mobility, with a dashboard-spanning shared experience display. A HMI that is intuitive, liberating, and designed for rider experience.',
    'HMI',
    'BYTON'
  ),
  new Project(
    'FinPro Gateway',
    '/FinPro',
    'FinPro',
    '',
    'FinPro is the Linkedin profile of Reps in the financial industry. The design work in this project also serve as the foundation and design language for many upcoming Apps under FINRA umbrella, such as NMLS, WebCRD, BrokerCheck etc.',
    'Web',
    'FINRA'
  ),

  new Project(
    'Fund Analyzer',
    '/fund-analyzer',
    'FA',
    '',
    'With a focus on fees and potential discounts among 30,000 products available today, Fund Analyzer help investors determine the funds meet their needs at the lowest cost while providing the best value.',
    'Web',
    'FINRA'
  ),
  new Project(
    'OFAC',
    '/ofac',
    'OFAC',
    '',
    'OFAC search tool prohibits transactions with certain persons and organizations listed as "terrorists" or "Specially designated blocked persons" for firms to check on an on-going basis to ensure their customer background',
    'Web',
    'FINRA'
  ),

];
