const localConfig = {
  maxTocLevel: 3,
  specStatus: "WV",
  specType: "ST",
  pubDomain: "logboek",
  shortName: "dataverwerkingen",
  publishDate: "2024-12-13",
  publishVersion: "0.8.0",
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/logboek-dataverwerkingen/",
  
  edDraftURI: "https://logius-standaarden.github.io/logboek-dataverwerkingen/",

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
      companyURL: "https://logius.nl",
    },
    {
      name: "Martin van der Plas",
      company: "Logius",
      companyURL: "https://logius.nl",
    },
    {
      name: "Tim van der Lippe",
      company: "Logius",
      companyURL: "https://logius.nl",
    }
  ],
  authors: [
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

  github: "https://github.com/Logius-standaarden/logboek-dataverwerkingen",
  
  // Create PDF and link to file in header (optional):
  alternateFormats: [
    {
        label: "pdf",
        uri: "logboek-dataverwerkingen.pdf",
    },
  ],
};

const respecConfig = {...organisationConfig, ...localConfig}
