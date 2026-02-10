# Specificaties

Deze sectie geeft de specificatie voor de te gebruiken protocollen en interfaces en het verwachte gedrag van de componenten.

## Protocollen

De protocollen die worden gebruikt tussen applicatie en logboek en voor het uitvoeren van transacties tussen applicaties worden niet voorgeschreven in de standaard.

<p class="note">Let wel, met "de protocollen" bedoelen we de manier van afleveren van berichten tussen de componenten.
Deze standaard beschrijft wel degelijk interfaces van de berichten zelf waar de componenten aan MOETEN voldoen, met als doel interopabiliteit tussen functionaliteit van componenten.
De standaard laat vrij hoe die informatie tussen componenten wordt doorgegeven, omdat dat afhangt van de technische/architecturele keuzes die software ontwikkelaars maken.
Dit biedt de vrijheid om de standaard toe te voegen aan vrijwel iedere softwareoplossing.

Het is AANBEVOLEN om [het OpenTelemetry Protocol (OTLP)](https://opentelemetry.io/docs/specs/otlp/) te gebruiken in de interactie tussen Applicatie en Logboek.

<div class="note">

[OpenTelemetry](https://opentelemetry.io/) is een standaard en open source framework voor het beheren, genereren, verzamelen en exporteren van telemetriedata.
Door het gebruik van deze open standaard kunnen leverancierspecifieke integraties voorkomen worden. OpenTelemetry is een [CNCF incubating project](https://www.cncf.io/projects/).

</div>

Als gebruik wordt gemaakt van  HTTP/1.1 [[RFC9112]] of HTTP/2 [[RFC9113]] voor het uitvoeren van dataverwerkingen in meerdere applicaties MOET gebruik worden gemaakt van de [[[trace-context-1]]] specificatie voor het uitwisselen van metadata over {{Traces}}.

## Component: Logboek

Voor ieder Logboek waarin Dataverwerkingen worden gelogd gelden de volgende specificaties voor gedrag en interface.

### Gedrag

Het Logboek MOET TLS kunnen afdwingen.

<p class="note">Hiermee wordt niet bedoeld dat TLS verplicht is.
Als er software wordt geschreven dat een Logboek component implementeert, dan moet dit TLS kunnen ondersteunen.
Of TLS connecties daadwerkelijk worden toegepast door organisaties die de software gebruiken, is de keuze van de organisatie zelf.

Het Logboek MOET het wegschrijven van elke logregel bevestigen.

<div class="note">

Het Logboek bevestigt het wegschrijven van elke logregel, maar dat betekent niet dat elke Applicatie hier op moet wachten.
Hoe om te gaan met deze bevestiging is een implementatiekeuze van de organisatie die verantwoording wil afleggen.

</div>

<span name="logboek-interface"></span>

### Interface

De interface MOET de volgende velden implementeren:

<div class="note">

In SDK's van OpenTelemetry worden soms andere structuren of capitalization gebruikt dan hoe die in deze tabel voorkomen.
Dit komt doordat programmeertalen verschillende naming conventions gebruiken en de SDK's deze conventions volgen.
OpenTelemetry enforceert zelf ook geen eenduidige naamgeving.

Voor het wegschrijven van logregels is dit geen probleem, zolang elk veld duidelijk te herleiden is bij het gebruik van de SDK.
Voor het lezen van logregels (wat in een aparte toekomstige extensie wordt gestandaardiseerd) is dit wel van belang.
In die extensie zal er wel een specifieke structuur beschreven en hoe daar aan kan worden voldaan.

</div>

| Veld                                | Type    | Verplicht? |
|-------------------------------------|---------|------------|
| [`trace_id`](#trace_id)             | 16 byte | verplicht  |
| [`span_id`](#span_id)               | 8 byte  | verplicht  |
| [`status`](#status)                 | enum    | verplicht  |
| [`name`](#name)                     | string  | verplicht  |
| [`start_time`](#start_time)         | uint64  | verplicht  |
| [`end_time`](#end_time)             | uint64  | verplicht  |
| [`parent_span_id`](#parent_span_id) | 8 byte  | optioneel  |
| [`resource`](#resource)             | object  | optioneel  |
| [`attributes`](#attributes)         | object  | verplicht  |

#### `trace_id`

Unieke identificerende code van {{Trace}} die {{Dataverwerking}} volgt.
Als er meerdere applicaties dataverwerkingen uitvoeren ten behoeve van 1 originele dataverwerking, dan is de trace code identiek voor al deze dataverwerkingen, zie [gedrag van applicaties](#gedrag-van-applicatie).

#### `span_id`

Unieke identificerende code van {{Actie}} binnen de {{Dataverwerking}}.
Een applicatie kan meerdere `span_id` voor dezelfde `trace_id` hebben.

#### `status`

Het veld `status` is een enumeratie die de volgende waarden kan bevatten:

* `Unset`: De standaardwaarde voor elke `status` is `Unset`. Dit betekent dat de dataverwerking is uitgevoerd zonder interne fout. Deze waarde wordt toegepast wanneer de dataverwerking technisch correct is afgerond, ook als er geen resultaat beschikbaar is of wanneer de invoer onvolledig was.
* `Ok`: De waarde `Ok` kan optioneel gebruikt worden wanneer de ontwikkelaar expliciet wil markeren dat de dataverwerking succesvol is afgerond. Dit is afhankelijk van hoe de organisatie die de standaard implementeert een dataverwerking als succesvol definieert en of zij dit onderscheid expliciet willen loggen als andere waarde dan `Unset`.
* `Error`: De waarde `Error` wordt toegekend bij fouten die zijn ontstaan binnen het systeem dat de dataverwerking uitvoert, zoals interne fouten of mislukte uitvoeringen door technische oorzaken.

De waarden `Unset` en `Ok` worden altijd bepaald op basis van het resultaat van de verwerking. De waarde `Ok` is optioneel en kan gebruikt worden als de organisatie ervoor kiest dataverwerkingen expliciet als succesvol te markeren. `Error` is alleen nodig als er een fout is opgetreden bij het interne proces. Een dataverwerking die niet klopt op basis van de gegeven gebruikersinput, maar die zonder fouten is afgehandeld, hoort dus status `Unset` te krijgen.

#### `name`

Naam van de specifieke {{Actie}} binnen de {{Dataverwerking}}.
Dit is een tekstuele beschrijving bestemd voor mensen, niet voor machines.

#### `start_time`

Tijdstip waarop de {{Actie}} gestart is in milliseconden sinds Epoch.

#### `end_time`

Tijdstip waarop de {{Actie}} beëindigd is in milliseconden sinds Epoch.

#### `parent_span_id`

Unieke identificerende code aanroepende {{Actie}}.
Dit geldt voor zowel binnen de huidige applicatie als bij een aanroep van een andere applicatie.
Als `dpl.core.foreign_operation.processor` aanwezig is (zie [attributes](#attributes)), dan is het een aanroep van een andere applicatie.

#### `resource`

Het veld `resource` is een object, opgebouwd uit de volgende velden:

| Veldnaam   | Type | Omschrijving                                                                                                                                                                                                                                                                                                                                                             |   |
|------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| attributes | Any  | Een object met velden dat gebruikt wordt om een systeem, applicatie of component aan te duiden op een manier die binnen de organisatie gebruikelijk is. Denk hierbij aan velden als naam en versienummer van een applicatie, of een verwijzing naar een record in een [CMDB](https://www.hci-itil.com/ITIL_v3/books/3_service_transition/service_transition_ch4_3.html). |   |

<aside class="example">
<pre><code class="json">{
  "attributes": {
    "dpl.core.processing_activity_id": 14
  },
  "resource": {
    "attributes": {
      "process.pid": 12345,
      "process.executable.name": "node",
      "process.command": "/app.js",
      "process.command_line": "/bin/node /app.js",
      "process.runtime.version": "16.17.0",
      "process.runtime.name": "nodejs",
      "process.runtime.description": "Node.js"
    }
  }
}</code></pre>
</aside>

<div class="note">

Dit is een veld wat een object is, met daarin een veld "attributes".
Deze structuur komt voor uit OpenTelemetry ([Resource definitie](https://opentelemetry.io/docs/specs/otel/resource/sdk/)).
Ook al is OpenTelemetry niet verplicht te gebruiken, de structuur van "resource" is er wel op gebaseerd.
Een logregel bevat de hoofdvelden "resource" en "attributes" (volgende sectie) en die dienen verschillende doelen.

</div>

#### `attributes`

Het veld `attributes` is een object, opgebouwd uit velden in een namespace met prefix `dpl` (data processing log). De volgende velden zijn vereist in de namespace `core`:

| Veldnaam                        | Type   | Omschrijving                                                                                                           |
|---------------------------------|--------|------------------------------------------------------------------------------------------------------------------------|
| dpl.core.processing_activity_id | URI    | Verwijzing naar een Register met meer informatie over de Verwerkingsactiviteit.                                        |
| dpl.core.data_subject_id        | String | Unieke, versleutelde identificerende code van de Betrokkene.                                                           |
| dpl.core.data_subject_id_type   | String | Type van de identificerende code, zoals BSN, personeelsnummer, of een URI naar een Register dat het type specificeert. |

De volgende velden in de namespace `core` zijn enkel vereist als er een aanroepende Applicatie is, zie de specificatie van het [gedrag van Applicaties](#gedrag-van-applicatie).

| Veldnaam                             | Type   | Omschrijving                                                      |
|--------------------------------------|--------|-------------------------------------------------------------------|
| dpl.core.foreign_operation.processor | URL    | Link naar externe applicatie                                      |

<div class="note">

Extensies mogen attributen in andere namespaces definieren.
Hiervoor gelden de [[[logboek-extensie-guideline]]] richtlijnen.
Extensies moeten vastgesteld zijn, alvorens een attribuut mag worden gebruikt.
Dit om te voorkomen dat niet-gestandaardiseerde namespaces worden gebruikt en er geen eenduidig gebruik van attributen ontstaat.

</div>

## Component: Applicatie

Voor iedere {{Applicatie}} waarin Dataverwerkingen plaatsvinden gelden de volgende specificaties voor gedrag.

### Gedrag van Applicatie

Het gespecificeerde gedrag van Applicaties is erop gericht om de interface van het Logboek te gebruiken. Voor alle metadata geldt dat de specificatie te vinden is in de interface van het Logboek.

De Applicatie MOET een nieuwe Trace  met een uniek `trace_id` bijhouden voor iedere nieuwe Dataverwerking. In een Trace wordt de metadata bijgehouden die nodig is om de interface van een Logboek te gebruiken.

Een Dataverwerking kan uit meerdere acties bestaan. De applicatie MOET een voor iedere nieuwe actie een unieke `span_id` bijhouden. Iedere Trace heeft tenminste één `span_id`.

Wanneer een actie binnen een Applicatie is gestart door een andere actie, dan MOET de Applicatie de `trace_id` ongewijzigd overnemen en de `span_id` opnemen in een veld genaamd `parent_span_id` voor deze nieuwe actie.

Als een Dataverwerking meerdere Betrokkenen heeft dan MOET de applicatie voor iedere Betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 Betrokkenen verwijzen.

De Applicatie MOET voor iedere actie (`span_id`) een logregel wegschrijven via de interface van het Logboek.

De Applicatie MOET bijhouden of een actie geslaagd of mislukt is en dit per Dataverwerking als status (`status`) meegeven in de Logregel.

Als de Applicatie een verzoek van een andere Applicatie kan ontvangen, MOET de Applicatie metadata volgens de W3C Trace Context standaard kunnen verwerken en gebruiken in de eigen Trace(s).
Metadata verkregen via W3C Trace Context MOET in `attributes` meegenomen worden als velden die beginnen met `dpl.core.foreign_operation`.
Zie de specificatie van [attributes in het logboek](#attributes) voor de lijst van velden.

Als de Applicatie een verzoek aan een andere Applicatie kan versturen, MOET de Applicatie metadata volgens de W3C Trace Context standaard meegeven aan dit verzoek.

De Applicatie MAG NIET gebruik maken van *Log Sampling*.

#### Loggen van Dataverwerkingen met persoonsdata

Voor iedere Betrokkene moet iedere Dataverwerking apart gelogd worden. De Applicatie MOET in elke Logregel een identificerende code van de Betrokkene opnemen in `dpl.core.data_subject_id` en aan te duiden welk soort identificerende code wordt gebruikt in `dpl.core.data_subject_id_type`. Het wordt AANBEVOLEN om de identificerende code te pseudonimiseren.

Wanneer een enkele Dataverwerking meerdere Betrokkenen heeft, MOET de Applicatie voor elke Betrokkene een nieuwe actie met unieke `span_id` starten en deze onder de reeds bekende actie voegen door het `span_id` daarvan op te nemen als `parent_span_id` in de nieuwe actie. Voor iedere betrokkene wordt een *child operation* bijgehouden.

Let op: het kan zijn dat pas na een antwoord van een externe Applicatie bekend is dat er meerdere Betrokkenen zijn bij een Dataverwerking, in dat geval moeten na ontvangst van het antwoord de nieuwe acties ten behoeve van correcte logging gestart worden.

Iedere Dataverwerking van persoonsdata betreft een Verwerkingsactiviteit die in het Register van Verwerkingsactiviteiten moet zijn opgenomen. De Applicatie MOET in de Logregel een verwijzing naar de juiste Verwerkingsactiviteit in het Register van Verwerkingsactiviteiten opnemen in het veld `dpl.core.processing_activity_id`.

#### Loggen van Dataverwerkingen zonder data

Dataverwerkingen zonder persoonsdata zijn over het algemeen niet als Verwerkingsactiviteit opgenomen in het Register van Verwerkingsactiviteiten. Het wordt aanbevolen om wel een soortgelijk register bij te houden voor alle Dataverwerkingen zonder persoonsdata.

Het wordt AANBEVOLEN dat de Applicatie in de Logregel een verwijzing naar de juiste Verwerkingsactiviteit in een daarvoor aan te wijzen Register opneemt in het veld `dpl.core.processing_activity_id`.

### Foutafhandeling

Fouten kunnen in iedere applicatie optreden.
Fouten kunnen ontstaan door bijvoorbeeld verkeerde invoer door de gebruiker, een fout in de software van de applicatie of een connectie met een andere applicatie die niet werkt.
Deze sectie geeft een handreiking ten aanzien van de afhandeling van foutsituaties met betrekking tot het gebruik van het Logboek Dataverwerkingen.

<p class="note">Let op: wanneer een gebruiker een verwerking bewust afbreekt, wordt dit niet als een fout beschouwd.
Het is aan te raden om dit als een expliciete stap in het proces op te nemen, zodat ook deze handeling kan worden gelogd.
In zulke gevallen is de `status` van de verwerking `Ok`, omdat er sprake is van een verwachte en correcte actie van de gebruiker.

#### Uitgangspunten registratie foutsituaties

De volgende punten zijn belangrijk in het ontwerpen en implementeren van de registratie van foutsituaties in relatie tot het Logboek Dataverwerkingen:

* Gebruik zoveel mogelijk de standaardfoutmethodes van de gebruikte ontwikkeltaal en/of SDKs.

* Foutdata moeten worden gerelateerd aan een `trace_id` en `span_id`.

* De software van de applicatie die de registratie van de logdata registreert, moet er voor zorgen dat er geen fout optreedt in 'run-time'.
Bijvoorbeeld als `name` leeg is, moet deze automatisch worden gevuld met een waarde zodat er in ieder geval op dit punt geen fout kan optreden.

#### Locatie van opslag

De foutsituatie kan zowel in het Logboek als in een extern component worden registreerd.
Beiden hebben voor- en nadelen:

<table>
  <thead>
    <tr>
      <th scope="col">Locatie</th>
      <th scope="col">Voordelen</th>
      <th scope="col">Nadelen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>In het logboek</td>
      <td>
        <ul>
          <li>Fouten zijn te herkennen door <code>status</code> (=error).</li>
          <li>Fouten worden apart geregistreerd als transactie, waardoor succesvolle en gefaalde transacties aan elkaar gerelateerd kunnen worden.</li>
      </td>
      <td>
        <ul>
          <li>Er moet een trigger zijn, zodat de beheerder ingelicht wordt dat er een foutsituatie is ontstaan.</li>
          <li>Als er een grote hoeveelheid logregels zijn, kost het zoeken meer computatiewerk.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>In een extern component</td>
      <td>
        <ul>
          <li>Alle foutsituaties staan gecentraliseerd opgeslagen waardoor monitoring op fouten eenvoudiger is.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Foutsituaties moeten worden geregistreerd inclusief <code>trace_id</code> en <code>span_id</code>.</li>
          <li>Extra inspanning om de foutsituatie later te relateren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Attributes

Specifieke foutdata worden opgeslagen als velden in `attributes`:

| Veldnaam             | Type     | Omschrijving                                                                |
|----------------------|----------|-----------------------------------------------------------------------------|
| exception.message    | String   | Tekstuele beschrijving van de fout                                          |
| exception.type       | String   | Type foutmelding (idealiter een dynamische foutmelding)                     |
| exception.stacktrace | String   | Volledige stacktrace (als dat mogelijk is, afhankelijk van programmeertaal) |

<aside class="example">
Een foutregistratie kan er als volgt uitzien:

```json
{
  "trace_id": "7bba9f33312b3dabc8f8e90c7c61f194",
  "span_id": "2a3f5c8d1e6b4a09",
  "status": "error",
  "name": "Database connection failure",
  "start_time": "2025-03-09T20:21:00Z",
  "end_time": "2025-03-09T20:23:00Z",
  "parent_span_id": "",
  "attributes": {
    "exception.message": "HTTP 500 error processing /api/v1/orders",
    "exception.type": "TimeoutException",
    "exception.stacktrace": "TimeoutException: Database connection failed"
  }
}
```

</aside>

## Component: Register

Voor ieder {{Register}} met statische data over Dataverwerkingen gelden de volgende specificaties voor het gedrag en de interface.

### Gedrag van Register

Het Register MOET iedere relevante wijziging van een Verwerkingsactiviteit opslaan als een nieuwe versie met tijdstip, zodat de `dpl.core.processing_activity_id` naar een eenduidige versie van de verwerkingsactiviteit verwijst in combinatie met het tijdstip.
