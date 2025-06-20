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
| `status_code`         | enum           | verplicht     | Status van de Actie |
| `name`                | string         | verplicht     | Naam van de specifieke Actie binnen de Dataverwerking |
| `start_time`          | timestamp (ms) | verplicht     | Tijdstip waarop de Actie gestart is |
| `end_time`            | timestamp (ms) | verplicht     | Tijdstip waarop de Actie beëindigd is |
| `parent_span_id`      |  8 byte        | optioneel     | Unieke identificerende code aanroepende Actie *binnen huidige Trace* |
| `resource`            | object         | optioneel     | Zie toelichting hieronder |
| `attributes`          | object         | verplicht     | Zie toelichting hieronder |

Het veld `span_id` is in implementaties voor logging.

Het veld `status_code` is een enumeratie die de volgende waarden kan bevatten:

* `0: STATUS_CODE_UNSET`: De standaardwaarde voor elke `status_code` is `Unset`. Dit betekent dat de dataverwerking is uitgevoerd zonder interne fout. Deze waarde wordt toegepast wanneer de dataverwerking technisch correct is afgerond, ook als er geen resultaat beschikbaar is of wanneer de invoer onvolledig was.
* `1: STATUS_CODE_OK`: De waarde `Ok` kan optioneel gebruikt worden wanneer de ontwikkelaar expliciet wil markeren dat de dataverwerking succesvol is afgerond. Dit is afhankelijk van hoe de organisatie die de standaard implementeert een dataverwerking als succesvol definieert en of zij dit onderscheid expliciet willen loggen als andere waarde dan `Unset`.
* `2: STATUS_CODE_ERROR`: De waarde `Error` wordt toegekend bij fouten die zijn ontstaan binnen het systeem dat de dataverwerking uitvoert, zoals interne fouten of mislukte uitvoeringen door technische oorzaken.

De waarden `Unset` en `Ok` worden altijd bepaald op basis van het resultaat van de verwerking. De waarde `Ok` is optioneel en kan gebruikt worden als de organisatie ervoor kiest dataverwerkingen expliciet als succesvol te markeren. `Error` is alleen nodig als er een fout is opgetreden bij het interne proces. Een dataverwerking die niet klopt op basis van de gegeven gebruikersinput, maar die zonder fouten is afgehandeld, hoort dus status `Unset` te krijgen.

Het veld `resource` is een object, opgebouwd uit de volgende velden:

| Veldnaam   | Type | Omschrijving |
|------------|------|--------------|
| attributes | Any  | Een object met velden dat gebruikt wordt om een systeem, applicatie of component aan te duiden op een manier die binnen de organisatie gebruikelijk is. Denk hierbij aan velden als naam en versienummer van een applicatie, of een verwijzing naar een record in een [CMDB](https://www.hci-itil.com/ITIL_v3/books/3_service_transition/service_transition_ch4_3.html).|

Het veld `attributes` is een object, opgebouwd uit velden in een namespace met prefix `dpl` (data processing log). De volgende velden zijn vereist in de namespace `core`:

| Veldnaam                        | Type   | Omschrijving |
|---------------------------------|--------|--------------|
| dpl.core.processing_activity_id | URI    | Verwijzing naar een Register met meer informatie over de Verwerkingsactiviteit. |
| dpl.core.data_subject_id        | String | Unieke, versleutelde identificerende code van de Betrokkene. |
| dpl.core.data_subject_id_type   | String | Type van de identificerende code, zoals BSN, personeelsnummer, of een URI naar een Register dat het type specificeert. |

De volgende velden in de namespace `core` zijn enkel vereist als er een aanroepende Applicatie is, zie de specificatie van het [gedrag van Applicaties](#gedrag).

| Veldnaam                             | Type    | Omschrijving |
|--------------------------------------|---------|--------------|
| dpl.core.foreign_operation.trace_id  | 16 byte | Unieke identificerende code van *Trace* bij externe partij |
| dpl.core.foreign_operation.span_id   |  8 byte | Unieke identificerende code van de *Actie* bij externe partij |
| dpl.core.foreign_operation.processor | URL     | Link naar website van externe partij. Op deze website moet het bestand `<URL>/.well-known/privacy.text` gepubliceerd zijn |

Om traces te kunnen relateren aan elkaar is de URL een locator link naar de externe partij. Om vervolgens contactgegevens van deze externe partij op te halen, MOET `<URL>/.well-known/privacy.text` beschikbaar zijn en hier bijvoorbeeld een emailadres of telefoonnummer in staan.

<aside class="example">

Als een gemeente een applicatie van de RDW aanroept, moet de RDW `dpl.core.foreign_operation.processor` zetten op <pre><code>https://gemeente.nl</code></pre>. Vervolgens moet <pre><code>https://gemeente.nl/.well-known/privacy.txt</code></pre> resulteren in een tekst bestand waar contactgegevens instaan van de verwerkingsverantwoordelijke van de gemeente.

</aside>

<div class="note">

Extensies mogen attributen in andere namespaces definieren. Hiervoor gelden de [[[logboek-extensie-guideline]]] richtlijnen. Extensies moeten vastgesteld zijn, alvorens een attribuut mag worden gebruikt. Dit om te voorkomen dat niet-gestandaardiseerde namespaces worden gebruikt en er geen eenduidig gebruik van attributen ontstaat.

</div>
