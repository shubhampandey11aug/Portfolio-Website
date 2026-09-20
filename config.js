/* =====================================================================
   config.js : the ONLY file you need to edit.
   Keep the quotes "" and commas , exactly as they are. Change only the
   text between the quotes.

   FILES NEXT TO index.html
     resume.pdf                        your resume
     images/profile.png                your portrait
     images/<id>-cover.png             card image for a project
     images/<id>-1.png, -2.png, ...    solution-walkthrough screenshots (any number)
   <id> is the project's "id" below, e.g. global-listing-intelligence-cover.png
   Missing images are fine: cards show a pipeline diagram, the portrait shows
   your initial, and projects without screenshots hide that section.

   IF AN IMAGE DOES NOT APPEAR
     1. Open the site with ?debug at the end (index.html?debug) to see what
        was found and which image files matched no project.
     2. Double-click update-images.bat (next to index.html). It writes
        images.js, a list of the files in /images. The site then matches file
        names loosely: any case, spaces or underscores instead of hyphens, the
        project id or its full title, a doubled extension (.png.png) and any
        extension. Run it again whenever you add or rename images.
     3. Or name a file explicitly inside the project:  cover: "images/x.png",

   OPTIONAL CAPTIONS: in a project, shots: ["Pipeline canvas", "Audit table"]
   captions images 1 and 2. Images without a caption show just "Step n".

   OPTIONAL CUSTOM FILE NAMES: if your files are named differently, add to a
   project:
     cover: "images/my-cover.png",
     gallery: [ { src: "images/a.png", caption: "Landing zone" },
                { src: "images/b.png", caption: "Merge into Silver" } ],

   TO ADD A PROJECT: copy one whole { id: ... } block inside "projects",
   paste it after the last one (add a comma between blocks), then change:
     id       short lowercase name with hyphens; also used in image names
     category one of your filter labels (Ingestion, Modelling, BI, ...)
     stack    tools used; names must match the Skills lists for the
              click-to-filter links to work
     flow     the steps the data moves through (words containing Bronze,
              Silver or Gold get their own colour)
   ===================================================================== */
const CONFIG = {
  showBuildInfo: true,                   // set to false to hide the small "site build" note in the footer
  name: "Shubham Pandey",                       // EDIT: add your full name
  location: "",
  headline: "From Energy Analytics to Data & AI Engineering.",
  lead: "Data & AI Engineering | Energy Analytics | Microsoft Fabric | Databricks | GenAI | Agentic AI.",
  // Profile photo: images/profile.png (or .jpg / .jpeg / .webp)
  // Resume file:   resume.pdf  (put it next to index.html)
  resume: "resume.pdf",
  resumeText: "A showcase of my professional journey across Gentari India and Kreate Energy, hands-on Microsoft Fabric case studies, and the data, cloud, and AI capabilities I’m building for the next stage of my career.",
  // EDIT these three:
  email: "shubhampandey11aug@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubhampandey08/",
  github: "https://github.com/shubhampandey11aug/",

  about: [
    "I’m an Electrical Engineer and Renewable Energy professional with 12+ years of experience across energy operations, analytics, forecasting, Open Access, C&I, and regulatory compliance.",
    "My journey started in renewable energy operations and evolved into energy analytics and market operations, where I work with data to understand performance, optimize energy allocation, and support better business decisions.",
    "Today, I’m transforming this domain expertise into Data & AI Engineering. I’m building hands-on projects across Microsoft Fabric, Databricks, SQL, Python, Power BI, Generative AI, and Agentic AI, with a focus on modern data platforms and end-to-end analytics solutions.",
    "I bring together two perspectives: I understand the business behind the data, and I’m learning to engineer the data behind the business.",
    "My focus: Learn → Build → Experiment → Solve → Transform."
  ],
  facts: [
    ["Now", "Analytics (Energy & Market Operations), Gentari India"],
    ["Before", "Energy Analytics,Forecasting & Trading, Kreate Energy"],
    ["Training", "Electrical engineering"],
    ["Domain", "Solar project management, open access, C&I, regulatory compliance"],
    ["Based in", "Gurgaon"]
  ],
  experience: [
    { when: "Sep 2025 to now", what: "Analytics (Energy & Market Operations)", where: "Gentari India, Gurgaon" },
    { when: "Nov 2019 to Aug 2025", what: "Energy Analytics,Forecasting & Trading", where: "Kreate Energy, New Delhi" }
  ],
  certifications: [],                      // empty = the Certifications block is hidden. Format: { name: "...", status: "In progress" },

  // Skill names in the first two groups must match the "stack" names in projects
  // exactly for the click-to-filter links to work.
  skills: [
    { group: "Data engineering", hint: "Used in my case studies", items: [
      "Microsoft Fabric","Lakehouse","Data pipelines","Medallion architecture","Delta Lake","PySpark","Incremental loading","Upserts (MERGE)","SCD Type 2","Real-Time Intelligence" ] },
    { group: "Databases and reporting", hint: "Used in my case studies", items: [
      "T-SQL","Fabric Warehouse","Azure SQL","Power BI" ] },
    { group: "Learning now", hint: "In progress", learning: true, items: [ "Databricks and Gen AI" ] },
    { group: "Energy domain", hint: "From my day job", items: [
      "Renewable","Open Access and C&I","Regulatory compliance","Asset management","Energy analytics","Power trading","Forecasting"] }
  ],

  // The single scrolling line of skills under the hero. Edit, add or remove items freely.
  ticker: {
    items: ["Microsoft Fabric","Lakehouse","Delta Lake","PySpark","Data pipelines","Medallion architecture","Generative AI","Agentic AI","Databricks","Incremental loading","SCD Type 2","T-SQL","Fabric Warehouse","Real-Time Intelligence","Power BI","Cloud platforms","Forecasting","Energy analytics"]
  },

  projectsNote: "Each case study covers the problem, what I built and the design decisions. Datasets are simulated or anonymised; no employer data is shown.",

  // Images per project (all optional):
  //   images/<id>-cover.png   card image
  //   images/<id>-1.png, images/<id>-2.png ...  gallery, one per line in "shots" below, in order
  projects: [
    { id: "global-listing-intelligence", title: "Global Listing Intelligence", sector: "Luxury real estate", category: "Ingestion",
      summary: "Wildcard file ingestion into a Fabric Lakehouse with upserts and a run-by-run audit trail.",
      stack: ["Microsoft Fabric","Lakehouse","Data pipelines","Delta Lake","Upserts (MERGE)","Medallion architecture"],
      flow: ["Regional listing files","Bronze","Silver","Audit log"],
      problem: "Property listings arrived as many files from regional sources, with shifting layouts and repeat records. Nobody could say with confidence which listing was current or whether a load had missed anything.",
      built: ["A pipeline that picks up new files by wildcard pattern and lands them untouched in the Bronze layer.","A MERGE into Silver keyed on listing ID, so a re-sent listing updates the existing row instead of duplicating it.","An audit table written on every run: files read, rows in, inserted, updated and rejected."],
      decisions: ["Keep Bronze append-only so any run can be replayed from the raw files.","Count rows at each step and record the counts, so a silent drop shows up as a mismatch.","Let the pipeline own orchestration and failure handling, and keep transformation logic in the notebooks."],
      takeaway: "Trust in a pipeline comes from being able to explain every row count, not from the load succeeding.",
      shots: [] },

    { id: "logistics-data-modernization", title: "Logistics Data Modernization", sector: "Global freight forwarding", category: "Ingestion",
      summary: "Watermark-based incremental loads that move only new and changed shipment rows.",
      stack: ["Microsoft Fabric","Data pipelines","Lakehouse","Incremental loading","Delta Lake"],
      flow: ["Source system","Watermark lookup","Copy new rows","Bronze","Update watermark"],
      problem: "Full reloads of shipment data were slow and heavy on the source system, and the run window kept shrinking as the tables grew.",
      built: ["A control table that stores the last successfully loaded timestamp for each source table.","A pipeline that reads the watermark, copies only newer rows, then advances the watermark.","Delta tables in the Lakehouse ready for downstream modelling."],
      decisions: ["Advance the watermark only after the copy succeeds, so a failed run is safely re-runnable.","Keep the watermark per table, so one slow table does not hold the others back."],
      takeaway: "Incremental loading is mostly about failure handling: decide what a re-run should do before writing the happy path.",
      shots: [] },

    { id: "workforce-intelligence", title: "Workforce Intelligence", sector: "Human resources", category: "Modelling",
      summary: "Azure SQL HR data moved into a Lakehouse and refined from Bronze to Silver.",
      stack: ["Azure SQL","Microsoft Fabric","Lakehouse","Data pipelines","Medallion architecture"],
      flow: ["Azure SQL","Bronze","Silver","HR reporting tables"],
      problem: "HR data lived in an operational database that was not built for analysis, with inconsistent types, duplicate people records and mixed date formats.",
      built: ["Pipelines that copy the HR tables from Azure SQL into Bronze on a schedule.","Silver transformations for typing, de-duplication, null handling and consistent keys.","Clean tables shaped for headcount and attrition reporting."],
      decisions: ["Bring across only the columns reporting needs, since HR data is sensitive.","Do cleaning in Silver, not at the source, so the raw copy stays a faithful record."],
      takeaway: "A clean Silver layer makes every later question cheaper to answer.",
      shots: [] },

    { id: "financial-data-transformation", title: "Financial Data Transformation", sector: "Finance", category: "Modelling",
      summary: "PySpark and Delta Lake transformations that turn raw financial records into validated tables.",
      stack: ["PySpark","Delta Lake","Lakehouse","Microsoft Fabric","Upserts (MERGE)"],
      flow: ["Financial records","Bronze","PySpark","Silver"],
      problem: "Raw financial extracts mixed formats and carried duplicate and malformed rows, which made month-end figures hard to reconcile.",
      built: ["PySpark notebooks that enforce schema, standardise types and flag bad rows.","Delta tables written with MERGE so corrected records replace earlier versions.","Validation checks for totals and row counts between layers."],
      decisions: ["Quarantine rejected rows in their own table instead of dropping them.","Use Delta's schema enforcement to fail loudly on unexpected columns."],
      takeaway: "Rejected rows deserve a home and a report, not a silent filter.",
      shots: [] },

    { id: "unified-commerce-analytics", title: "Unified Commerce Analytics", sector: "Retail and e-commerce", category: "BI",
      summary: "Bronze, Silver and Gold layers feeding one Power BI view of online and store sales.",
      stack: ["Microsoft Fabric","Lakehouse","Medallion architecture","Power BI","Delta Lake"],
      flow: ["Online and store sales","Bronze","Silver","Gold","Power BI"],
      problem: "Online and in-store sales sat in separate systems with different product and customer keys, so leadership never saw one number for the business.",
      built: ["Bronze ingestion for each channel, and Silver tables with conformed products, customers and dates.","A Gold star schema of sales facts and shared dimensions.","A Power BI report on top for sales, mix by channel and product performance."],
      decisions: ["Agree the definition of a sale once, in Gold, instead of in each report.","Keep the model a simple star so report authors can build without help."],
      takeaway: "One agreed definition in the Gold layer ends more arguments than any dashboard.",
      shots: [] },

    { id: "market-risk-intelligence-feed", title: "Market Risk Intelligence Feed", sector: "Treasury and FX", category: "Modelling",
      summary: "FX rate data loaded into a Fabric Warehouse and exposed through T-SQL views.",
      stack: ["Fabric Warehouse","T-SQL","Data pipelines","Microsoft Fabric"],
      flow: ["FX rate feed","Staging","Warehouse (T-SQL)","Risk views"],
      problem: "Risk teams needed daily FX movements in a form they could query directly, with a clear history of each rate.",
      built: ["A pipeline that loads daily FX rates into staging tables in the Warehouse.","T-SQL procedures that validate, load and version the rates.","Views for daily change and exposure that analysts query in plain SQL."],
      decisions: ["Use the Warehouse because the consumers work in T-SQL.","Put the validation in stored procedures so every load applies the same rules."],
      takeaway: "Pick the engine your consumers already speak.",
      shots: [] },

    { id: "accountability-gap", title: "Accountability Gap: Regulatory Data Governance", sector: "Regulated reporting", category: "Governance",
      summary: "Slowly changing dimensions (SCD Type 2) that keep a full history of what was true and when.",
      stack: ["SCD Type 2","Delta Lake","Lakehouse","Microsoft Fabric"],
      flow: ["Change records","Bronze","SCD2 dimension","Point-in-time views"],
      problem: "When a record changed, the old value was overwritten. Regulators and auditors ask what was known on a given date, and the data could no longer answer.",
      built: ["A Type 2 dimension with effective-from and effective-to dates and a current-row flag.","MERGE logic that closes the old row and opens a new one when an attribute changes.","Point-in-time views that return the data as it stood on any chosen date."],
      decisions: ["Never update history in place; only close and add rows.","Test the boundaries: same-day changes, back-dated changes and no-change reloads."],
      takeaway: "History is a feature you have to design in from the start.",
      shots: [] },

    { id: "inventory-migration", title: "Inventory Data Migration", sector: "Supply chain", category: "Ingestion",
      summary: "Legacy inventory data migrated into Lakehouse tables with reconciliation against the source.",
      stack: ["Microsoft Fabric","Lakehouse","Data pipelines","Delta Lake"],
      flow: ["Legacy inventory","Extract","Bronze","Reconcile","Lakehouse tables"],
      problem: "Inventory records sat in a legacy system that was being retired, and the business needed proof that nothing was lost in the move.",
      built: ["Extract and load pipelines into Bronze, then typed Delta tables in the Lakehouse.","Reconciliation checks comparing row counts and key totals between source and target.","A results table that shows pass or fail for each table."],
      decisions: ["Treat reconciliation as a deliverable, not a final check.","Compare more than row counts: quantities and key totals catch what counts miss."],
      takeaway: "A migration is finished when someone else can verify it.",
      shots: [] },

    { id: "customer-data-trust", title: "Customer Data Trust Transformation", sector: "Customer analytics", category: "Governance",
      summary: "A Customer 360 built from several sources, with matching and data quality rules.",
      stack: ["Microsoft Fabric","Lakehouse","Medallion architecture","Delta Lake"],
      flow: ["Source systems","Bronze","Silver","Gold"],
      problem: "The same customer appeared in several systems with different spellings, contacts and IDs, so marketing and support each worked from a different picture.",
      built: ["Bronze copies of each source and Silver standardisation of names, contacts and IDs.","Matching rules that link records belonging to the same customer.","A Gold Customer 360 table with quality checks that report completeness and duplicates."],
      decisions: ["Publish the match rules so people can challenge them.","Track a quality score for each attribute, so consumers know what to trust."],
      takeaway: "Data trust is built with visible rules and measurable quality.",
      shots: [] },

    { id: "live-market-intelligence", title: "Live Market Intelligence", sector: "Trading", category: "Real-time",
      summary: "Streaming trading data into Fabric Real-Time Intelligence for live monitoring.",
      stack: ["Microsoft Fabric","Real-Time Intelligence"],
      flow: ["Trading feed","Eventstream","Real-time store","Live dashboard"],
      problem: "Traders were working from end-of-day files, and price moves that mattered had come and gone by the time anyone saw them.",
      built: ["A streaming path that ingests trading events as they arrive.","A real-time store that supports queries over the latest minutes of data.","A live dashboard for price movement and unusual activity."],
      decisions: ["Keep the streaming path thin and do heavy aggregation later.","Decide up front how late and out-of-order events are handled."],
      takeaway: "Real-time is a design constraint on the whole flow, not just a faster refresh.",
      shots: [] }
  ]
};
