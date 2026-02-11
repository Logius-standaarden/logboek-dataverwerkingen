# Standaard logboek dataverwerkingen

## Deze standaard is in ontwikkeling

- De laatste ontwikkelingen staan in de - branch [develop](https://github.com/Logius-standaarden/logboek-dataverwerkingen/tree/develop)
- De laatste versie van de standaard online lezen - [ReSpec publicatie](https://logius-standaarden.github.io/logboek-dataverwerkingen/)
- Meedoen aan de discussie en ontwikkeling kan via - [Mattermost Digilab omgeving](https://digilab.overheid.nl/chat/verwerkingenlogging)
- Vragen kunnen worden gemailed aan [api@logius.nl](mailto:api@logius.nl) of als issue worden ingebracht [via deze link](https://github.com/Logius-standaarden/logboek-dataverwerkingen/issues)

## Inleiding

De overheid wil voor burgers en bedrijven zo transparant mogelijk zijn in de omgang met hun data. Daarom is het bij de informatieverwerking in datasets belangrijk om voor elke mutatie of raadpleging vast te leggen wie deze actie wanneer uitvoert, en waarom. Deze herleidbaarheid speelt zowel een rol in het kader van de wetgeving op het gebied van privacy als ook het streven naar openheid en transparantie bij de overheid. Voor een optimale samenwerking over organisaties en bronnen heen is voor deze logging een algemene standaard nodig.

Het project Logboek Dataverwerkingen (voorheen: Verwerkingenlogging) maakt deel uit van het [actieplan Data bij de Bron](https://www.digitaleoverheid.nl/data-bij-de-bron/) en onderzoekt met Digilab in samenwerking met diverse overheidspartijen (ministeries, uitvoeringsorganisaties en gemeenten) of we op basis van de tot nu toe opgedane inzichten een overheidsbrede standaard kunnen vaststellen.

> bron: [Digitale overheid.nl](https://digilab.overheid.nl/projecten/logboek-dataverwerkingen/)

## Doel

De standaard Logboek Dataverwerkingen beschrijft een manier om technisch interoperabele functionaliteit voor het
loggen van dataverwerkingen te implementeren, door voor de volgende functionaliteit de interface en het gedrag voor te schrijven:

- het vastleggen van logs van dataverwerkingen
- het aan elkaar relateren van logs van dataverwerkingen
- het aan elkaar relateren van dataverwerkingen over de grenzen van systemen

Door Dataverwerkingen te loggen volgens de standaard kunnen organisaties het datagebruik verantwoorden. De standaard is gericht op verantwoording van Dataverwerkingen door Nederlandse (overheids)organisaties, gelet op onder meer de Algemene Verordening Gegevensbescherming en de Algemene Wet Bestuursrecht.

## Overzicht

De Logboek Dataverwerkingen (LDV) standaard bestaat uit de volgende vier documenten:

| Beschrijving van het document  | Gepubliceerde versie                                                                   | Werk versie                                                                                                                            | Repository                                                                                                                                |
|--------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| 1. De LDV Normatieve Standaard | [1.0.0](https://gitdocumentatie.logius.nl/publicatie/logboek/dataverwerkingen/1.0.0/)  | [Logboek dataverwerkingen (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen/)                                | [logboek-dataverwerkingen](https://github.com/Logius-standaarden/logboek-dataverwerkingen)                                                |
| 2. De Algemene Inleiding       | [1.0.0](https://gitdocumentatie.logius.nl/publicatie/logboek/inleiding/1.0.0/)         | [De Algemene Inleiding (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/)                         | [logboek-dataverwerkingen-inleiding](https://github.com/Logius-standaarden/logboek-dataverwerkingen-inleiding)                            |
| 3. Het Juridische Beleidskader | [1.0.0](https://gitdocumentatie.logius.nl/publicatie/logboek/juridisch/1.0.0/)         | [Juridisch Beleidskader (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/)           | [logboek-dataverwerkingen-juridisch-beleidskader](https://github.com/Logius-standaarden/logboek-dataverwerkingen-juridisch-beleidskader/) |
| 4. LDV Extensie Guideline      | [1.0.0](https://gitdocumentatie.logius.nl/publicatie/logboek/extensie-template/1.0.0/) | [Guideline voor het schrijven van een extensie voor LDV (werkversie)](https://logius-standaarden.github.io/logboek-extensie-template/) | [logboek-extensie-template](https://github.com/Logius-standaarden/logboek-extensie-template)                                              |
| 5. LDV Extensie Objecten       | -                                                                                      | [Logboek Dataverwerkingen Extensie (Geo)objecten (werkversie)](https://logius-standaarden.github.io/logboek-extensie-object/)          | [logboek-extensie-object](https://github.com/Logius-standaarden/logboek-extensie-object/)                                                 |
| 6. LDV Extensie Lezen          | -                                                                                      | [Logboek Dataverwerkingen Extensie Lezen (werkversie)](https://logius-standaarden.github.io/logboek-extensie-lezen/)                   | [logboek-extensie-lezen](https://github.com/Logius-standaarden/logboek-extensie-lezen)                                                    |
