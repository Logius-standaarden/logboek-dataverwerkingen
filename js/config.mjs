import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  maxTocLevel: 3,
  specStatus: "CV",
  specType: "ST",
  pubDomain: "logboek",
  shortName: "dataverwerkingen",
  publishDate: "2025-11-27",
  publishVersion: "1.0.0",
  // TODO: verwijder voor publicatie
  latestVersion: "https://logius-standaarden.github.io/logboek-dataverwerkingen/",
  sotdText: {
    nl: {
      sotd: "Status van dit document",
      cv: `Dit is een consultatieversie. We moedigen gebruikers aan om meldingen of suggesties aan te maken via GitHub. Mocht dit niet mogelijk zijn, dan kunt u ook een e-mail sturen naar api@logius.nl`,
    },
  },
  prevVersion: [],

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

  localBiblio: {
    NEN7513: {
      authors: ["Normcommissie Informatievoorziening in de zorg"],
      date: "December 2024",
      href: "https://www.nen.nl/nen-7513-2024-nl-329182",
      publisher: "NEN",
      title: "Medische informatica - Logging - Vastleggen van acties op persoonlijke gezondheidsinformatie"
    },
  },
});
