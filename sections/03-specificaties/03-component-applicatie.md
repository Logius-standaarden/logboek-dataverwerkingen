# Component: Applicatie

Voor iedere {{Applicatie}} waarin Dataverwerkingen plaatsvinden gelden de volgende specificaties voor gedrag.

## Gedrag

Het gespecificeerde gedrag van Applicaties is erop gericht om de interface van het Logboek te gebruiken. Voor alle metadata geldt dat de specificatie te vinden is in de interface van het Logboek.

De Applicatie ***MOET*** een nieuwe Trace  met een uniek `trace_id` starten voor iedere nieuwe Dataverwerking. In een Trace wordt de metadata bijgehouden die nodig is om de interface van een Logboek te gebruiken.

Een Dataverwerking kan uit meerdere acties bestaan. De applicatie ***MOET*** een voor iedere nieuwe actie een unieke `span_id` bijhouden. Iedere Trace heeft tenminste één `span_id`.

Wanneer een actie binnen een Applicatie is gestart door een andere actie, dan ***MOET*** de Applicatie de `trace_id` ongewijzigd overnemen en de `span_id` opnemen in een veld genaamd `parent_span_id` voor deze nieuwe actie.

Als een Dataverwerking meerdere Betrokkenen heeft dan ***MOET*** de applicatie voor iedere Betrokkene een aparte logregel wegschrijven. Een logregel kan naar 0 of 1 Betrokkenen verwijzen.

De Applicatie ***MOET*** voor iedere actie (`span_id`) een logregel wegschrijven via de interface van het Logboek.

De Applicatie ***MOET*** bijhouden of een actie geslaagd of mislukt is en dit per Dataverwerking als status (`status_code`) meegeven in de Logregel.

Als de Applicatie een verzoek van een andere Applicatie kan ontvangen, ***MOET*** de Applicatie metadata volgens de W3C Trace Context standaard kunnen verwerken en gebruiken in de eigen Trace(s). Metadata verkregen via W3C Trace Context ***MOET*** als `foreign_operation` worden opgenomen in de Logregel.

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
