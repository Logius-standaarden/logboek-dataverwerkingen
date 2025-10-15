# Introductie

De standaard Logboek Dataverwerkingen beschrijft een manier om technisch interoperabele functionaliteit voor het loggen van dataverwerkingen te implementeren, door voor de volgende functionaliteit de interface en het gedrag voor te schrijven:

* het vastleggen van logs van dataverwerkingen
* het aan elkaar relateren van logs van dataverwerkingen
* het aan elkaar relateren van dataverwerkingen over de grenzen van systemen

Door Dataverwerkingen te loggen volgens de standaard kunnen organisaties het datagebruik verantwoorden.

## Werkingsgebied van de standaard

Functioneel toepassingsgebied: De standaard Logboek Dataverwerkingen kan worden toegepast als data wordt verwerkt in geautomatiseerde systemen.
Uitgangspunt is de verantwoordingsplicht van de overheid over de uitvoering van haar taken en de [wetten en kaders](https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/) die daarbij horen.

Organisatorisch werkingsgebied: Nederlandse overheden (Rijk, provincies, gemeenten en waterschappen) en instellingen uit de (semi-) publieke sector.

## Doelgroep

De standaard heeft als doelgroep iedereen die zich bezighoudt met het implementeren van logging rond dataverwerkingen en beschrijft alleen wat relevant is voor de implementatie.
Alle achterliggende overwegingen zijn te vinden in de [Algemene inleiding](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/) en het [Juridisch Beleidskader](https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/).

## Terminologie

De volgende lijst beschrijft terminologie in de betekenis zoals deze wordt gebruikt in dit document.

<dfn data-lt="Acties">Actie</dfn>

Een {{Dataverwerking}} bestaat uit één of meerdere kleinere discrete stappen. Een Actie is één discrete stap binnen een Dataverwerking.

<dfn data-lt="Applicaties">Applicatie</dfn>

Iedere softwaretoepassing waarmee {{Dataverwerkingen}} worden uitgevoerd.

<dfn data-lt="Betrokkenen">Betrokkene</dfn>

Als gegevens van rechtssubjecten door de overheid worden verwerkt, worden subjecten van wie de organisatie gegevens verwerkt de 'Betrokkene' genoemd. Betrokkenen in het kader van deze standaard kunnen zowel natuurlijke personen als rechtspersonen (bedrijven) zijn die met de verwerkte gegevens geïdentificeerd kunnen worden. Als identificeerbaar wordt beschouwd als een (rechts)persoon die direct of indirect kan worden geïdentificeerd, met name aan de hand van een identificerend gegeven zoals een (bedrijfs)naam, een identificatienummer, locatiedata of van een of meer elementen die kenmerkend zijn voor de fysieke, fysiologische, genetische, psychische, economische, culturele of sociale identiteit van die (rechts)persoon.

<dfn data-lt="Dataverwerkingen">Dataverwerking</dfn>

Iedere bewerking (of ieder geheel van bewerkingen) met betrekking tot gegevens, al dan niet uitgevoerd via geautomatiseerde procedures, zoals het verzamelen, vastleggen, ordenen, structureren, opslaan, bijwerken of wijzigen, opvragen, raadplegen, gebruiken, verstrekken door middel van doorzending, verspreiden of op andere wijze ter beschikking stellen, aligneren of combineren, afschermen, wissen of vernietigen van gegevens wordt opgevat als een Dataverwerking. Iedere Dataverwerking bestaat uit één of meerdere {{Acties}}.

<dfn>Inzage</dfn>

De {{Betrokkene}} heeft het recht om van de {{Verantwoordelijke}} uitsluitsel te verkrijgen over het al dan niet verwerken van hem betreffende gegevens en, wanneer dat het geval is, om inzage te verkrijgen van die gegevens. Voor natuurlijke personen sluit dit aan bij hun recht op inzage zoals bedoeld in de AVG, voor rechtspersonen([[AVG]], art. 15, lid 1). Voor rechtspersonen sluit dit aan bij het recht op transparantie over besluitvorming waar zij bij betrokken zijn. Met *Inzage* doelen we op de handeling waarmee uitvoering wordt gegeven aan dat recht.

<dfn data-lt="Logboeken">Logboek</dfn>

Softwaretoepassing waarmee het log van {{Dataverwerkingen}} wordt bijgehouden.

<dfn>Logregel</dfn>

Resultaat van een enkele gebeurtenis in de logging.

<dfn data-lt="Registers">Register</dfn>

Register waarin statische data over {{Verwerkingsactiviteiten}} worden geregistreerd en ter beschikking gesteld.

<dfn data-lt="Traces">Trace</dfn>

Concept waarmee bij elkaar behorende {{Dataverwerkingen}} binnen de grenzen van een systeem worden gegroepeerd.

<dfn data-lt="Verantwoordelijke|Verantwoordelijken|Verwerkingsverantwoordelijken">Verwerkingsverantwoordelijke</dfn>

Een natuurlijke persoon of rechtspersoon, een overheidsinstantie, een dienst of een ander orgaan die/dat, alleen of samen met anderen, het doel van en de middelen voor de verwerking van data vaststelt. Deze definitie is gebaseerd op ([[AVG]] art. 4, lid 7.), maar laat de verantwoordelijkheid betrekking hebben op de verwerking van álle data, niet alleen persoonsdata.

<p class="note">In de standaard wordt de Verwerkingsverantwoordelijke aangeduid als de Verantwoordelijke voor de leesbaarheid.

<dfn data-lt="Verwerkers">Verwerker</dfn>

Een natuurlijke persoon of rechtspersoon, een overheidsinstantie, een dienst of een ander orgaan die/dat ten behoeve van de {{Verwerkingsverantwoordelijke}} persoonsdata verwerkt. Deze definitie is gebaseerd op ([[AVG]] art. 4, lid 8.), maar laat de verantwoordelijkheid betrekking hebben op de verwerking van álle data, niet alleen persoonsdata.

<dfn data-lt="Verwerkingsactiviteiten">Verwerkingsactiviteit</dfn>

Activiteiten die een organisatie onderkent heeft als activiteiten waarbinnen {{Dataverwerkingen}} plaatsvinden.

## Algemene werking van de standaard

{{Applicaties}} loggen metadata over {{Dataverwerkingen}} in een daarvoor ingerichte softwaretoepassing, het Logboek Dataverwerkingen. Elke Dataverwerking wordt apart gelogd. Dataverwerkingen binnen dezelfde context (bijvoorbeeld een organisatie of een verantwoordelijkheid binnen een organisatie) worden gegroepeerd met behulp van een Trace. Wanneer een Dataverwerking een andere Dataverwerking tot gevolg heeft worden de logregels van beide Dataverwerkingen aan elkaar gelinkt. Statische informatie over Dataverwerkingen kan worden opgezocht in Registers op basis van een verwijzing die in elke logregel wordt opgenomen.

### Extensies

De standaard Logboek Dataverwerkingen specificeert de basis voor het loggen en aan elkaar relateren van Dataverwerkingen.
Aanvullende functionaliteit wordt gestandaardiseerd in `extensies`:

* *Extensie Betrokkenen*<br>
  Met deze extensie wordt meer precies uitgewerkt hoe de identiteit van een {{Betrokkene}} wordt gerelateerd aan een verwerking, zodat actief informeren of het faciliteren van inzageverzoeken gestandaardiseerd mogelijk wordt. Dit is een nadere uitwerking van wat in de kern van de standaard al mogelijk is rond vastlegging van de {{Betrokkene}}.

* *Extensie Verwerkte Data*<br>
  Deze extensie specificeert een uniforme manier om verwerkte data in logregels op te nemen.

* *Extensie Inzage*<br>
  Deze extensie heeft een afhankelijkheid van de extensies *Betrokkenen* en *Verwerkte Data*, en biedt een interface op de logs vanuit een bepaald perspectief.

* *Extensie (geo)objecten*<br>
  Deze extensie specificeert hoe dataverwerkingen voor [objecten](https://geonovum.github.io/logboek-dataverwerkingen-voor-objecten/) kunnen worden vastgelegd en beheerd in een logboek.

### Profielen

In een **profiel** worden aanvullende beperkingen en verplichtingen vastgelegd over het gebruik van de standaard. Op deze
manier kan een groep organisaties interoperabiliteit organiseren. Voorbeelden van aanvullende afspraken in een profiel zijn:

* De combinatie van extensies die gebruikt wordt
* Afspraken over specifieke aanvullende eisen (bijvoorbeeld over [TLS](https://www.forumstandaardisatie.nl/open-standaarden/tls) configuratie)
* Afspraken over data-retentie
* De wijze waarop [pseudonimisering](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/#pseudonimiseren-gegevens) van persoonsdata plaatsvindt

### Use case

Een typische use case voor het gebruik van de standaard is een samenwerking tussen meerdere organisaties die interoperabiliteit willen bereiken bij het loggen van Dataverwerkingen, om zo op eenduidige manier te kunnen verantwoorden over de dataverwerking.
