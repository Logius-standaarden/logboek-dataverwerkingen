# Component: Register

Voor ieder {{Register}} met statische data over Dataverwerkingen gelden de volgende specificaties voor het gedrag en de interface.

## Gedrag

Het Register **MOET** iedere relevante wijziging van een Verwerkingsactiviteit opslaan met een nieuwe identifier, zodat de `dpl.core.processing_activity_id` naar een eenduidige versie van de verwerkingsactiviteit verwijst.

## Interface

Voor de werking van het Logboek is het niet nodig de Registers te ontsluiten met een API. Wel moeten de Verwerkingsactiviteiten die gebruikt worden in de logregels ook voorkomen in een register. Wanneer bij het raadplegen van de logregels geautomatiseerd context aan de logregels moet worden gegeven is een read-only interface op het Register nodig. Deze interface wordt hieronder gespecificeerd.

Nog uitwerken, REST API, Read-only OpenAPI 3 specificatie.
