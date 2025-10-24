# Component: Applicatie

Voor iedere {{Applicatie}} waarin Dataverwerkingen plaatsvinden gelden de volgende specificaties voor gedrag.

## Gedrag

Het gespecificeerde gedrag van Applicaties is erop gericht om de interface van het Logboek te gebruiken. Voor alle metadata geldt dat de specificatie te vinden is in de interface van het Logboek.

De Applicatie ***MOET*** een nieuwe Trace  met een uniek `trace_id` bijhouden voor iedere nieuwe Dataverwerking. In een Trace wordt de metadata bijgehouden die nodig is om de interface van een Logboek te gebruiken.

Een Dataverwerking kan uit meerdere acties bestaan. De applicatie ***MOET*** een voor iedere nieuwe actie een unieke `span_id` bijhouden. Iedere Trace heeft tenminste één `span_id`.

Wanneer een actie binnen een Applicatie is gestart door een andere actie, dan ***MOET*** de Applicatie de `trace_id` ongewijzigd overnemen en de `span_id` opnemen in een veld genaamd `parent_span_id` voor deze nieuwe actie.

Als een Dataverwerking meerdere Betrokkenen heeft dan ***MOET*** de applicatie voor iedere Betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 Betrokkenen verwijzen.

De Applicatie ***MOET*** voor iedere actie (`span_id`) een logregel wegschrijven via de interface van het Logboek.

De Applicatie ***MOET*** bijhouden of een actie geslaagd of mislukt is en dit per Dataverwerking als status (`status`) meegeven in de Logregel.

<!-- markdownlint-disable link-fragments -->

Als de Applicatie een verzoek van een andere Applicatie kan ontvangen, ***MOET*** de Applicatie metadata volgens de W3C Trace Context standaard kunnen verwerken en gebruiken in de eigen Trace(s). Metadata verkregen via W3C Trace Context ***MOET*** in `attributes` meegenomen worden als velden die beginnen met `dpl.core.foreign_operation`. Zie de [specificatie van het logboek](#interface) voor de lijst van velden.

<!-- markdownlint-enable link-fragments -->

Als de Applicatie een verzoek aan een andere Applicatie kan versturen, ***MOET*** de Applicatie metadata volgens de W3C Trace Context standaard meegeven aan dit verzoek.

De Applicatie ***MAG NIET*** gebruik maken van *Log Sampling*.

### Loggen van Dataverwerkingen met persoonsdata

Voor iedere Betrokkene moet iedere Dataverwerking apart gelogd worden. De Applicatie ***MOET*** in elke Logregel een identificerende code van de Betrokkene opnemen in `dpl.core.data_subject_id` en aan te duiden welk soort identificerende code wordt gebruikt in `dpl.core.data_subject_id_type`. Het wordt ***AANBEVOLEN*** om de identificerende code te pseudonimiseren.

Wanneer een enkele Dataverwerking meerdere Betrokkenen heeft, ***MOET*** de Applicatie voor elke Betrokkene een nieuwe actie met unieke `span_id` starten en deze onder de reeds bekende actie voegen door het `span_id` daarvan op te nemen als `parent_span_id` in de nieuwe actie. Voor iedere betrokkene wordt een *child operation* bijgehouden.

Let op: het kan zijn dat pas na een antwoord van een externe Applicatie bekend is dat er meerdere Betrokkenen zijn bij een Dataverwerking, in dat geval moeten na ontvangst van het antwoord de nieuwe acties ten behoeve van correcte logging gestart worden.

Iedere Dataverwerking van persoonsdata betreft een Verwerkingsactiviteit die in het Register van Verwerkingsactiviteiten moet zijn opgenomen. De Applicatie ***MOET*** in de Logregel een verwijzing naar de juiste Verwerkingsactiviteit in het Register van Verwerkingsactiviteiten opnemen in het veld `dpl.core.processing_activity_id`.

### Loggen van Dataverwerkingen zonder data

Dataverwerkingen zonder persoonsdata zijn over het algemeen niet als Verwerkingsactiviteit opgenomen in het Register van Verwerkingsactiviteiten. Het wordt aanbevolen om wel een soortgelijk register bij te houden voor alle Dataverwerkingen zonder persoonsdata.

Het wordt ***AANBEVOLEN*** dat de Applicatie in de Logregel een verwijzing naar de juiste Verwerkingsactiviteit in een daarvoor aan te wijzen Register opneemt in het veld `dpl.core.processing_activity_id`.

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
