# Introductie

De standaard Logboek Dataverwerkingen beschrijft een manier om technisch interoperabele functionaliteit voor het loggen van {{Dataverwerkingen}} te implementeren, door voor de volgende functionaliteit de interface en het gedrag voor te schrijven:

* het vastleggen van logs van dataverwerkingen
* het aan elkaar relateren van logs van dataverwerkingen
* het aan elkaar relateren van dataverwerkingen over de grenzen van systemen

Door Dataverwerkingen te loggen volgens de standaard kunnen organisaties het datagebruik verantwoorden.

## Doelgroep

De standaard heeft als doelgroep iedereen die zich bezighoudt met het implementeren van logging rond dataverwerkingen en beschrijft alleen wat relevant is voor de implementatie.
Alle achterliggende overwegingen zijn te vinden in de [Algemene inleiding](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/) en het [Juridisch Beleidskader](https://logius-standaarden.github.io/logboek-dataverwerkingen-juridisch-beleidskader/).

## Terminologie

De volgende lijst beschrijft terminologie in de betekenis zoals deze wordt gebruikt in dit document.

<p class="note">Sommige termen zijn in bredere context al bekend, zoals <a>Applicatie</a>.
Deze sectie geeft een vernauwende definitie van deze termen om extra eisen te stellen.

<dfn data-lt="Acties">Actie</dfn>

Een Actie is één discrete stap binnen een {{Dataverwerking}}. 
Een Dataverwerking bestaat uit één of meerdere Acties.

<dfn data-lt="Applicaties">Applicatie</dfn>

Iedere softwaretoepassing waarmee {{Dataverwerkingen}} kunnen worden uitgevoerd.

<dfn data-lt="Betrokkenen">Betrokkene</dfn>

Als data van rechtssubjecten door een {{Verantwoordelijke}} worden verwerkt, wordt het subject de 'Betrokkene' genoemd.
Betrokkenen kunnen zowel natuurlijke personen als rechtspersonen (bedrijven) zijn die met de verwerkte data geïdentificeerd kunnen worden. 
Een (rechts)persoon is identificeerbaar als deze direct of indirect kan worden herkend. 
Dit kan aan de hand van kenmerken zoals een (bedrijfs)naam, identificatienummer of locatiedata, of door specifieke fysieke, economische of sociale eigenschappen.

<dfn data-lt="Dataverwerkingen">Dataverwerking</dfn>

Iedere bewerking die uitgevoerd wordt met gegevens, al dan niet uitgevoerd via geautomatiseerde procedures. 
Een Dataverwerking bestaat uit één of meerdere {{Acties}}. 
Dataverwerkingen omvatten bijvoorbeeld het verzamelen en vastleggen, het aanpassen en combineren, het inzien en gebruiken, het delen en verspreiden, en het beperken en verwijderen van gegevens. 

<dfn>Inzage</dfn>

De {{Betrokkene}} heeft het recht om van de {{Verantwoordelijke}} uitsluitsel te verkrijgen over het al dan niet verwerken van hem betreffende data en, wanneer dat het geval is, om inzage te verkrijgen van die data. 
{{Inzage}} is gedefinieerd als de handeling waarmee  dat recht wordt uitgevoerd. 
Voor natuurlijke personen sluit dit aan bij hun recht op inzage zoals bedoeld in de AVG, voor rechtspersonen([[AVG]], art. 15, lid 1). 
Voor rechtspersonen sluit dit aan bij het recht op transparantie over besluitvorming waar zij bij betrokken zijn. 

<dfn data-lt="Logboeken">Logboek</dfn>

Softwaretoepassing waarmee het log van {{Dataverwerkingen}} worden bijgehouden.

<dfn>Logregel</dfn>

Resultaat van een enkele {{Actie}} in de logging.

<dfn data-lt="Registers">Register</dfn>

Register waarin statische data over {{Verwerkingsactiviteiten}} worden vastgelegd en ter beschikking gesteld door de {{Verantwoordelijke}}.
Een Register bevat onder meer het doel van de verwerkingen opgenomen, zoals dit bijvoorbeeld op grond van de AVG voor verwerkingen van persoonsdata al verplicht is.
Registers in het kader van de standaard hebben een bredere reikwijdte dan persoonsdata.

<aside class="example">

Het Register van Verwerkingsactiviteiten (RvVA in het kader van de AVG) en het [Algoritmeregister](https://algoritmes.overheid.nl/nl) zijn voorbeelden van {{Registers}}.

</aside>

<dfn data-lt="Traces">Trace</dfn>

Concept waarmee bij elkaar behorende {{Acties}} en {{Dataverwerkingen}} van één of meerdere {{Applicaties}} worden gegroepeerd.

<dfn data-lt="Verantwoordelijke|Verantwoordelijken|Verwerkingsverantwoordelijken">Verantwoordelijke</dfn>

Een natuurlijke persoon of rechtspersoon, een overheidsinstantie, een dienst of een ander orgaan die/dat, alleen of samen met anderen, het doel van en de middelen voor de verwerking van data vaststelt. 
Deze definitie is gebaseerd op ([[AVG]] art. 4, lid 7.), maar laat de verantwoordelijkheid betrekking hebben op de verwerking van álle data, niet alleen persoonsdata.

<dfn data-lt="Verwerkers">Verwerker</dfn>

Een natuurlijke persoon of rechtspersoon, een overheidsinstantie, een dienst of een ander orgaan die/dat ten behoeve van de {{Verwerkingsverantwoordelijke}} data verwerkt. 
Deze definitie is gebaseerd op ([[AVG]] art. 4, lid 8.), maar laat de verantwoordelijkheid betrekking hebben op de verwerking van álle data, niet alleen persoonsdata.

<dfn data-lt="Verwerkingsactiviteiten">Verwerkingsactiviteit</dfn>

Activiteiten die een {{Verantwoordelijke}} onderkent heeft als activiteiten waarbinnen {{Dataverwerkingen}} plaatsvinden.

## Algemene werking van de standaard

{{Applicaties}} loggen metadata over {{Dataverwerkingen}} in een daarvoor ingerichte softwaretoepassing, het {{Logboek}}. Elke Dataverwerking wordt apart gelogd. 
Dataverwerkingen binnen dezelfde context (bijvoorbeeld een organisatie of een verantwoordelijkheid binnen een organisatie) worden gegroepeerd met behulp van een Trace. 
Wanneer een Dataverwerking een andere Dataverwerking tot gevolg heeft worden de logregels van beide Dataverwerkingen aan elkaar gelinkt. 
Statische informatie over Dataverwerkingen kan worden opgezocht in Registers op basis van een verwijzing die in elke logregel wordt opgenomen.

### Extensies

De standaard Logboek Dataverwerkingen specificeert de basis voor het loggen en aan elkaar relateren van Dataverwerkingen.
Aanvullende functionaliteit wordt gestandaardiseerd in `extensies`, conform de [[[logboek-extensie-guideline]]] richtlijnen.
Enkele voorbeelden van extensies (deze zijn nog niet per definitie vastgesteld):

* [Extensie (geo)objecten](https://logius-standaarden.github.io/logboek-extensie-object/) <br>
  Deze extensie specificeert hoe dataverwerkingen voor (geo)objecten kunnen worden vastgelegd en beheerd in een logboek.

* [Concept-extensie zorg](https://logius-standaarden.github.io/logboek-extensie-nen7513/) <br>
  Deze extensie was een proof-of-concept hoe dataverwerkingen die aan de [[?NEN7513]] norm kunnen worden vastgelegd en beheerd in een logboek.

* [Extensie lezen](https://logius-standaarden.github.io/logboek-extensie-lezen/) <br>
  Deze extensie specificeert hoe vanuit een logboek de data gelezen kan worden.

### Profielen

In een profiel worden aanvullende beperkingen en verplichtingen vastgelegd over het gebruik van de standaard. Op deze
manier kan een groep organisaties interoperabiliteit organiseren. Voorbeelden van aanvullende afspraken in een profiel zijn:

* De combinatie van extensies die gebruikt wordt
* Afspraken over specifieke aanvullende eisen (bijvoorbeeld over [TLS](https://www.forumstandaardisatie.nl/open-standaarden/tls) configuratie)
* Afspraken over data-retentie
* De wijze waarop [pseudonimisering](https://logius-standaarden.github.io/logboek-dataverwerkingen-inleiding/#pseudonimiseren-gegevens) van persoonsdata plaatsvindt

### Use case

Een typische use case voor het gebruik van de standaard is een samenwerking tussen meerdere organisaties die interoperabiliteit willen bereiken bij het loggen van {{Dataverwerkingen}}, om zo op eenduidige manier te kunnen verantwoorden over de dataverwerking.
