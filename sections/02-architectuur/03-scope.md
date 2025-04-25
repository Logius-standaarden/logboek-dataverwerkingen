# Scope

In deze sectie wordt de scope van de standaard afgebakend.

## Vastlegging door Verantwoordelijke

Voor een juiste toepassing van de standaard is het nodig om strict de grenzen aan te houden die passen bij de Verantwoording die een {{Verantwoordelijke}} af moet kunnen leggen. Het wordt *AANBEVOLEN* om alle Dataverwerkingen te loggen alsof zij persoonsdata bevatten, ook wanneer de Dataverwerking geen persoonsdata betreft. Dit omdat het wettelijk kader dat leidt tot verantwoordingsplicht breder is dan alleen de AVG. Logregels kunnen ook worden gebruikt voor bijvoorbeeld het verantwoorden welke data gebruikt zijn bij het nemen van een besluit.

Belangrijk uitgangspunt is dat een Verantwoordelijke alleen Logregels bijhoudt voor Dataverwerkingen die onder eigen verantwoordelijkheid plaatsvinden.

Een zogenaamde {{Verwerker}} die Dataverwerkingen uitvoert in opdracht van een Verantwoordelijke wordt in deze standaard beschouwd als deel van de Verantwoordelijke. Van welke Logboeken en Registers een Verwerker gebruik maakt is een implementatiekeuze.

## Geen inhoudelijke uitwisseling tussen Verantwoordelijken

Er wordt met de standaard geen inhoudelijke informatie over Dataverwerkingen uitgewisseld tussen Verantwoordelijken. Dit is niet nodig, aangezien iedere Verantwoordelijke alleen Logregels over eigen Dataverwerkingen vastlegt. De informatie die wordt uitgewisseld is beperkt tot zogenaamde {{Trace}}-informatie waarmee Logregels van de ene Verantwoordelijke gerelateerd kunnen worden aan Logregels bij de andere Verantwoordelijke.

![architecture](diagrams/architecture-grenzen.svg "Context Dataverwerking meegeven over Grenzen")

## Geen specificatie voor het beheren van Logboeken

De standaard specificeert een interface voor het wegschrijven van Logregels. Dit is het deel dat in alle organisaties hetzelfde moet zijn om interoperabel te zijn. Het beheren van een Logboek is vrij in te vullen per implementatie.

Dit betekent o.a. dat de standaard *geen* gedrag of interfaces specificeert voor:

* het verwijderen of muteren van Logregels
* het regelen van toegang tot het Logboek
* het regelen van duurzame toegankelijkheid
* het regelen van archivering en verwijdering van Logregels

## Geen data over gebruikers in Logregels

In Logregels ligt geen informatie vast over welke specifieke medewerker van de Verantwoordelijke ofwel de gebruiker de Dataverwerking heeft uitgevoerd. Deze informatie hoort niet in het Logboek maar in een auditlog, en is daarmee buiten scope van de standaard. Wel is het mogelijk om vanuit auditlogs de relatie te leggen naar specifieke Logregels in het Logboek. (toevoegen link naar Algemene inleiding, besluit over gebruikers)
