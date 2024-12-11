# Standaard logboek dataverwerkingen


## Deze standaard is in ontwikkeling

- De laatste ontwikkelingen staan in de - branch [develop](https://github.com/Logius-standaarden/logboek-dataverwerkingen/tree/develop)
- De laatste versie van de standaard online lezen - [ReSpec publicatie](https://logius-standaarden.github.io/logboek-dataverwerkingen/)
- Meedoen aan de discussie en ontwikkeling kan via - [Mattermost Digilab omgeving](https://digilab.overheid.nl/chat/verwerkingenlogging)
- vragen kunnen worden gemailed aan [api@logius.nl](mailto:api@logius.nl) of als issue worden ingebracht [via deze link](https://github.com/Logius-standaarden/logboek-dataverwerkingen/issues)


## Inleiding

De overheid wil voor burgers en bedrijven zo transparant mogelijk zijn in de omgang met hun gegevens. Daarom is het bij de informatieverwerking in datasets belangrijk om voor elke mutatie of raadpleging vast te leggen wie deze actie wanneer uitvoert, en waarom. Deze herleidbaarheid speelt zowel een rol in het kader van de wetgeving op het gebied van privacy als ook het streven naar openheid en transparantie bij de overheid. Voor een optimale samenwerking over organisaties en bronnen heen is voor deze logging een algemene standaard nodig.

Het project Logboek Dataverwerkingen (voorheen: Verwerkingenlogging) maakt deel uit van het [actieplan Data bij de Bron](https://www.digitaleoverheid.nl/data-bij-de-bron/) en onderzoekt met Digilab in samenwerking met diverse overheidspartijen (ministeries, uitvoeringsorganisaties en gemeentes) of we op basis van de tot nu toe opgedane inzichten een overheidsbrede standaard kunnen vaststellen. Na het succesvol beproeven van de standaard wordt deze voorgesteld voor opname in de [‘Pas toe of leg uit’-lijst van het Forum voor Standaardisatie](https://forumstandaardisatie.nl/pas-toe-leg-uit-beleid).

> bron: [Digilab.nl](https://digilab.overheid.nl/projecten/logboek-dataverwerkingen/)


## Doel

De standaard Logboek Dataverwerkingen beschrijft een manier om technisch interoperabele functionaliteit voor het loggen van dataverwerkingen te implementeren, door voor de volgende functionaliteit de interface en het gedrag voor te schrijven:

- het wegschrijven van logs van dataverwerkingen
- het aan elkaar relateren van logs van dataverwerkingen
- het aan elkaar relateren van dataverwerkingen over de grenzen van systemen


## Overzicht

De Logboek Dataverwerkingen (LDV) standaard bestaat uit de volgende vier documenten:

| Beschrijving van het document           | Gepubliceerde versie                  | Werk versie                             | Repository                                                   |
| --------------------------------------- | ------------------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| 1. De LDV Normatieve Standaard | - | [Logboek dataverwerkingen (werkversie)](https://logius-standaarden.github.io/logboek-dataverwerkingen/) | [logboek-dataverwerkingen](https://github.com/Logius-standaarden/logboek-dataverwerkingen) |
| 2. De Algemene Inleiding | - | [De Algemene Inleiding (werkversie)](https://logius-standaarden.github.io/publicatie/api/Logboek_Algemeen/)|[logboek-dataverwerkingen_Inleiding](https://github.com/Logius-standaarden/logboek-dataverwerkingen_Inleiding)|
| 3. het Juridische Beleidskader | - |[Juridisch Beleidskader (werkversie)](https://logius-standaarden.github.io/publicatie/api/Logboek_Juridisch/)|[logboek-dataverwerkingen_Juridisch-beleidskader](https://github.com/Logius-standaarden/logboek-dataverwerkingen_Juridisch-beleidskader/)|
| 4. LDV Extensie voor objecten | - |[Onderzoek logboek dataverwerkingen voor (geo) objecten](https://geonovum.github.io/logboek-dataverwerkingen-voor-objecten/)|[logboek-dataverwerkingen-voor-objecten](https://github.com/geonovum/logboek-dataverwerkingen-voor-objecten/)|



## Om de standaard lokaal te gebruiken

```sh
# Start een webserver
make serve

# Genereer afbeeldingen van PlantUML-diagrammen
make diagrams

# Maak een statische versie
make snapshot

# Bekijk de statische versie
make serve-snapshot

# Verwijder de statische versie
make clean
```
