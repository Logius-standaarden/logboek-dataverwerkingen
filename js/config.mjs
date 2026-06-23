import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  maxTocLevel: 3,
  specStatus: "WV",
  specType: "ST",
  pubDomain: "logboek",
  shortName: "dataverwerkingen",
  publishDate: "2026-04-09",
  publishVersion: "1.0.0",
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
      companyURL: "https://www.logius.nl",
    },
    {
      name: "Martin van der Plas",
      company: "Logius",
      companyURL: "https://www.logius.nl",
    },
    {
      name: "Tim van der Lippe",
      company: "Logius",
      companyURL: "https://www.logius.nl",
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
  "logboek juridisch beleidskader": {
      authors: ["Wouter Diephuis", "Mirian van Ansem"],
      date: "09 april 2026",
      href: "https://gitdocumentatie.logius.nl/publicatie/logboek/juridisch/1.0.0/",
      publisher: "Logius",
      title: "Logboek Dataverwerkingen - Juridisch beleidskader"
    },
  },
});
