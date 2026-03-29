# 🍏 Hesperidesᴬᴵ Seeds 
## Hesperidesᴬᴵ Utilities Package 📦
[![NPM Version](https://img.shields.io/npm/v/@emeraldemperaur/hesperides-seeds.svg)](https://www.npmjs.com/package/@emeraldemperaur/hesperides-seeds)
![Changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3?style=flat-square&logo=changesets&logoColor=white) 
[![Release Status](https://github.com/emeraldemperaur/hesperides-seeds/actions/workflows/release.yml/badge.svg)](https://github.com/emeraldemperaur/hesperides-seeds/actions)



### Overview
<p align="justify">
TypeScript helper functions, utilities and build tools package for Hesperidesᴬᴵ API integrations.
</p>
 

### Installation
```bash
npm install @emeraldemperaur/hesperides-seeds
```

### Peer Dependencies
```bash
npm install react react-dom
```

### Usage

#### useSSE (Server-Side Events) Hook
<p align="justify">
Production-ready Server-Sent Events (SSE) hook for handling nuances of built-in browser API <code>EventSource</code> that enables Server-Sent Events (SSE). SSE allows a server to push real-time, one-way updates to a user client over a persistent HTTP connection.
</p>

```typescript
import { useSSE } from '@emeraldemperaur/hesperides-seeds';
```

#### Hesperia Verb HTTP Request & Response Models
<p align="justify">
HTTP request and response schema models for Hesperia verbs: <code>IDEATE</code>, <code>RESEARCH</code>, <code>VOCALIZE</code>, <code>VOCALIZE_TEXT_AS_PODCAST</code>, <code>VOCALIZE_DOC_AS_PODCAST</code>, <code>RENDER_REEL</code>, <code>RENDER_IMAGE</code>, <code>TAG_REEL</code>, <code>TAG_IMAGE</code> 
</p>

```typescript
// Master schema(s) representing variants of valid Hesperia API request and response predicated on verb.
import { HesperiaRequestSchema, LadonOrchestratorResponseSchema, HesperiaArtifactSchema} from '@emeraldemperaur/hesperides-seeds';

// Master schema representing variant state (i.e. Progress, Completed or Failed) payload a user client receives via Asynchronous Polling, Webhooks, or Server-Sent Events for an extant garden job.
import { HesperiaJobStreamEventSchema } from '@emeraldemperaur/hesperides-seeds';

// Unified HesperiaArtifact type
import { type HesperiaArtifact } from '@emeraldemperaur/hesperides-seeds';

// AI Verb type
import { type AIVerb } from '@emeraldemperaur/hesperides-seeds';

```

#### Country Global Objects
<p align="justify">
Country global objects and DX helper functions for mapping countryCode, capital, majorCities, languages & localSubdivisions for Australia, Canada, Italy, France, Monaco, United States and United Kingdom.
</p>

```typescript
import { 
    getSubdivisionsByCountry, 
    getLocalOptionsBySubdivisionId, 
    getGlobalRegionsByLanguage 
    } from '@emeraldemperaur/hesperides-seeds';
```


#### Countries Dictionary
<p align="justify">
Countries dictionary and helper functions for all 195 United Nations recognized countries.
</p>

```typescript
import { 
    getCountryByCode, 
    getCountriesByContinent, 
    getCountriesByLanguage,
    searchCountriesByName,
    getAllUniqueCurrencies,
    worldCountries 
    } from '@emeraldemperaur/hesperides-seeds';
```

#### Global Namer Dictionary
<p align="justify">
Global names dictionary and helper functions for male or female monikers across select regions. 

e.g. Japan, France, Nigeria, Mexico, India, Egypt, Brazil, South Africa, China
</p>

```typescript
import { 
    getRandomName, 
    searchNamesByMeaning, 
    getNamesByLanguage,
    worldNames
    } from '@emeraldemperaur/hesperides-seeds';
```

#### Chronos Functions
<p align="justify">
Chronological helper functions
</p>

```typescript
import { getTimeBasedGreeting, getTimeStamp } from '@emeraldemperaur/hesperides-seeds';
```

#### AI Web Services UI Components
<p align="justify">
Reusable UI and Output components for AI web services
</p>

```typescript
import { AIFormNode } from '@emeraldemperaur/hesperides-seeds';
```

### Tool Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![RollupJS](https://img.shields.io/badge/RollupJS-EC4A3F?style=for-the-badge&logo=rollupdotjs&logoColor=white)
![Zod](https://img.shields.io/badge/zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
