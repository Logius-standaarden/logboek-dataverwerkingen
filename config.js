const localConfig = {
  shortName: "logboek-dataverwerkingen",
  publishDate: "2024-12-13",
  publishVersion: "0.8.0",
  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen",

  license: "cc-by",
  specStatus: "wv",
  specType: "st",
  pubDomain: "api",
  useLogo: true,
  useLabel: true,
  maxTocLevel: 3,

  postProcess: [window.respecMermaid.createFigures],

  editors: [
    {
      name: "Jeroen Mulder",
      company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
      companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
    },
    {
      name: "Pieter Teekens",
      company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
      companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
    },
    {
      name: "Nil Barua",
      company: "Logius",
      companyURL: "https://github.com/Logius-standaarden",
    },
    {
      name: "Martin van der Plas",
      company: "Logius",
      companyURL: "https://github.com/Logius-standaarden",
    }
  ],
authors:
  [
    {
      name: "Eelco Hotting",
      company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
      companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
    },
    {
      name: "Vedran Bilanovic",
      company: "Ministerie van Binnenlandse Zaken en Koninkrijksrelaties",
      companyURL: "https://www.rijksoverheid.nl/ministeries/ministerie-van-binnenlandse-zaken-en-koninkrijksrelaties",
    },
  ],

  lint: {
    "local-refs-exist": true,
    "no-http-props": true,
    "no-unused-vars": true,
  },
  
  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
        label: "pdf",
        uri: "Juridisch_Beleidskader-Logboek_Dataverwerking.pdf",
    },
],
};

const respecConfig = {...organisationConfig, ...localConfig}
