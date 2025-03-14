# Protocollen

De protocollen die worden gebruikt tussen applicatie en logboek en voor het uitvoeren van transacties tussen applicaties worden niet voorgeschreven in de standaard.

<p class="note">

Let wel, met "de protocollen" bedoelen we de manier van afleveren van berichten tussen de componenten. Deze standaard beschrijft wel degelijk interfaces van de berichten zelf waar de componenten aan **MOETEN** voldoen, met als doel interopabiliteit tussen functionaliteit van componenten. De standaard laat vrij hoe die informatie tussen componenten wordt doorgegeven, omdat dat afhangt van de technische/architecturele keuzes die software ontwikkelaars maken. Dit biedt de vrijheid om de standaard toe te voegen aan vrijwel iedere softwareoplossing.

Het is ***AANBEVOLEN*** om [het OpenTelemetry Protocol (OTLP)](https://opentelemetry.io/docs/specs/otlp/) te gebruiken in de interactie tussen Applicatie en Logboek.

<p class="note">

[OpenTelemetry](https://opentelemetry.io/) is een standaard en open source framework voor het beheren, genereren, verzamelen en exporteren van telemetriedata. Door het gebruik van deze open standaard kunnen leverancierspecifieke integraties voorkomen worden. OpenTelemetry is een [CNCF incubating project](https://www.cncf.io/projects/).

Als gebruik wordt gemaakt van  HTTP/1.1 [[RFC9112]] of HTTP/2 [[RFC9113]] voor het uitvoeren van dataverwerkingen in meerdere applicaties ***MOET*** gebruik worden gemaakt van de [[[trace-context-1]]] specificatie voor het uitwisselen van metadata over {{Traces}}.
