const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, ExternalHyperlink, UnderlineType
} = require("docx");
const fs = require("fs");
const path = require("path");

// Clean, simple Canadian resume style: left-aligned, black on white,
// one neutral accent, no photo, no decoration. ATS-friendly.
const INK = "1A1A1A";
const GREY = "595959";
const RULE = "BFBFBF";

function nameHeader() {
  return new Paragraph({
    spacing: { after: 20 },
    children: [
      new TextRun({ text: "NOAMAN FAISAL BIN BADAR", bold: true, size: 32, color: INK, font: "Calibri" }),
    ],
  });
}

function titleLine() {
  return new Paragraph({
    spacing: { after: 100 },
    children: [
      new TextRun({ text: "Senior Software Architect | Backend & Distributed Systems", size: 20, color: GREY, font: "Calibri" }),
    ],
  });
}

function contactLine() {
  return new Paragraph({
    spacing: { after: 220 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: RULE, space: 6 } },
    children: [
      new TextRun({ text: "Edmonton, Alberta, Canada  •  noamanfaisal@gmail.com  •  +1-825-333-9344  •  ", size: 18, color: GREY, font: "Calibri" }),
      new ExternalHyperlink({
        link: "https://www.linkedin.com/in/noamanfaisal",
        children: [new TextRun({ text: "linkedin.com/in/noamanfaisal", size: 18, color: INK, underline: { type: UnderlineType.SINGLE }, font: "Calibri" })],
      }),
      new TextRun({ text: "  •  ", size: 18, color: GREY, font: "Calibri" }),
      new ExternalHyperlink({
        link: "https://github.com/noamanfaisal",
        children: [new TextRun({ text: "github.com/noamanfaisal", size: 18, color: INK, underline: { type: UnderlineType.SINGLE }, font: "Calibri" })],
      }),
    ],
  });
}

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: INK, space: 3 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 20, color: INK, font: "Calibri" })],
  });
}

function bodyText(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after ?? 120 },
    children: [new TextRun({ text, size: 19, color: INK, font: "Calibri" })],
  });
}

function bullet(text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 18, color: INK, font: "Calibri" })],
  });
}

function jobHeader(company, dates) {
  return new Paragraph({
    spacing: { before: 160, after: 10 },
    tabStops: [{ type: "right", position: 9350 }],
    children: [
      new TextRun({ text: company, bold: true, size: 20, color: INK, font: "Calibri" }),
      new TextRun({ text: `\t${dates}`, size: 18, color: GREY, font: "Calibri" }),
    ],
  });
}

function jobSubtitle(text) {
  return new Paragraph({
    spacing: { after: 60 },
    children: [new TextRun({ text, italics: true, size: 18, color: GREY, font: "Calibri" })],
  });
}

function projectHeader(title, meta) {
  return new Paragraph({
    spacing: { before: 110, after: 10 },
    tabStops: [{ type: "right", position: 9350 }],
    children: [
      new TextRun({ text: title, bold: true, size: 19, color: INK, font: "Calibri" }),
      new TextRun({ text: `\t${meta}`, size: 17, color: GREY, font: "Calibri" }),
    ],
  });
}

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 }, // US Letter
          margin: { top: 620, bottom: 620, left: 720, right: 720 },
        },
      },
      children: [
        nameHeader(),
        titleLine(),
        contactLine(),

        sectionHeading("Summary"),
        bodyText(
          "Senior backend engineer and systems architect with 25+ years of experience designing and scaling " +
          "enterprise software, cloud infrastructure, and data platforms. Specialized in Python backend " +
          "development, distributed systems, and cloud-native architecture, with growing focus on AI/ML and " +
          "LLM-powered applications. Comfortable owning technical architecture end-to-end and leading " +
          "cross-functional delivery."
        ),

        sectionHeading("Skills"),
        bodyText("Languages: Python, C#, C++, TypeScript, JavaScript, SQL, C", { after: 40 }),
        bodyText("Cloud & DevOps: AWS, Oracle Cloud Infrastructure (OCI), Kubernetes, Docker, GitHub Actions, Linux", { after: 40 }),
        bodyText("Data Engineering: Apache Airflow, Celery, RabbitMQ, Elasticsearch, PostgreSQL, MySQL, Redis, Neo4j", { after: 40 }),
        bodyText("AI / Machine Learning: LangChain, RAG, OpenAI API, scikit-learn, Pandas, Neural Networks", { after: 40 }),
        bodyText("Architecture & Practices: Distributed Systems, Microservices, System Design, Agile/Scrum, Technical Leadership & Mentoring", { after: 40 }),

        sectionHeading("Experience"),

        jobHeader("Milo Productions Inc. (MuslimKids.TV)", "Jun 2021 – Present"),
        jobSubtitle("System Architect / Senior Backend Developer (Consultant) — Remote (Pakistan) → Canada"),
        bullet("Own backend architecture and cloud infrastructure strategy for a production consumer platform."),
        bullet("Led platform modernization across multiple technology generations (Python 2.7→3.x, Django 1.1→5.x) and migration from Docker to Kubernetes."),
        bullet("Designed and built a Financial Intelligence Platform consolidating 55,000+ invoices and 16,000+ customer records, and an AI-powered content tagging pipeline."),
        bullet("Unified separate web and mobile backends into a single API-driven architecture with a React frontend."),

        jobHeader("Solutionsloft", "Jun 2024 – Nov 2024"),
        jobSubtitle("Solution Architect / Chief Technical Officer — Pakistan"),
        bullet("Led cloud architecture for a multi-cloud migration (AWS → Oracle Cloud) with Kubernetes-based orchestration for an enterprise client."),
        bullet("Designed cloud-native deployment architecture for an enterprise AI/RAG platform."),

        jobHeader("AlphaVu", "Oct 2018 – Jun 2021"),
        jobSubtitle("Solution Architect / Software Lead / Machine Learning Engineer — Pakistan (remote for US-based client)"),
        bullet("Led the engineering team and technical roadmap for a social media analytics platform; re-architected ETL pipelines onto Apache Airflow."),
        bullet("Built ML-based sentiment analysis and data ingestion pipelines processing data from multiple sources into AWS S3, PostgreSQL, and Elasticsearch."),

        jobHeader("Aspose Pty Ltd (Part-time)", "Feb 2018 – Jul 2018"),
        jobSubtitle("Python Business Lead / Software Architect — Pakistan (remote for Australia-based client)"),
        bullet("Architected a generalized search platform (Django, Elasticsearch, Scrapy) for multi-domain content discovery."),

        jobHeader("Nextbridge Private Limited", "Nov 2010 – Feb 2016 (Full-time)  •  Sep 2016 – Jan 2018 (Consultant)"),
        jobSubtitle("Project Manager / Senior Software Architect — Lahore, Pakistan"),
        bullet("Led engineering teams delivering enterprise web, cloud, data engineering, and embedded software projects across multiple industries and technology stacks."),

        jobHeader("Earlier Experience", "1997 – 2010"),
        jobSubtitle("Microsoft (SDET) • Premium Telecom (Project/Team Leadership) • NetSol Technologies • BYTE01"),
        bullet("Progressed from software engineer to technical/team leadership roles across telecom, ERP, and enterprise systems, including quality engineering on Microsoft Dynamics AX at Microsoft."),

        sectionHeading("Selected Projects"),
        projectHeader("NeuralOPS Nexus (Open Source)", "Founder / System Architect — Ongoing"),
        bullet("Designed and built an open-source, multi-tenant AI collaboration platform (Django, React, Kubernetes) for human/AI-agent teamwork."),

        projectHeader("HearSeek", "CTO / System Architect — Ongoing"),
        bullet("Architected a distributed media processing and semantic search platform (Apache Airflow, Qdrant, vector search)."),

        sectionHeading("Education"),
        bodyText("Bachelor of Computer Science — University of Central Punjab, Pakistan (2007)", { after: 20 }),
        bodyText("Graduate coursework in Statistics and Machine Learning — Linköping University, Sweden (2024)", { after: 20 }),
        bodyText("WES Canadian Equivalency: Bachelor's degree (four years)", { after: 20 }),
      ],
    },
  ],
});

const OUT_DIR = path.join(__dirname, "output");
fs.mkdirSync(OUT_DIR, { recursive: true });
const outPath = path.join(OUT_DIR, "Noaman_Faisal_Bin_Badar_Resume.docx");

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outPath, buffer);
  console.log("Wrote " + outPath);
});
