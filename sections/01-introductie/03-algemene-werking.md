# Algemene werking van de standaard

{{Applicaties}} loggen metadata over {{Dataverwerkingen}} in een daarvoor ingerichte softwaretoepassing, het Logboek Dataverwerkingen. Elke Dataverwerking wordt apart gelogd. Dataverwerkingen binnen dezelfde context (bijvoorbeeld een organisatie of een verantwoordelijkheid binnen een organisatie) worden gegroepeerd met behulp van een Trace. Wanneer een Dataverwerking een andere Dataverwerking tot gevolg heeft worden de logregels van beide Dataverwerkingen aan elkaar gelinkt. Statische informatie over Dataverwerkingen kan worden opgezocht in Registers op basis van een verwijzing die in elke logregel wordt opgenomen.


## Extensies

De standaard Logboek Dataverwerkingen specificeert de basis voor het loggen en aan elkaar relateren van Dataverwerkingen.
Aanvullende functionaliteit wordt gestandaardiseerd in `extensies`:

- *Extensie Betrokkenen*<br>
  Met deze extensie wordt meer precies uitgewerkt hoe de identiteit van een {{Betrokkene}} wordt gerelateerd aan een verwerking, zodat actief informeren of het faciliteren van inzageverzoeken gestandaardiseerd mogelijk wordt. Dit is een nadere uitwerking van wat in de kern van de standaard al mogelijk is rond vastlegging van de {{Betrokkene}}.

- *Extensie Verwerkte Data*<br>
  Deze extensie specificeert een uniforme manier om verwerkte data in logregels op te nemen.

- *Extensie Inzage*<br>
  Deze extensie heeft een afhankelijkheid van de extensies *Betrokkenen* en *Verwerkte Data*, en biedt een interface op de logs vanuit een bepaald perspectief.

- *Extensie (geo)objecten*<br>
  Deze extensie specificeert hoe dataverwerkingen voor [objecten](https://geonovum.github.io/logboek-dataverwerkingen-voor-objecten/) kunnen worden vastgelegd en beheerd in een logboek.


## Profielen

In een **profiel** worden aanvullende beperkingen en verplichtingen vastgelegd over het gebruik van de standaard. Op deze
manier kan een groep organisaties interoperabiliteit organiseren. Voorbeelden van aanvullende afspraken in een profiel zijn:

- De combinatie van extensies die gebruikt wordt
- Afspraken over specifieke aanvullende eisen (bijvoorbeeld over [TLS](https://www.forumstandaardisatie.nl/open-standaarden/tls) configuratie)
- Afspraken over data-retentie
- De wijze waarop pseudonimisering van persoonsgegevens plaatsvindt


## Use case

Een typische use case voor het gebruik van de standaard is een samenwerking tussen meerdere organisaties die interoperabiliteit willen bereiken bij het loggen van Dataverwerkingen, om zo op eenduidige manier te kunnen verantwoorden over de dataverwerking.
