# Architectuur

Deze sectie beschrijft de algemene architectuur voor het loggen van dataverwerkingen bij toepassing van deze standaard.

## Context

Op hoog abstractieniveau zijn voor het begrijpen van deze standaard de volgende componenten te onderscheiden:

* {{Applicatie}}
* {{Logboek}}
* {{Register}}

Applicaties schrijven logs over Dataverwerkingen weg in een Logboek.
Logregels in het Logboek verwijzen naar nadere informatie in een Register.

Een Dataverwerking kan plaatsvinden over de grenzen van een verantwoordelijkheid. In dat geval roept een Applicatie van Verantwoordelijke A de Applicatie van Verantwoordelijke B aan. Denk bijvoorbeeld aan het bevragen of muteren van data via een Application Programming Interface (API).

Een Verantwoordelijke is bijvoorbeeld een organisatie, maar kan ook bestaan uit meerdere organisaties die allemaal onder dezelfde Verantwoordelijke werk uitvoeren. Denk daarbij aan Verwerkers in het kader van de AVG.

Iedere Verantwoordelijke kan een veelheid aan Applicaties, Logboeken en Registers gebruiken.
Iedere Verantwoordelijke houdt alleen Logregels bij over eigen Dataverwerkingen.
Op basis van metadata die tussen Applicaties wordt uitgewisseld is het mogelijk om bij elkaar behorende Logregels in meerdere Logboeken aan elkaar te relateren.

Registers bevatten statische informatie waar vanuit Logregels naar verwezen kan worden voor extra informatie over een Dataverwerking.

![architecture](media/architecture-context.svg "Componenten in context")

De standaard beschrijft de interfaces (in het diagram aangeduid met groene lijnen), en het gedrag van de componenten voor zover relevant om technisch interoperabel te worden.

De relatie tussen Logboek en Registers is los. Een Register hoeft niet digitaal te bestaan, wel moet een relatie gelegd kunnen worden vanuit de logregels in het Logboek naar aanvullende data in Registers die de Logregels van nedere context voorzien.

## Componenten

Deze sectie beschrijft de verschillende componenten van de standaard.
Tevens is er een canoniek gegevensmodel ([SVG](./media/datamodel/canoniek.svg), [XLSX](./media/datamodel/canoniek.xlsx)) voor een uniforme structuur en terminologie voor alle relevante data die vastgelegd wordt in de verschillende componenten.

### Applicatie

Een {{Applicatie}} is een softwarecomponent of groep van softwarecomponenten waarmee een Dataverwerking wordt uitgevoerd. Een Applicatie kan in allerlei vormen voorkomen. Voor de architectuur is niet relevant welke vorm de Applicatie heeft, het is slechts relevant dat dit de component is waar een Dataverwerking wordt uitgevoerd.

In een Applicatie is de context van de Dataverwerking bekend, zoals welke Verwerkingsactiviteit wordt uitgevoerd met de Dataverwerking. Het is dan ook de Applicatie die het loggen van de Dataverwerking initiëert.

### Logboek

Een {{Logboek}} is een Applicatie met een specifieke rol in de context van deze standaard. In het Logboek worden Dataverwerkingen gelogd.

Dataverwerkingen in het Logboek zelf worden *niet* gelogd in een Logboek Dataverwerkingen, dit zou een oneindige recursiviteit veroorzaken.

### Register

Een {{Register}} bevat statische informatie over Dataverwerkingen. Elk record in een Register heeft een unieke identificatiecode waarmee de Verwerkingsactiviteit kan worden aangeduid. Deze identificatiecode wordt gebruikt om vanuit een Logregel te linken naar aanvullende informatie in een Register.

Het Register kan een Applicatie zijn, in dat geval is het een Applicatie met een specifieke rol in de context van deze standaard. Eventueel kan het ook een Register in de vorm van een document zijn.

Dataverwerkingen in het Register worden gelogd in een Logboek Dataverwerkingen.

Voor alle Dataverwerkingen waarbij persoonsdata worden verwerkt is wettelijk geregeld dat de Verwerkingsactiviteiten moeten worden beschreven in het zogenaamde Register van Verwerkingsactiviteiten (AVG art. 30). Dit Register wordt verondersteld aanwezig te zijn in iedere organisatie die de standaard Logboek Dataverwerkingen toepast.

Verwerkingsactiviteiten waarin geen persoonsdata worden verwerkt staan niet verplicht in het Register van Verwerkingsactiviteiten. De standaard laat ruimte om dit op te lossen naar eigen voorkeur:

* In het bestaande Register ook Verwerkingsactiviteiten opnemen zonder persoonsdata, al is dit niet wettelijk verplicht
* Zelf een ander Register opzetten met gelijke interface maar specifiek voor Verwerkingsactiviteiten zonder persoonsdata

Het is daarnaast ook mogelijk om Registers te gebruiken met heel andere statische informatie die meer context geeft over een Logregel, bijv. informatie over de gebruikte beslisregels of van toepassing zijnde normen. Dit wordt niet verder uitgewerkt.

<p class="note">Op dit moment is er geen specificatie voor het ontsluiten van een {{Register}} met een API.
Hier zal een toekomstige versie van de standaard wel in voorzien.

## Scope

In deze sectie wordt de scope van de standaard afgebakend.

### Vastlegging door Verantwoordelijke

Voor een juiste toepassing van de standaard is het nodig om strict de grenzen aan te houden die passen bij de Verantwoording die een {{Verantwoordelijke}} af moet kunnen leggen. Het wordt *AANBEVOLEN* om alle Dataverwerkingen te loggen alsof zij persoonsdata bevatten, ook wanneer de Dataverwerking geen persoonsdata betreft. Dit omdat het wettelijk kader dat leidt tot verantwoordingsplicht breder is dan alleen de AVG. Logregels kunnen ook worden gebruikt voor bijvoorbeeld het verantwoorden welke data gebruikt zijn bij het nemen van een besluit.

Belangrijk uitgangspunt is dat een Verantwoordelijke alleen Logregels bijhoudt voor Dataverwerkingen die onder eigen verantwoordelijkheid plaatsvinden.

Een zogenaamde {{Verwerker}} die Dataverwerkingen uitvoert in opdracht van een Verantwoordelijke wordt in deze standaard beschouwd als deel van de Verantwoordelijke. Van welke Logboeken en Registers een Verwerker gebruik maakt is een implementatiekeuze.

<p class="note">Voor de juridische en beleidsmatige achtergronden van deze aanpak, met name de verantwoording over dataverwerkingen (zowel met als zonder persoonsdata), zie het [Juridisch Beleidskader](https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/).

### Geen inhoudelijke uitwisseling tussen Verantwoordelijken

Er wordt met de standaard geen inhoudelijke informatie over Dataverwerkingen uitgewisseld tussen Verantwoordelijken. Dit is niet nodig, aangezien iedere Verantwoordelijke alleen Logregels over eigen Dataverwerkingen vastlegt. De informatie die wordt uitgewisseld is beperkt tot zogenaamde {{Trace}}-informatie waarmee Logregels van de ene Verantwoordelijke gerelateerd kunnen worden aan Logregels bij de andere Verantwoordelijke.

![architecture](media/architecture-grenzen.svg "Context Dataverwerking meegeven over Grenzen")

### Geen specificatie voor het beheren van Logboeken

De standaard specificeert een interface voor het wegschrijven van Logregels. Dit is het deel dat in alle organisaties hetzelfde moet zijn om interoperabel te zijn. Het beheren van een Logboek is vrij in te vullen per implementatie.

Dit betekent o.a. dat de standaard *geen* gedrag of interfaces specificeert voor:

* het verwijderen of muteren van Logregels
* het regelen van toegang tot het Logboek
* het regelen van duurzame toegankelijkheid
* het regelen van archivering en verwijdering van Logregels

### Geen data over gebruikers in Logregels

In Logregels ligt geen informatie vast over welke specifieke medewerker van de Verantwoordelijke ofwel de gebruiker de Dataverwerking heeft uitgevoerd. Deze informatie hoort niet in het Logboek maar in een auditlog, en is daarmee buiten scope van de standaard. Wel is het mogelijk om vanuit auditlogs de relatie te leggen naar specifieke Logregels in het Logboek. Voor meer informatie over deze kwestie, zie het [besluit over gebruikers.](https://developer.overheid.nl/kennisbank/data/standaarden/logboek-dataverwerkingen/project-besluiten#geen-data-over-gebruikers-in-logregels).
