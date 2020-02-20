import React from "react";

import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import Experience from "../components/Experience";
import Education from "../components/Education";
import SkillSet from "../components/SkillSet";
import SocialIcons from "../components/SocialIcons";
import config from "../../config";

const IndexPage = () => (
  <Layout>
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <Sidebar />

    <main className="container-fluid" id="main-content" role="main">
      <Section title="about" hideTitle={true}>
        <header className="subheading mb-4" aria-label="Introduction">
          <h1 className="mb-1">{config.firstName} {config.lastName}</h1>
          <h2 className="mb-0">Software Engineer</h2>
          <address className="mb-0">
            <p className="mb-1">{config.address}</p>
            {config.phone && <p className="mb-1">{config.phone}</p>}
            <p className="mb-0">
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </p>
          </address>
        </header>

        <p>
          I'm a software engineer with 10+ years of experience designing and delivering
          production systems across technically demanding domains, including AI products,
          blockchain protocols, distributed infrastructure, compiler/toolchain work, and
          performance-sensitive services. My work spans system architecture and technical implementation and I
          care about systems that stay reliable, performant, and maintainable as they grow.
        </p>
        <p>
          With strong engineering fundamentals, I'm comfortable working through
          unfamiliar and complex domains, reducing ambiguity, leading technical
          execution, and turning difficult technical problems into production-quality
          outcomes.
        </p>
        <SocialIcons />
      </Section>

      <Section title="professional experience">
        <Experience
          title="Senior Software Engineer / Tech Lead"
          company="LimeChain"
          description="Blockchain and AI solutions: agents, protocols, tooling, ZK, DeFi"
          period="May 2022 - Present"
          projects={[
            {
              name: "Coinbase",
              description:
                "Contributed to backend services within a large microservices architecture for an asset tokenization platform, integrating brokerage-held equities with smart contracts for on-chain distribution, dividends, stock splits, and other corporate actions.",
              url: "https://www.coinbase.com/",
            },
            {
              name: "Neura Protocol",
              description:
                "Designed and implemented components of a custom Sui-based consensus system using Reth as the execution layer, helping achieve sub-second block times.",
              url: "https://www.neuraprotocol.io/",
            },
            {
              name: "Hederion",
              description:
                "Led development of a production Hedera AI agent for natural-language blockchain queries, using LangGraph, LangSmith, and backed by MCP tools for vector search, REST / GraphQL blockchain APIs, and BigQuery historical data.",
              url: "https://hederion.com",
            },
            {
              name: "MPC Automations",
              description:
                "Contributed to a multi-party computation cryptography system for signing transactions and running multi-chain crypto automations.",
              url: "https://limechain.tech",
            },
            {
              name: "BitcoinOS L2 Bridge",
              description:
                "Contributed to R&D for a Polygon CDK-based rollup using Bitcoin as the Layer 1 settlement layer.",
              url: "https://test-grail.bitcoinos.build/",
            },
            {
              name: "Taiko L2 Preconfirmations",
              description:
                "Contributed to an Ethereum preconfirmation PoC for Taiko L2, modifying the mempool, transaction ordering, sequencing, block building and execution, and inclusion rules for priority transactions.",
              url: "https://taiko.xyz/",
            },
            {
              name: "Gosemble & Go Toolchain",
              description:
                "Built a custom TinyGo-based WASM target for compiling Go runtimes to WASM, including a garbage collector for an external allocator, and co-developed Gosemble's framework architecture, runtime modules, and SCALE codec support for Polkadot-compatible parachains.",
              url: "https://limechain.github.io/gosemble",
            },
            {
              name: "Polkadot Research",
              description:
                "Researched, proposed, and secured multiple grants for Go-based Polkadot runtime, covering WASM compilation, garbage collection, SCALE codec support, and runtime modules.",
              url: "https://polkadot.network",
            },
          ]}
          responsibilities={[
            "Led execution across research-heavy client projects, from discovery and planning through implementation and delivery.",
            "Provided architecture, code review, technical direction, and mentoring across complex delivery work.",
            "Worked across backend APIs, AI systems, blockchain protocols, compiler toolchains, and runtime design.",
            "Translated ambiguous requirements and unfamiliar domains into concrete engineering plans and delivery milestones.",
            "Researched grant opportunities, developed technical proposals, and helped secure multiple grants.",
          ]}
          stack="Go, Rust, JavaScript, Python, Solidity, WebAssembly, LLVM, LangGraph, Bitcoin, Ethereum, Polygon, Polkadot"
        ></Experience>

        <Experience
          title="Senior Software Engineer"
          company="B2B Media Group"
          description="Enterprise marketing: account-based marketing, display advertising, content syndication, qualified lead generation"
          period="Jan 2022 - Mar 2022"
          projects={[
            {
              name: "Marketing intelligence platform",
              description:
                "Unified multi-source data streams to power account-based marketing campaigns and qualified lead generation.",
              url: "https://www.b2bmg.com/",
            },
          ]}
          responsibilities={[
            "Designed and implemented backend and full-stack components for marketing intelligence workflows.",
            "Worked with multi-source data pipelines supporting campaign analytics, segmentation, and lead generation.",
            "Improved legacy components and investigated production issues around performance, maintainability, and scalability.",
          ]}
          stack="Ruby on Rails, JavaScript, MySQL, ClickHouse, Kafka, Redis, Docker, Kubernetes"
        ></Experience>

        <Experience
          title="Senior Software Engineer"
          company="Nexgen Development Group"
          description="Software development agency: advertising platform, backend systems, data processing"
          period="Mar 2021 - Jan 2022"
          projects={[
            {
              name: "Advertising platform",
              description:
                "Built account-based analytics, campaign workflows, and data processing features.",
              url: "",
            },
          ]}
          responsibilities={[
            "Designed backend and full-stack components for advertising platform workflows.",
            "Contributed to the architecture and extensibility of internal platform services.",
            "Improved legacy services with a focus on maintainability and operational reliability.",
            "Investigated and resolved production issues related to performance, scale, and data processing.",
          ]}
          stack="Ruby on Rails, MySQL, Elasticsearch, Redis, Docker"
        ></Experience>

        <Experience
          title="Full Stack Engineer (Part-time)"
          company="Elevate Company"
          description="Software development agency: media websites, web apps, mobile apps, e-commerce solutions"
          period="Jan 2020 - Mar 2021"
          projects={[
            {
              name: "News media platform",
              description:
                "Built content management, analytics, and advertising features.",
              url: "https://boulevardbulgaria.bg/",
            },
            {
              name: "Football platform",
              description:
                "Built news, statistics, predictions, betting, and advertising features.",
            },
            {
              name: "Custom integration",
              description:
                "Built e-commerce automation and third-party integrations.",
            },
          ]}
          responsibilities={[
            "Built and maintained full-stack features for media websites, web apps, and e-commerce projects.",
            "Implemented backend components, API integrations, and data flows.",
            "Supported content management, advertising, analytics, and automation workflows.",
          ]}
          stack="Ruby on Rails, JavaScript, MySQL, Elasticsearch, Redis, Docker, AWS"
        ></Experience>

        <Experience
          title="Software Engineer"
          company="Metrilo"
          description="Product startup: e-commerce growth platform, analytics, CRM, email automation, and plugin integrations"
          period="Feb 2015 - Mar 2021"
          projects={[
            {
              name: "Core platform",
              description:
                "Contributed to core event-processing powering e-commerce analytics, CRM, reporting, and customer segmentation.",
              url: "https://www.metrilo.com/ecommerce-analytics",
            },
            {
              name: "Emails & automations",
              description:
                "Contributed to email automation, tracking, reporting, and templating.",
              url: "https://www.metrilo.com/email-marketing",
            },
            {
              name: "Shopify integration",
              description:
                "Built and maintained the Shopify integration service and app for reliable store data collection and processing.",
              url: "https://apps.shopify.com/metrilo",
            },
          ]}
          responsibilities={[
            "Joined early and owned major product areas from early-stage development through scale.",
            "Helped scale the product to process millions of events per day across e-commerce stores.",
            "Designed and implemented backend services for data ingestion, analytics, engagement, CRM, automation, and reporting.",
            "Improved legacy components with a focus on reliability, maintainability, and operational simplicity.",
            "Supported production systems, investigated incidents, and contributed to deployment and operational workflows.",
          ]}
          stack="Ruby on Rails, Ember.js, MongoDB, Redis, Docker, Kubernetes"
        ></Experience>
      </Section>

      <Section title="skills">
        <SkillSet
          title="Core Expertise"
          subtitle="Backend Engineering, System Design, Technical Research, Cloud-Native Services"
        ></SkillSet>

        <SkillSet
          title="Domains"
          subtitle="AI, Blockchain, Cryptography, Smart Contracts, Distributed Systems, Fintech, Big Data, Analytics, E-commerce, Advertising"
        ></SkillSet>

        <SkillSet
          title="Agentic Systems"
          subtitle="LLMs & Tools Orchestration, Context Management, MCP Servers, RAG Pipelines, Tracing & Evals"
        ></SkillSet>

        <SkillSet
          title="Programming Languages"
          subtitle="Go, Rust, Solidity, JavaScript, Python, Ruby, Bash"
        ></SkillSet>

        <SkillSet
          title="Data & Storage"
          subtitle="PostgreSQL, MySQL, ClickHouse, MongoDB, Redis, Kafka"
        ></SkillSet>

        <SkillSet
          title="Frameworks & Libraries"
          subtitle="Ruby on Rails, React, LangGraph, Foundry, Ethers"
        ></SkillSet>

        <SkillSet
          title="Cloud & Infrastructure"
          subtitle="GCP, AWS, Docker, Kubernetes, CI/CD"
        ></SkillSet>

        <SkillSet
          title="Practices"
          subtitle="Test-Driven Development, Spec-Driven Development, Code Review, Clean Architecture"
        ></SkillSet>

        <SkillSet
          title="Languages"
          subtitle="Bulgarian, English">
        </SkillSet>
      </Section>

      <Section title="education">
        <Education
          place='Sofia University "St. Kliment Ohridski", Bulgaria'
          degrees="Physics and Mathematics Program (part-time)"
          period="Oct 2024 - Present"
        ></Education>

        <Education
          place="Technical University of Sofia, Bulgaria"
          degrees="Bachelor of Engineering; Master of Engineering"
          period="Sep 2007 - Sep 2013"
        ></Education>

        <Education
          place='High School of Mathematics "Vasil Levski", Smolyan, Bulgaria'
          degrees="Mathematics and Computer Science"
          period="Sep 2002 - Jun 2007"
        ></Education>
      </Section>

      <Section title="interests">
        <SkillSet
          title=""
          subtitle="I'm interested in practical systems at the intersection of privacy-preserving technologies and artificial intelligence."
        ></SkillSet>
      </Section>
    </main>
  </Layout>
);

export default IndexPage;
