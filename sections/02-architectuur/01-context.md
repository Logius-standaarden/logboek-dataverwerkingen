# Context

Op hoog abstractieniveau zijn voor het begrijpen van deze standaard de volgende componenten te onderscheiden:

- {{Applicatie}}
- {{Logboek}}
- {{Register}}

Applicaties schrijven logs over Dataverwerkingen weg in een Logboek.
Logregels in het Logboek verwijzen naar nadere informatie in een Register.

Een Dataverwerking kan plaatsvinden over de grenzen van een verantwoordelijkheid. In dat geval roept een Applicatie van Verantwoordelijke A de Applicatie van Verantwoordelijke B aan. Denk bijvoorbeeld aan het bevragen of muteren van data via een Application Programming Interface (API).

Een Verantwoordelijke is bijvoorbeeld een organisatie, maar kan ook bestaan uit meerdere organisaties die allemaal onder dezelfde Verantwoordelijke werk uitvoeren. Denk daarbij aan Verwerkers in het kader van de AVG.

Iedere Verantwoordelijke kan een veelheid aan Applicaties, Logboeken en Registers gebruiken.
Iedere Verantwoordelijke houdt alleen Logregels bij over eigen Dataverwerkingen.
Op basis van metadata die tussen Applicaties wordt uitgewisseld is het mogelijk om bij elkaar behorende Logregels in meerdere Logboeken aan elkaar te relateren.

Registers bevatten statische informatie waar vanuit Logregels naar verwezen kan worden voor extra informatie over een Dataverwerking.

![architecture](diagrams/architecture-context.svg "Componenten in context")

De standaard beschrijft de interfaces (in het diagram aangeduid met groene lijnen), en het gedrag van de componenten voor zover relevant om technisch interoperabel te worden.

De relatie tussen Logboek en Registers is los. Een Register hoeft niet digitaal te bestaan, wel moet een relatie gelegd kunnen worden vanuit de logregels in het Logboek naar aanvullende gegevens in Registers die de Logregels van nedere context voorzien.
