# Projects (Master Bank)

One entry per project. Copy the block below for each new project.

**New optional fields:**
- `Priority: N` — controls display order in the main Projects grid. Lower number shows first. Omit to fall back to file order (treated as very low priority, shows near the bottom).
- `Affiliation:` — use this when a project was NOT done as part of a formal employer/client relationship — e.g. a personal side project run alongside your main job. It renders as a small badge on the card so it reads honestly (not as a separate employer). Leave blank for normal employer/client work.

### HearSeek
* Priority: 1
* Affiliation: Side project (co-founded with a friend as CEO) — run concurrently with primary role at MuslimKids.TV
* Category: AI Platform / Distributed Systems
* Role: CTO / System Architect / Lead Backend Engineer
* Start – End: Jun 2025 – _(Dec 2026 listed in source — confirm if this is a target/expected end date or ongoing "Present")_
* Problem/Goal: Design and develop a distributed AI platform for large-scale media processing, transcription, and semantic search, enabling users to discover relevant video and audio content using natural language queries rather than traditional keyword search.
* Tech Stack: Python, Apache Airflow, Celery, RabbitMQ, Apache Kvrocks (Redis), PostgreSQL, MinIO (S3), Docker, FFmpeg, Qdrant, Hugging Face Embeddings, Cross-Encoder Reranking, Lua
* What I Did:
    * Designed the overall distributed system architecture and served as CTO, leading technical strategy and backend development.
    * Architected a scalable media processing pipeline using Apache Airflow and Celery to orchestrate asynchronous transcription, media transformation, and post-processing workflows.
    * Designed a fault-tolerant distributed locking and deduplication mechanism using Apache Kvrocks to ensure idempotent processing across multiple worker nodes.
    * Implemented atomic state management using Lua scripts to eliminate race conditions and guarantee reliable distributed task execution.
    * Designed a modular backend architecture using SOLID principles, dependency injection, and Strategy/Factory design patterns to support extensibility and maintainability.
    * Built containerized microservices orchestrating PostgreSQL, RabbitMQ, MinIO, Airflow, FFmpeg workers, and vector search services.
    * Engineered an end-to-end semantic search engine by generating vector embeddings from media transcripts and indexing them in Qdrant for high-performance similarity search.
    * Improved search quality by implementing cross-encoder reranking, providing highly relevant and context-aware search results.
    * Led technical architecture, engineering decisions, product roadmap, and overall platform evolution.
* Outcome/Metric: Successfully delivered a production-ready distributed AI platform capable of scalable media processing and semantic search, combining workflow orchestration, distributed computing, vector databases, and modern information retrieval techniques.
* Client/Link: HearSeek (hearseek.com)

### Favyo Machine Learning Suite
* Priority: 18
* Category: AI/ML
* Role: Software Developer / Machine Learning Consultant
* Start – End: _(Add dates)_
* Problem/Goal: Managed the Machine Learning software wing responsible for providing AI/ML services to the Favyo social media application. Developed image and video content categorization using IBM Watson and Google Vision API to support content organization, marketing use cases, and detection of obscene or inappropriate media.
* Tech Stack: Python, Django REST Framework, Pandas, IBM Watson, Google Vision API, Elasticsearch, PostgreSQL, Git, PyCharm
* What I Did:
    * Designed and implemented the architecture for the AI/ML service responsible for processing media categorization requests.
    * Integrated IBM Watson and Google Vision APIs for image and video classification and inappropriate content detection.
    * Built a scalable backend architecture that could be extended to support additional media types and future in-house machine learning models.
    * Collaborated with a cross-functional team of approximately 10 members.
* Outcome/Metric: _(Add measurable results if available.)_
* Client/Link: ilsainteractive.com

### Dynabic.Search Tool (Aspose.Search)
* Priority: 14
* Category: Search Platform / Data Engineering / NLP
* Role: Software Architect / Software Developer
* Start – End: Feb 2018 – Jul 2018
* Problem/Goal: Designed and developed a generalized search platform for Aspose to index and search content across multiple domains and file formats. The system automated large-scale web data collection, text normalization, indexing, and intelligent search to support product discovery and marketing initiatives.
* Tech Stack: Python, Django, Elasticsearch, PostgreSQL, RabbitMQ, Scrapy, Docker, Git, PyCharm
* What I Did:
    * Architected and developed the complete search platform from the ground up.
    * Designed a scalable scraping pipeline to collect and process content from multiple websites and domains.
    * Built NLP-based text cleaning and normalization components to improve search quality and indexing accuracy.
    * Implemented Elasticsearch indexing and optimized search performance for fast and relevant retrieval.
    * Developed a Dockerized backend architecture using Django, PostgreSQL, RabbitMQ, and Elasticsearch.
    * Designed the system to support multiple document types and future expansion to additional search domains.
* Outcome/Metric: Successfully delivered a production-ready search platform used to improve product discovery and marketing across Aspose's product ecosystem. _(Add measurable metrics if available.)_
* Client/Link: aspose.com

### Microsoft GDL AX – Localization & Test
* Priority: 15
* Category: Software Development / Quality Engineering
* Role: Software Development Engineer in Test (SDET)
* Start – End: May 2008 – Apr 2009
* Problem/Goal: Owned the quality assurance of localization and regulatory features for Microsoft Dynamics AX releases across multiple countries, ensuring compliance and product quality for major AX releases.
* Tech Stack: Functional Specification Review, Development Design Review, Test Planning, Test Design, Manual Feature Verification
* What I Did:
    * Owned the end-to-end testing of localization and regulatory features assigned for multiple countries.
    * Reviewed Functional Specifications and Development Design documents.
    * Created comprehensive test plans, test design documents, and detailed test suites.
    * Performed manual feature and code verification to validate functionality and compliance.
    * Collaborated with development teams throughout the release lifecycle for major Microsoft Dynamics AX releases.
* Outcome/Metric: Successfully owned and delivered quality assurance for localization and regulatory features across multiple Microsoft Dynamics AX releases.
* Client/Link: Microsoft

### Alphavu Social Data Analysis
* Priority: 3
* Category: Data Engineering / Machine Learning
* Role: Solution Architect / Data Engineer
* Start – End: Oct 2018 – Jun 2021
* Problem/Goal: Designed and developed a scalable social media analytics platform for processing, analyzing, and visualizing large-scale data from multiple online sources. The platform enabled clients in politics, healthcare, and public transit to gain actionable insights through machine learning, sentiment analysis, and interactive dashboards.
* Tech Stack: Python, Apache Airflow, Django, PostgreSQL, Elasticsearch, Neo4j Graph Database, AWS S3, Kibana, Pandas, scikit-learn, Git, PyCharm
* What I Did:
    * Led the design and development of the platform architecture and managed the development team.
    * Re-architected the existing Django-based ETL system by introducing Apache Airflow, migrating all data pipelines to a scalable workflow orchestration platform.
    * Designed and developed end-to-end ETL pipelines for Facebook, Facebook Messenger, Facebook Ads, Instagram, Twitter, Reddit, Webhose.io, corporate email, Salesforce, and call centre audio data.
    * Built custom API integration modules with intelligent rate-limit handling for Facebook and Instagram APIs.
    * Designed data ingestion pipelines that extracted data into AWS S3, processed and enriched it in PostgreSQL using machine learning techniques, and published analytics data to Elasticsearch and flat-table reporting databases.
    * Developed sentiment analysis and text-processing workflows for social media, web content, corporate communications, and speech-to-text datasets.
    * Redesigned and developed the Neo4j Graph Database components to improve relationship analysis and graph-based insights.
    * Optimized the application user interface and backend performance.
    * Led client communication, technical discussions, solution design, and project delivery.
    * Collaborated with and led a team of approximately 5 engineers.
* Outcome/Metric: Successfully delivered a scalable analytics platform capable of processing data from multiple social media and enterprise sources while improving pipeline maintainability, scalability, and reporting capabilities through Apache Airflow and modern data engineering practices.
* Client/Link: alphavu.com

### ItsRelevant (v1)
* Priority: 19
* Category: Streaming Platform / Software Architecture
* Role: Project Manager / Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Designed and developed a video streaming platform supporting Roku TV, web, and mobile applications, integrated with an Odoo-based accounting and billing system.
* Tech Stack: Python, Django, Roku API, Android, iOS, jQuery, Git, SVN, PyCharm
* What I Did:
    * Designed the overall software architecture for the Django and Odoo platform.
    * Implemented backend services and integrations between Django and the Odoo accounting system.
    * Designed synchronization using cache and queue servers.
    * Managed project planning, client communication, and a development team of 4 engineers.
* Outcome/Metric: _(Add if known.)_
* Client/Link: itsrelevant.com

### ItsRelevant TV Platform (v2)
* Priority: 20
* Category: Streaming Platform / Cloud Architecture
* Role: Software Manager / Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Modernized the streaming platform architecture to improve scalability, search performance, and cloud storage while supporting growing web, Roku TV, Android, and iOS applications.
* Tech Stack: Python, Django, Elasticsearch, RabbitMQ, AWS S3, Roku, Android, iOS, FFmpeg, AngularJS, TypeScript
* What I Did:
    * Redesigned the platform architecture for improved scalability and maintainability.
    * Introduced Elasticsearch to provide high-performance search capabilities.
    * Integrated RabbitMQ for asynchronous processing and background task management.
    * Migrated media storage and delivery to AWS S3.
    * Designed scalable backend services supporting Roku, Android, iOS, and web clients.
    * Continued leading software architecture, development, client communication, and team management.
    * Managed and mentored a team of 4 developers.
* Outcome/Metric: Successfully upgraded the platform with scalable cloud architecture, faster search capabilities, and improved backend performance.
* Client/Link: itsrelevant.com

### Chimp Monitor (Embedded)
* Priority: 21
* Category: Embedded Software
* Role: Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Designed a desktop application for configuring and monitoring a Power Converter device, enabling users to exchange data such as device variables, parameters, and system configuration with an embedded TS-4600 platform.
* Tech Stack: Python, PyQt4, Qt Designer, Git, PyCharm, TS-4600 Embedded Platform
* What I Did:
    * Designed the overall software architecture of the desktop monitoring application.
    * Selected PyQt4 as the application framework to accelerate development.
    * Developed core components of the application.
    * Collaborated with a team of 3 engineers throughout the project lifecycle.
* Outcome/Metric: Successfully delivered an embedded monitoring application for Power Converter configuration and diagnostics.
* Client/Link: Nextbridge

### Arbitrage Trading System
* Priority: 22
* Category: FinTech / Trading Systems
* Role: Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Designed and developed an automated arbitrage trading system that identified price differences between two market data sources and executed trading decisions using the FIX protocol.
* Tech Stack: C#, .NET Framework 2.0, QuickFIX, Onix FIX Engine, OANDA Library, Subversion
* What I Did:
    * Designed, developed, and deployed the complete trading application.
    * Integrated two market data sources (fast and slow feeds) using the FIX protocol.
    * Implemented order management and market data processing using QuickFIX and the Onix FIX Engine.
    * Collaborated with a team of 2 engineers throughout the project lifecycle.
* Outcome/Metric: Successfully delivered a low-latency arbitrage trading application for automated market analysis and trade execution.
* Client/Link: Premium Hosting USA

### S3 Multithreaded File Uploader
* Priority: 17
* Category: Desktop Application / Cloud Storage
* Role: Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Designed and developed a multithreaded desktop application for uploading files, folders, and Microsoft Outlook emails to Amazon S3. The solution supported versioning, metadata tagging, and seamless cloud storage integration for efficient document management.
* Tech Stack: C#, .NET Framework, Amazon S3 REST API, Microsoft Outlook API, LINQ to SQL, MySQL, Subversion
* What I Did:
    * Designed and developed the complete desktop application architecture.
    * Implemented high-performance multithreaded uploads with synchronization and inter-process communication.
    * Integrated Amazon S3 using the REST API with support for file versioning and searchable metadata.
    * Developed drag-and-drop support for files, folders, and Microsoft Outlook emails.
    * Implemented automatic extraction and upload of email attachments while preserving relationships between emails and their attachments.
    * Optimized concurrent uploads to improve throughput and responsiveness.
    * Collaborated with a team of 3 engineers.
* Outcome/Metric: Successfully delivered a robust cloud upload solution that simplified document and email archival while providing efficient, concurrent uploads to Amazon S3.
* Client/Link: Filocity.com (Nextbridge)

### Crayon Crawler Firewall
* Priority: 23
* Category: Cybersecurity / Network Software
* Role: Team Leader / Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Designed and developed a parental-control firewall that protected children from inappropriate internet content by intercepting web traffic, enforcing centrally managed filtering policies, and providing parents with a web-based administration portal.
* Tech Stack: C++, MFC, ASP, COM Components, Windows API, Scripting, Visual SourceSafe (VSS)
* What I Did:
    * Designed, developed, and deployed the Mind Walker Protection Module (MPM), the core client-side filtering engine.
    * Implemented a local proxy architecture that intercepted browser traffic and enforced content filtering policies.
    * Integrated the desktop protection module with the server-side parental control portal and policy management services.
    * Implemented automatic synchronization of parent-managed whitelist and blacklist rules from the central server.
    * Prevented unauthorized modification of browser proxy settings to ensure continuous protection.
    * Led a team of 9 engineers and verified end-to-end integration across all system components.
* Outcome/Metric: Successfully delivered a commercial parental-control solution that was showcased at COMDEX in November 2000.
* Client/Link: CTG (Children Technology Group, USA) under NETSOL

### .NET Mailchimp Integration Component
* Priority: 24
* Category: Software Development / API Integration
* Role: Software Architect / Software Developer
* Start – End: _(Add dates)_
* Problem/Goal: Designed and developed a reusable .NET component that simplified integration with the Mailchimp API for email marketing and newsletter management.
* Tech Stack: C#, .NET Framework 4.0, JSON, LINQ to SQL, Subversion, Visual Studio
* What I Did:
    * Designed and developed a reusable wrapper library for the Mailchimp web service.
    * Implemented JSON-based communication with the Mailchimp API.
    * Developed the component API to simplify Mailchimp integration for .NET applications.
    * Collaborated with a team of 6 developers.
* Outcome/Metric: Successfully delivered a reusable integration component that streamlined Mailchimp functionality for client applications.
* Client/Link: UniversityTickets.com (Nextbridge)

### Vehicle Sale System (v1 & v2)
* Priority: 25
* Category: Web Application Development
* Role: Project Manager / Software Architect / Software Developer
* Start – End: _(Add dates for v1 & v2)_
* Problem/Goal: Designed and developed an online vehicle marketplace connecting dealers, marketing agents, and private sellers. The platform supported vehicle listings, online advertisement management, secure payment processing, and community interaction.
* Tech Stack: C#, ASP.NET, .NET Framework 2.0, SQL Server 2000, AJAX, PayPal API, Subversion
* What I Did:
    * Designed, developed, and deployed both versions of the application.
    * Architected the overall system and database design.
    * Implemented vehicle listing, advertisement management, and dealer management modules.
    * Integrated PayPal for secure online advertisement payments.
    * Added community features allowing users to comment on vehicles and dealers in Version 2.
    * Led the development team, provided technical guidance, and managed project delivery.
* Outcome/Metric: Successfully delivered two major versions of a commercial vehicle marketplace platform with integrated payment processing and community features.
* Client/Link: WorldCable / Premium Telecom

### DrAppointments.ca
* Priority: 26
* Category: Healthcare Software
* Role: Team Leader / Software Architect
* Start – End: Dec 2003 – Dec 2004
* Problem/Goal: Designed and developed an online appointment management platform connecting doctors, clinics, and patients across Canada. The system streamlined appointment scheduling, physician work diaries, and automated appointment notifications.
* Tech Stack: C, ASP, ASP.NET, .NET Framework 1.1, Microsoft SQL Server, Visual SourceSafe (VSS)
* What I Did:
    * Designed, developed, and deployed the complete web application.
    * Implemented online appointment scheduling and management for doctors, clinics, and patients.
    * Developed physician work diary and appointment management modules.
    * Implemented automated email and SMS notifications for appointment reminders.
    * Led a team of 2 developers throughout the project lifecycle.
* Outcome/Metric: Successfully delivered a web-based healthcare appointment platform for Canadian healthcare providers and patients.
* Client/Link: DrAppointment.ca

### GoMessenger
* Priority: 27
* Category: Real-Time Communication Software
* Role: Team Leader / Software Developer
* Start – End: Nov 2001 – Nov 2003
* Problem/Goal: Designed and developed an instant messaging platform for ISP subscribers with real-time messaging, conferencing, voice communication, file transfer, and activity monitoring, similar to MSN Messenger.
* Tech Stack: C#, C++, MFC, .NET Framework 1.1, TCP/IP Sockets, XML, Microsoft Agent, Microsoft NetMeeting, Visual SourceSafe (VSS)
* What I Did:
    * Designed and developed the complete server-side messaging system in C#.
    * Implemented a custom XML-based communication protocol over TCP/IP sockets.
    * Developed server-side support for user authentication, presence management, messaging, conferencing, offline messages, file transfer, and activity logging.
    * Integrated voice communication using Microsoft NetMeeting.
    * Collaborated with a team of 5 developers and contributed to overall system design.
* Outcome/Metric: Successfully delivered a commercial instant messaging platform for ISP customers with scalable server-side messaging services.
* Client/Link: Premium Telecom (Premium Hosting USA)

### NetTelephone (VoIP)
* Priority: 28
* Category: VoIP / Network Software
* Role: Team Leader / Software Developer
* Start – End: Nov 2001 – Nov 2003
* Problem/Goal: Designed and developed a desktop VoIP application enabling low-cost international voice calls using the G.711 codec and a remote gatekeeper.
* Tech Stack: C++, MFC, G.711 Codec, VoIP COM Components, Visual SourceSafe (VSS)
* What I Did:
    * Designed, developed, and deployed the complete VoIP application.
    * Integrated G.711 voice codec and VoIP communication components.
    * Configured connectivity with the gatekeeper hosted in the United States.
    * Led a team of 3 developers.
* Outcome/Metric: Successfully delivered a desktop VoIP solution for international voice communication.
* Client/Link: Premium Telecom (Premium Hosting USA)

### ObjectSpy
* Priority: 16
* Affiliation: Independent consulting engagement — client work outside primary full-time employment
* Category: Computer Vision / Image Processing
* Role: Software Developer
* Start – End: Nov 2001 – Nov 2003
* Problem/Goal: Designed and developed an object recognition system that identified two-dimensional objects using image processing and neural network techniques.
* Tech Stack: C++, MFC, FFT, Neural Networks, Visual SourceSafe (VSS)
* What I Did:
    * Developed the complete image processing pipeline from grayscale conversion through object recognition.
    * Implemented image preprocessing, boundary detection, and feature extraction algorithms.
    * Applied Fast Fourier Transform (FFT) to transform image features into the frequency domain.
    * Implemented feature vector generation and neural network-based object classification.
    * Collaborated with a team of 2 developers.
* Outcome/Metric: Successfully delivered an image recognition application using classical computer vision and neural network techniques.
* Client/Link: Premium Telecom (Premium Hosting USA)

### Proxy Server with Whitelist
* Priority: 29
* Affiliation: Independent consulting engagement — client work outside primary full-time employment
* Category: Network Security
* Role: Team Leader
* Start – End: Jun 2000 – Oct 2001
* Problem/Goal: Designed and developed a proxy server that restricted internet access to administrator-approved websites using a centrally managed whitelist.
* Tech Stack: C++, MFC, Visual SourceSafe (VSS)
* What I Did:
    * Designed, developed, and deployed the complete proxy server application.
    * Implemented URL filtering based on administrator-managed whitelist policies.
    * Developed remote administration capabilities for managing whitelist entries over Telnet.
    * Led a team of 2 developers.
* Outcome/Metric: Successfully delivered a secure web access solution for educational and enterprise environments.
* Client/Link: Cybernetics (BYTE01)

### SugarCRM–OpenERP Integration Web Service
* Priority: 30
* Category: ERP Integration
* Role: Software Developer
* Start – End: Jan 2013 – Oct 2013
* Problem/Goal: Enhanced OpenERP web services to simplify integration of suppliers and invoices between SugarCRM and OpenERP.
* Tech Stack: Python, OpenERP, SugarCRM, XML-RPC/Web Services
* What I Did:
    * Enhanced the OpenERP web service layer with reusable integration APIs.
    * Developed services for synchronizing suppliers and invoices between SugarCRM and OpenERP.
    * Simplified data retrieval and persistence for third-party CRM integrations.
* Outcome/Metric: Successfully delivered an enhanced integration layer for seamless CRM and ERP data synchronization.
* Client/Link: oDesk

### OpenERP–FreshBooks Integration
* Priority: 31
* Category: ERP Integration
* Role: Software Developer
* Start – End: Jan 2013 – Oct 2013
* Problem/Goal: Automated invoice synchronization between OpenERP and FreshBooks to streamline customer billing and payment tracking.
* Tech Stack: Python, OpenERP, FreshBooks API
* What I Did:
    * Developed an OpenERP module that automatically created customer invoices in FreshBooks.
    * Implemented synchronization of payment status updates from FreshBooks back into OpenERP.
    * Automated invoice lifecycle management between ERP and accounting systems.
* Outcome/Metric: Eliminated manual invoice synchronization and improved billing workflow automation.
* Client/Link: Nextbridge

### Automatic Bank Reconciliation
* Priority: 32
* Category: FinTech / ERP Automation
* Role: Software Developer
* Start – End: Jan 2013 – Oct 2013
* Problem/Goal: Designed and developed an automated bank reconciliation module for OpenERP that processed MT940 bank statements, reconciled customer payments, and generated accounting entries.
* Tech Stack: Python, OpenERP, MT940, IMAP/Email Processing
* What I Did:
    * Developed an automated reconciliation engine for MT940 bank statement files.
    * Implemented email-based processing of bank statements received as attachments.
    * Parsed transactions and automatically matched invoices and customer records.
    * Generated bank statements and updated invoice payment status within OpenERP.
    * Supported multiple email accounts, banks, journals, and companies through configurable settings.
    * Implemented fallback workflows for unmatched transactions requiring accountant review.
* Outcome/Metric: Automated bank reconciliation, reduced manual accounting effort, and improved financial processing accuracy.
* Client/Link: oDesk

### Disk-Based Binary Tree
* Priority: 33
* Category: Systems Programming / Data Structures
* Role: Software Developer
* Start – End: Dec 1997 – Jun 2000
* Problem/Goal: Designed and implemented a disk-based binary tree data structure for a Unix database system, enabling efficient searching and sorting of records without loading the entire dataset into memory.
* Tech Stack: C, Unix
* What I Did:
    * Designed and implemented a file-based binary tree for persistent data storage.
    * Developed search and sorting algorithms optimized for disk-based record access.
    * Built the data structure to support database operations on systems with limited memory resources.
* Outcome/Metric: Successfully delivered a reusable disk-based indexing structure for a Unix database project.
* Client/Link: COMPBUS (developed under BYTE01)

### NeuralOPS Nexus (Open Source)
* Priority: 2
* Affiliation: Personal open-source side project — run concurrently with primary role at MuslimKids.TV
* Category: AI Collaboration Platform / Distributed Systems
* Role: Founder / System Architect / Lead Developer
* Start – End: _(Add start date)_ – Present
* Problem/Goal: Design and develop an open-source, multi-tenant AI collaboration platform where human teams, AI agents, and machine learning models work together in real time. The platform provides a secure workspace for conversations, knowledge management, AI orchestration, and enterprise collaboration.
* Tech Stack: Python, Django 5, Django Ninja, React, TypeScript, PostgreSQL, Redis, Centrifugo, Docker, Kubernetes, ChromaDB, Supabase, OpenAI, GitHub Actions
* What I Did:
    * Designed the complete multi-tenant platform architecture, including organizations, projects, channels, topics, permissions, and collaboration workflows.
    * Architected and developed a scalable backend using Django 5 and Django Ninja with REST APIs for both web clients and AI services.
    * Built a real-time messaging platform using Centrifugo, Redis, and WebSockets for low-latency collaboration.
    * Designed an extensible AI architecture supporting personas, AI agents, MCP servers, LLM providers, and future multi-agent workflows.
    * Developed a modern React and TypeScript frontend with a unified API-driven architecture.
    * Containerized the complete platform with Docker and designed production-ready Kubernetes deployment architecture.
    * Designed extensible data models for knowledge management, embeddings, audit logging, model usage, and AI execution history.
    * Led the overall product architecture, technology roadmap, and open-source development.
* Outcome/Metric: Active open-source project under continuous development, designed as an extensible enterprise platform for AI-powered collaboration and autonomous agent ecosystems.
* Client/Link: GitHub (NeuralOPS Nexus) / neuralops-nexus.mapax.io

### Multi-Cloud Platform Migration (Saudi Aramco)
* Priority: 11
* Category: Cloud Architecture / MLOps
* Role: MLOps Lead / System Architect
* Start – End: Jun 2024 – Nov 2024
* Problem/Goal: Design and lead the implementation of a scalable multi-cloud platform enabling enterprise applications to migrate from AWS to Oracle Cloud while adopting Kubernetes-based container orchestration and cloud-native deployment practices.
* Tech Stack: AWS, Oracle Cloud Infrastructure (OCI), Amazon EKS, Kubernetes, Docker, Linux, Python, Git
* What I Did:
    * Led the overall cloud architecture and technical design for the multi-cloud migration initiative.
    * Designed the Kubernetes platform architecture for scalable, highly available production deployments.
    * Defined deployment architecture, networking strategy, and cloud-native application patterns.
    * Collaborated with development and DevOps teams throughout implementation and production rollout.
    * Reviewed architecture, implementation plans, and deployment strategies to ensure reliability and maintainability.
    * Provided technical leadership, mentoring, and architectural guidance throughout the project.
* Outcome/Metric: Successfully delivered a production-ready Kubernetes platform and migration architecture supporting enterprise workloads across AWS and Oracle Cloud.
* Client/Link: SolutionsLoft (Client: DroppGroup – Saudi Aramco)

### Enterprise AI Platform (Al-Nassr)
* Priority: 12
* Category: AI Platform / MLOps
* Role: MLOps Lead / System Architect
* Start – End: Jun 2024 – Nov 2024
* Problem/Goal: Design the cloud-native deployment architecture for an enterprise AI platform based on Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG), providing a scalable and secure foundation for production AI services.
* Tech Stack: Oracle Cloud Infrastructure (OCI), Oracle Kubernetes Engine (OKE), Kubernetes, Docker, Python, LangChain, Retrieval-Augmented Generation (RAG), Linux, Git
* What I Did:
    * Led the architecture and deployment strategy for the enterprise AI platform.
    * Designed Kubernetes-based deployment architecture for LLM inference services and supporting backend components.
    * Collaborated with AI engineers and DevOps teams to ensure scalable and reliable production deployments.
    * Reviewed application architecture, deployment strategy, scalability, and operational readiness.
    * Provided technical leadership and architectural guidance for cloud-native AI platform development.
* Outcome/Metric: Successfully delivered a production-ready AI platform architecture capable of supporting scalable enterprise LLM applications.
* Client/Link: SolutionsLoft (Client: DroppGroup – Al-Nassr)

### Cloud Security & Platform Governance (droppPhygial)
* Priority: 13
* Category: Cloud Security / Platform Engineering
* Role: MLOps Lead / System Architect
* Start – End: Jun 2024 – Nov 2024
* Problem/Goal: Design a secure cloud architecture and governance model aligned with AWS security best practices to support enterprise application deployments while ensuring scalability, operational reliability, and compliance.
* Tech Stack: AWS, Kubernetes, Docker, Linux, Python, Git
* What I Did:
    * Led the design of the cloud security architecture and platform governance strategy.
    * Reviewed infrastructure architecture, deployment patterns, and security controls to ensure production readiness.
    * Collaborated with development and DevOps teams to establish secure deployment practices.
    * Provided architectural guidance on cloud-native application security, identity management, and operational resilience.
    * Conducted architecture reviews and mentored engineering teams on cloud and platform best practices.
* Outcome/Metric: Successfully delivered a secure, production-ready cloud architecture aligned with enterprise security and operational standards.
* Client/Link: SolutionsLoft (Client: DroppGroup)

### MKTV Financial Intelligence Platform (Ongoing)
* Priority: 5
* Category: Financial Data Engineering / Business Intelligence
* Role: System Architect / Senior Backend Developer
* Start – End: _(Add start date)_ – Present
* Problem/Goal: Design and develop a financial intelligence platform that consolidates subscription, billing, and revenue data from multiple payment providers into a unified analytics system, enabling business intelligence, financial reporting, and customer lifecycle analysis.
* Tech Stack: Python, Django 5, PostgreSQL, dj-stripe, django-ledger, Chart.js, Docker, Git
* What I Did:
    * Designed and implemented a normalized financial data model supporting Stripe, Apple App Store, Google Play, and bank payment platforms.
    * Built a scalable data ingestion pipeline that consolidated more than 55,000 invoices and 16,000 customer records into a unified reporting database.
    * Developed reusable management commands for bulk data import, validation, currency normalization, and financial summary generation.
    * Engineered a precomputed financial summary layer providing customer lifetime value (LTV), renewal history, churn status, trial history, and other business KPIs for high-performance reporting.
    * Designed and developed executive dashboards providing revenue trends, Monthly Recurring Revenue (MRR), platform revenue distribution, churn analysis, and customer lifetime value reporting.
    * Built customer financial profile pages with complete billing history, spending trends, platform distribution, and lifecycle analytics.
    * Identified and resolved complex multi-currency data inconsistencies across payment providers by designing automated normalization and correction workflows.
    * Produced a comprehensive financial data dictionary documenting business metrics, data lineage, and reporting coverage for engineering, product, and marketing teams.
* Outcome/Metric: Delivered a production-ready financial intelligence platform that transformed raw billing data into actionable business insights, supporting executive reporting, marketing analysis, and financial decision-making.
* Client/Link: MuslimKids.TV

### MuslimKids.TV AI Video Tagging Pipeline
* Priority: 10
* Category: Machine Learning / Data Engineering
* Role: System Architect / Senior Backend Developer
* Start – End: Jan 2023 – Jun 2023
* Problem/Goal: Design and develop an automated video tagging pipeline that extracts semantic metadata from video content to improve search quality, content discovery, and user engagement across the MuslimKids.TV platform.
* Tech Stack: Python, Apache Airflow, Django, Elasticsearch, PostgreSQL, Machine Learning, Docker
* What I Did:
    * Designed the architecture for an automated video processing and metadata extraction pipeline.
    * Developed Apache Airflow workflows to process video assets and generate AI-powered content tags.
    * Integrated extracted tags into Elasticsearch to enable semantic search and improved content relevance.
    * Built scalable backend services for processing large video libraries and synchronizing metadata with the application.
    * Collaborated with product and engineering teams to improve content discoverability and search experience.
* Outcome/Metric: Delivered an AI-powered video tagging system that significantly improved search relevance, content categorization, and overall user content discovery while reducing manual tagging efforts.
* Client/Link: MuslimKids.TV

### MuslimKids.TV Platform Modernization
* Priority: 4
* Category: Backend Modernization / Cloud Architecture
* Role: System Architect / Senior Backend Developer
* Start – End: _(Add dates)_
* Problem/Goal: Modernized the MuslimKids.TV platform by upgrading a large legacy codebase from Django 1.11 to Django 5.x, consolidating web and mobile backends into a unified API platform, and modernizing the cloud infrastructure to improve maintainability, scalability, and long-term development efficiency.
* Tech Stack: Python, Django 5.x, Django REST Framework, React, PostgreSQL, Kubernetes, Docker, OpenAI API, Git
* What I Did:
    * Led the backend modernization strategy and participated in overall system architecture.
    * Upgraded the backend from Django 1.11 to Django 5.x, including framework, dependency, and database migration.
    * Leveraged OpenAI-assisted development to accelerate large-scale code modernization while validating and refining all generated changes.
    * Consolidated separate Django web and Django REST Framework backends into a unified API-driven architecture serving both React web and mobile (iOS and Android) applications.
    * Collaborated with frontend developers during the migration from Django templates to a React-based frontend.
    * Modernized the Kubernetes deployment architecture to support the new platform design.
    * Collaborated within a cross-functional team of 5 engineers (2 backend and 2 frontend developers, plus QA/Product).
* Outcome/Metric: Successfully modernized a production platform, reducing technical debt, simplifying the overall architecture, and establishing a scalable foundation for future development.
* Client/Link: MuslimKids.TV

### MuslimKids.TV Kubernetes Migration & Cost Optimization
* Priority: 6
> _(Merged from two overlapping entries in the original file — "Cloud Infrastructure Optimization" and "Cloud Infrastructure Modernization" — since both described the same Kubernetes migration and cost outcome.)_
* Category: Cloud Architecture / DevOps
* Role: System Architect / Senior Backend Developer
* Start – End: _(Add dates)_
* Problem/Goal: Design and implement the platform's first Kubernetes architecture, migrating from Docker-based deployments, then later re-architect it to optimize resource utilization, scalability, and monthly cloud operating costs.
* Tech Stack: Kubernetes, Docker, AWS, Linux, Python, Django, Git
* What I Did:
    * Designed and implemented the platform's first Kubernetes architecture, planning and executing the migration from Docker-based deployments with minimal production downtime.
    * Designed deployment strategies, service architecture, and container orchestration for production workloads.
    * Later re-architected the Kubernetes infrastructure to optimize resource allocation, workloads, and deployment strategies.
    * Investigated and mitigated production infrastructure issues while improving platform reliability.
    * Collaborated with the engineering team on deployment automation, infrastructure improvements, and migrating production workloads with minimal service disruption.
* Outcome/Metric: Successfully migrated the production platform from Docker to Kubernetes and reduced monthly cloud infrastructure costs from approximately USD 5,000+ to USD 1,800, while maintaining production performance and reliability.
* Client/Link: MuslimKids.TV

### MuslimKids.TV Security Hardening
* Priority: 7
* Category: Cybersecurity / Cloud Operations
* Role: System Architect / Backend Engineer
* Start – End: _(Add dates)_
* Problem/Goal: Respond to a production security incident affecting the platform and strengthen the overall security posture to prevent future attacks.
* Tech Stack: Kubernetes, Linux, Django, Python, AWS
* What I Did:
    * Investigated and mitigated an active attack against the production platform.
    * Identified security weaknesses and implemented infrastructure and application hardening measures.
    * Improved security configurations across the application and deployment environment.
    * Collaborated with the engineering team to validate system stability after remediation.
* Outcome/Metric: Successfully mitigated the production attack and implemented long-term security improvements that strengthened the platform against similar threats.
* Client/Link: MuslimKids.TV

### MuslimKids.TV Infrastructure Modernization (Single → Multi-Server)
* Priority: 8
* Category: Cloud Architecture / DevOps
* Role: System Architect / Senior Backend Developer
* Start – End: _(Add dates)_
* Problem/Goal: Modernize the production infrastructure by transforming a single-server deployment into a scalable multi-server architecture, improving reliability, maintainability, deployment automation, and cloud storage integration.
* Tech Stack: Python, Django 1.11, Docker, AWS S3, Django Storage, Sorl Thumbnail, Linux, Git
* What I Did:
    * Designed the platform's first multi-server deployment architecture.
    * Migrated the production system from a single-server deployment to a distributed multi-server environment.
    * Introduced Docker to standardize application deployment across servers.
    * Planned and executed the migration of all media assets from local disk storage to Amazon S3.
    * Integrated Django Storage with Amazon S3 while resolving compatibility issues with Sorl Thumbnail.
    * Improved deployment consistency, storage scalability, and operational maintainability.
* Outcome/Metric: Successfully transformed the platform into a scalable multi-server architecture with Dockerized deployments and cloud-based media storage.
* Client/Link: MuslimKids.TV

### MuslimKids.TV Legacy Platform Upgrade
* Priority: 9
* Category: Backend Modernization
* Role: Technical Lead / System Architect
* Start – End: _(Add dates)_
* Problem/Goal: Lead the modernization of a legacy platform by upgrading the application from Python 2.7 to Python 3.7 and from Django 1.1 to Django 1.11 while maintaining compatibility with the existing production system.
* Tech Stack: Python, Django, PostgreSQL, Docker, Git
* What I Did:
    * Led the engineering team responsible for the platform upgrade.
    * Planned and executed the migration from Python 2.7 to Python 3.7.
    * Upgraded the application framework from Django 1.1 to Django 1.11.
    * Coordinated dependency upgrades, compatibility fixes, database migrations, and production deployment.
    * Worked closely with the development team to minimize downtime and ensure a stable production release.
* Outcome/Metric: Successfully modernized the legacy platform, extending its lifecycle and establishing a stable foundation for future enhancements.
* Client/Link: MuslimKids.TV

<!-- Add new projects below by copying the block format above -->
