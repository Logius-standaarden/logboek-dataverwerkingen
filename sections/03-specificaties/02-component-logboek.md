# Component: Logboek

Voor ieder Logboek waarin Dataverwerkingen worden gelogd gelden de volgende specificaties voor gedrag en interface.

## Gedrag

Het Logboek ***MOET*** TLS afdwingen op connecties volgens de binnen de organisatie gangbare standaard.

Het Logboek ***MOET*** het wegschrijven van elke logregel bevestigen.

## Interface

De interface ***MOET*** de volgende velden implementeren:

| Veld                  | Type           | optioneel | Omschrijving |
|-----------------------|----------------|---------------|--------------|
| `trace_id`            | 16 byte        | verplicht     | Unieke identificerende code van {{Trace}} die {{Dataverwerking}} volgt |
| `span_id`             |  8 byte        | verplicht     | Unieke identificerende code van {{Actie}} binnen de Dataverwerking |
| `status`              | enum           | verplicht     | Status van de Actie |
| `name`                | string         | verplicht     | Naam van de specifieke Actie binnen de Dataverwerking |
| `start_time`          | timestamp (ms) | verplicht     | Tijdstip waarop de Actie gestart is |
| `end_time`            | timestamp (ms) | verplicht     | Tijdstip waarop de Actie beëindigd is |
| `parent_span_id`      |  8 byte        | optioneel     | Unieke identificerende code aanroepende Actie *binnen huidige Trace* |
| `resource`            | object         | optioneel     | Zie toelichting hieronder |
| `attributes`          | object         | verplicht     | Zie toelichting hieronder |

### `span_id`

Het veld `span_id` is in implementaties voor logging.

### `status`

Het veld `status` is een enumeratie die de volgende waarden kan bevatten:

* `Unset`: De standaardwaarde voor elke `status` is `Unset`. Dit betekent dat de dataverwerking is uitgevoerd zonder interne fout. Deze waarde wordt toegepast wanneer de dataverwerking technisch correct is afgerond, ook als er geen resultaat beschikbaar is of wanneer de invoer onvolledig was.
* `Ok`: De waarde `Ok` kan optioneel gebruikt worden wanneer de ontwikkelaar expliciet wil markeren dat de dataverwerking succesvol is afgerond. Dit is afhankelijk van hoe de organisatie die de standaard implementeert een dataverwerking als succesvol definieert en of zij dit onderscheid expliciet willen loggen als andere waarde dan `Unset`.
* `Error`: De waarde `Error` wordt toegekend bij fouten die zijn ontstaan binnen het systeem dat de dataverwerking uitvoert, zoals interne fouten of mislukte uitvoeringen door technische oorzaken.

De waarden `Unset` en `Ok` worden altijd bepaald op basis van het resultaat van de verwerking. De waarde `Ok` is optioneel en kan gebruikt worden als de organisatie ervoor kiest dataverwerkingen expliciet als succesvol te markeren. `Error` is alleen nodig als er een fout is opgetreden bij het interne proces. Een dataverwerking die niet klopt op basis van de gegeven gebruikersinput, maar die zonder fouten is afgehandeld, hoort dus status `Unset` te krijgen.

### `resource`

Het veld `resource` is een object, opgebouwd uit de volgende velden:

| Veldnaam   | Type | Omschrijving |
|------------|------|--------------|
| attributes | Any  | Een object met velden dat gebruikt wordt om een systeem, applicatie of component aan te duiden op een manier die binnen de organisatie gebruikelijk is. Denk hierbij aan velden als naam en versienummer van een applicatie, of een verwijzing naar een record in een [CMDB](https://www.hci-itil.com/ITIL_v3/books/3_service_transition/service_transition_ch4_3.html).|

### `attributes`

Het veld `attributes` is een object, opgebouwd uit velden in een namespace met prefix `dpl` (data processing log). De volgende velden zijn vereist in de namespace `core`:

| Veldnaam                        | Type   | Omschrijving |
|---------------------------------|--------|--------------|
| dpl.core.processing_activity_id | URI    | Verwijzing naar een Register met meer informatie over de Verwerkingsactiviteit. |
| dpl.core.data_subject_id        | String | Unieke, versleutelde identificerende code van de Betrokkene. |
| dpl.core.data_subject_id_type   | String | Type van de identificerende code, zoals BSN, personeelsnummer, of een URI naar een Register dat het type specificeert. |

<!-- markdownlint-disable link-fragments -->

De volgende velden in de namespace `core` zijn enkel vereist als er een aanroepende Applicatie is, zie de specificatie van het [gedrag van Applicaties](#gedrag-0).

<!-- markdownlint-enable link-fragments -->

| Veldnaam                             | Type    | Omschrijving |
|--------------------------------------|---------|--------------|
| dpl.core.foreign_operation.span_id   |  8 byte | Unieke identificerende code van de *Actie* bij externe partij |
| dpl.core.foreign_operation.processor | URL     | Link naar website van externe partij |

<div class="note">

Extensies mogen attributen in andere namespaces definieren. Hiervoor gelden de [[[logboek-extensie-guideline]]] richtlijnen. Extensies moeten vastgesteld zijn, alvorens een attribuut mag worden gebruikt. Dit om te voorkomen dat niet-gestandaardiseerde namespaces worden gebruikt en er geen eenduidig gebruik van attributen ontstaat.

</div>

## Foutafhandeling

Fouten kunnen in iedere applicatie optreden.
Fouten kunnen ontstaan door bijvoorbeeld verkeerde invoer door de gebruiker, een fout in de software van de applicatie of een connectie met een andere applicatie die niet werkt.
Deze sectie geeft een handreiking ten aanzien van de afhandeling van foutsituaties met betrekking tot het gebruik van het Logboek Dataverwerkingen.

<p class="note">Let op: wanneer een gebruiker een verwerking bewust afbreekt, wordt dit niet als een fout beschouwd.
Het is aan te raden om dit als een expliciete stap in het proces op te nemen, zodat ook deze handeling kan worden gelogd.
In zulke gevallen is de `status` van de verwerking `Ok`, omdat er sprake is van een verwachte en correcte actie van de gebruiker.

### Uitgangspunten registratie foutsituaties

De volgende punten zijn belangrijk in het ontwerpen en implementeren van de registratie van foutsituaties in relatie tot het Logboek Dataverwerkingen:

* Gebruik zoveel mogelijk de standaardfoutmethodes van de gebruikte ontwikkeltaal en/of SDKs.

* Foutdata moeten worden gerelateerd aan een `trace_id` en `span_id`.

* De software van de applicatie die de registratie van de logdata registreert, moet er voor zorgen dat er geen fout optreedt in 'run-time'.
Bijvoorbeeld als `name` leeg is, moet deze automatisch worden gevuld met een waarde zodat er in ieder geval op dit punt geen fout kan optreden.

### Locatie van opslag

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

### Attributes

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
