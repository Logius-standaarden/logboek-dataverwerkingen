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
| `span_id`        |  8 byte        | verplicht     | Unieke identificerende code van {{Actie}} binnen de Dataverwerking |
| `status_code`         | enum           | verplicht     | Status van de Actie |
| `name`                | string         | verplicht     | Naam van de specifieke Actie binnen de Dataverwerking |
| `start_time`          | timestamp (ms) | verplicht     | Tijdstip waarop de Actie gestart is |
| `end_time`            | timestamp (ms) | verplicht     | Tijdstip waarop de Actie beëindigd is |
| `parent_span_id` |  8 byte        | optioneel     | Unieke identificerende code aanroepende Actie *binnen huidige Trace* |
| `foreign_operation`   | message        | optioneel     | Unieke identificerende code aanroepende Actie *bij externe partij* |
| `resource`            | message        | optioneel     | Zie toelichting hieronder |
| `attributes`          | list           | verplicht     | Verplichte key-value pairs |

Het veld `span_id` is in implementaties voor logging.

Het veld `status_code` is een enumeratie die de volgende waarden kan bevatten:

* `0: STATUS_CODE_UNSET`: De standaardwaarde voor elke `status_code` is `Unset`. Dit betekent dat de dataverwerking is uitgevoerd zonder interne fout. Deze waarde wordt toegepast wanneer de dataverwerking technisch correct is afgerond, ook als er geen resultaat beschikbaar is of wanneer de invoer onvolledig was.
* `1: STATUS_CODE_OK`: De waarde `Ok` kan optioneel gebruikt worden wanneer de ontwikkelaar expliciet wil markeren dat de dataverwerking succesvol is afgerond. Dit is afhankelijk van hoe de organisatie die de standaard implementeert een dataverwerking als succesvol definieert en of zij dit onderscheid expliciet willen loggen als andere waarde dan `Unset`.
* `2: STATUS_CODE_ERROR`: De waarde `Error` wordt toegekend bij fouten die zijn ontstaan binnen het systeem dat de dataverwerking uitvoert, zoals interne fouten of mislukte uitvoeringen door technische oorzaken.

De waarden `Unset` en `Ok` worden altijd bepaald op basis van het resultaat van de verwerking. De waarde `Ok` is optioneel en kan gebruikt worden als de organisatie ervoor kiest dataverwerkingen expliciet als succesvol te markeren. `Error` is alleen nodig als er een fout is opgetreden bij het interne proces. Een dataverwerking die niet klopt op basis van de gegeven gebruikersinput, maar die zonder fouten is afgehandeld, hoort dus status `Unset` te krijgen.

Het veld `foreign_operation` is een `message`, opgebouwd uit de volgende velden:

| Veld                  | Type           | optioneel | Omschrijving |
|-----------------------|----------------|---------------|--------------|
| `trace_id`            | 16 byte        | verplicht     | Unieke identificerende code van *Trace* bij externe partij |
| `span_id`        |  8 byte        | verplicht     | Unieke identificerende code van de *Actie* bij externe partij |
| `entity`              |  URI           | verplicht     | URI verwijzend naar externe partij |

Deze velden worden optioneel aangeboden door een aanroepende Applicatie, zie de specificatie van het [gedrag van Applicaties](#gedrag).

Het veld `resource` is een object, opgebouwd uit de volgende velden:

| Veldnaam   | Type | Omschrijving |
|------------|------|--------------|
| attributes | Any  | Een lijst van key-value pairs die gebruikt kunnen worden om een systeem, applicatie of component aan te duiden op een manier die binnen de organisatie gebruikelijk is. Denk hierbij aan zaken als naam en versienummer van een applicatie, of een verwijzing naar een record in een [CMDB](https://www.hci-itil.com/ITIL_v3/books/3_service_transition/service_transition_ch4_3.html)|

Het veld `attributes` is een lijst van *key-value pairs*, in een namespace met prefix `dpl.` (data processing log). De volgende attributen zijn mogelijk in de namespace `core`:

* `dpl.core.processing_activity_id`: URI; Verwijzing naar Register met meer informatie over de Verwerkingsactiviteit
* `dpl.core.data_subject_id`: Unieke identificerende code van de Betrokkene; versleuteld. Hiermee wordt aangeduid welke persoon Betrokkene is bij de verwerking, gelet op de AVG.
* `dpl.core.data_subject_id_type`: Type van het veld `data_subject_id`. Dit is bijvoorbeeld `BSN`, `Personeelsnummer` of `Vreemdelingennummer`, of een URI naar een Register waar het veld meer precies wordt geduid.
