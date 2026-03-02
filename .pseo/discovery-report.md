## pSEO Discovery Report

### Data Assets Found
| Entity | Record Count | Key Fields | Source |
|--------|-------------|------------|--------|
| - | 0 | - | No structured data, CMS, or database exists in the current Vite React application. |

**Context**: The current codebase (`kammi-s-launchpad`) is a single-page React application (CSR) constructed with Vite. It functions as a landing page for Kammi v1.1.0. There are no existing data models or content collections to power programmatic SEO.

### Proposed Page Types (ranked by opportunity)

Given Kammi's positioning as a minimalist, distraction-free writing app with unique time-based themes, we can still build highly targeted pSEO pages by creating the necessary data layer from scratch.

#### 1. Competitor Alternatives
- **Pattern**: `/alternatives/[competitor]-alternative` (e.g., `/alternatives/scrivener-alternative`)
- **Record count**: ~15-30 (Scrivener, Ulysses, iA Writer, Obsidian, Bear, Notion, Word, Google Docs, etc.)
- **Search intent**: Commercial investigation (High intent)
- **Keyword pattern**: "[competitor] alternative", "apps like [competitor]"
- **Data source**: Needs to be created (Static JSON/MDX collection defining competitors, their weaknesses, and how Kammi compares)
- **Content uniqueness**: High (Each page will compare specific features like Kammi's custom themes against the competitor's approach)
- **Data gaps**: Entire dataset needs creation
- **Feasibility**: Needs new data source

#### 2. Use-Case / Audience Fit Pages
- **Pattern**: `/for/[use-case]` (e.g., `/for/novelists`, `/for/journaling`, `/for/distraction-free-writing`)
- **Record count**: ~10-20
- **Search intent**: Informational / Commercial investigation
- **Keyword pattern**: "best writing app for [use-case]", "writing software for [use-case]"
- **Data source**: Needs to be created
- **Content uniqueness**: High (Addressing how Kammi's specific themes and minimalism solve problems for that specific audience)
- **Data gaps**: Entire dataset needs creation
- **Feasibility**: Needs new data source

#### 3. Time-of-Day Writing Prompts / Environments
- **Pattern**: `/prompts/[time-of-day]` or `/environment/[mood]`
- **Record count**: ~5-10
- **Search intent**: Informational
- **Keyword pattern**: "late night writing prompts", "morning pages template", "dark mode writing app"
- **Data source**: Needs to be created 
- **Content uniqueness**: High (Directly leverages Kammi's 5 unique themes like "First Light", "3 AM", "Golden Hour")
- **Data gaps**: Entire dataset needs creation
- **Feasibility**: Needs new data source

### Rejected Candidates
| Entity | Reason Rejected |
|--------|----------------|
| Feature documentation | Too few records (only 5-6 core features like Auto-Save, Themes) to justify programmatic generation. |
| User reviews/testimonials | App does not collect user accounts or reviews natively currently. |

### Recommended URL Structure
```
/alternatives/scrivener
/for/novelists
/for/morning-pages
```

### Data Enrichment Needed
All proposed options require us to build a data foundation (Step 2: `pseo-data`). I recommend creating a local static data collection (e.g., `src/data/alternatives.json` or `.ts`) and configuring an SSG (Static Site Generation) approach or migrating to a framework that supports SEO rendering (Next.js, Astro, Remix, or Vite SSG plugin), as pure client-side React is detrimental for SEO.

### YMYL Assessment
- YMYL category: None
- Risk level: Low
- Recommendation: Standard pSEO OK

### Next Steps
1. [Confirm page types with stakeholder]
2. [Enrich data where needed]
3. [Run pseo-audit on the codebase]
4. [Begin implementation with pseo-data]
