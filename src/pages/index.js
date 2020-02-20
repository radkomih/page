import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Section from '../components/Section';
import Experience from '../components/Experience';
import Education from '../components/Education';
import SkillSet from '../components/SkillSet';
import SocialIcons from '../components/SocialIcons';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div className="container-fluid">
      <Section title="about" hideTitle={true}>
        <div className="subheading mb-3">
          <p><h1 className="mb-0">{config.firstName} {config.lastName}</h1></p>
          <p><h2 className="mb-0">Software Engineer</h2></p>
          <p>{config.address}</p>
          <p>{config.phone}</p>
          <p><a href={`mailto:${config.email}`}>{config.email}</a></p>
        </div>

        <p>
          I am a self-motivated, predominantly self-taught software engineer with over 10 years of professional
          experience architecting and delivering robust, scalable systems. With strong technical and mathematical
          foundations, I embrace opportunities to step into the unknown, tackle challenges beyond my current
          expertise, and adapt quickly to solve complex problems while delivering impactful results.
        </p>

        <SocialIcons />
      </Section>

      <Section title="professional experience">
        <Experience
          title="Engineering Tech Lead"
          company="LimeChain - limechain.tech"
          description="Blockchain & AI Solutions - AI Agents | Blockchain Protocols | Tooling | ZK | DeFi"
          period="May 2022 - Present"
          projects={[
            "AI powered blockchain explorer",
            "Multi-chain MPC automations - Contributted to the design and development of scalable and performant multi-chain tx orchestration layer",
            "BitcoinOS L2 rollup - Contributted to the research and development of a rollup based on the Polygon CDK stack and Bitcoin as L1",
            "Taiko L2 transaction preconfirmations - Contributted to the design and development of an Ethereum transaction preconfirmations PoC, based on Geth, Taiko client, GMEV boost, and more",
            "Gosemble - Contributted to the design and development of an alternative Go-based framework for building Polkadot compatible parachains",
            "TinyGo-based toolchain - Contributted to the development of custom WASM target and GC implementation, part of the TinyGo compiler",
            "Research on alternative Polkadot tech - Contributted to the research of an alternative Polkadot runtime implementation in Go (WASM target, GC, SCALE codec, runtime modules implementation)",
          ]}
          responsibilities={[
            "Conducting in-depth technical research and contributing to system architecture design",
            "Designing and implementing scalable blockchain and AI solutions",
            "Providing technical guidance and team leadership",
          ]}
          stack="Go, Rust, Solidity, Javascript, Python, WebAssembly, LLVM, Bitcoin, Ethereum, Polygon, Polkadot"
        >
        </Experience>

        <Experience
          title="Senior Software Engineer"
          company="B2B Media Group - b2bmg.com"
          description="Global data, marketing solutions, and insights - Account-based marketing | Display advertising | Content syndication | Qualified lead generation"
          period="Jan 2022 - March 2022"
          projects={[
            "Enterprise software platform - gathering and processing data from multiple sources and providing insights to the end-users",
          ]}
          responsibilities={[
            "Developed and maintained full-stack web applications following industry best practices",
            "Designed and implemented scalable system components to support new features and business goals",
            "Refactored legacy code to enhance performance, maintainability, and readability",
            "Ensured extensibility through clean architecture, modular design, and comprehensive testing",
            "Monitored and debugged production systems to address bugs, optimize performance, and improve scalability"
          ]}
          stack="Ruby on Rails, Javascript, MySQL, Clickhouse, Kafka, Redis, Docker, Kubernetes"
        >
        </Experience>

        <Experience
          title="Senior Software Engineer"
          company="Nexgen Development Group - www.nexgen.bg"
          description="Software development company"
          period="March 2021 - January 2022"
          projects={[]}
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems"
          ]}
          stack="Ruby on Rails, MySQL, Clickhouse, Elasticsearch, Redis, Docker"
        >
        </Experience>

        <Experience
          title="Full Stack Engineer"
          company="Elevatecompany Ltd - elevatecompany.eu"
          description="Software development agency - Media websites | Web apps | Mobile apps | E-commerce solutions"
          period="January 2020 - March 2021"
          projects={[
            "News media platform - content management, analytics, and advertisement",
            "Football platform - news, statistics, predictions, betting and advertisement",
            "Custom e-commerce integration",
          ]}
          responsibilities={[
            "Full-stack web development",
          ]}
          stack="Ruby on Rails, Javascript, MySQL, Elasticsearch, Redis, Docker, AWS"
        >
        </Experience>

        <Experience
          title="Web Engineer"
          company="Metrilo Ltd - metrilo.com"
          description="Plug-n-play growth platform for e-commerce brands"
          period="February 2015 - March 2021"
          projects={[
            "Main platform - data collection, analytics, emails, automation, CRM, actionable insights",
            "Email microservice - email delivery and tracking",
            "Shopify plugin microservice - data collection and processing",
            "Custom templating library",
            "Admin panel",
          ]}
          responsibilities={[
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems",
            "Infrastructure support"
          ]}
          stack="Ruby on Rails, Ember Js, MongoDB, Redis, Docker, Kubernetes"
        >
        </Experience>
      </Section>

      <Section title="skills">
        <SkillSet
          title="Domains"
          subtitle="AI, Blockchain, Cryptography, Smart Contracts, Big Data, Analytics, E-commerce, Advertisement, VFX"
        >
        </SkillSet>

        <SkillSet
          title="Methodologies & Paradigms"
          subtitle="Object-oriented, Functional, Concurrent Programming, Test-driven Development"
        >
        </SkillSet>

        <SkillSet
          title="Programming Languages"
          subtitle="Go, Rust, Solidity, Javascript, Python, Ruby, Bash"
        >
        </SkillSet>

        <SkillSet
          title="Frameworks & Libraries"
          subtitle="LangGraph, Foundry Toolkit, Ethers, React, Rails, Sidekiq, NumPy"
        >
        </SkillSet>

        <SkillSet
          title="Data & Storage"
          subtitle="MySQL, Postgresql, Clickhouse, MongoDB, Redis, Kafka"
        >
        </SkillSet>

        <SkillSet
          title="Cloud & Infrastructure"
          subtitle="GCP, AWS, Docker, Docker Compose, Kubernetes"
        >
        </SkillSet>

        <SkillSet
          title="Tools"
          subtitle="Git"
        >
        </SkillSet>
      </Section>

      <Section title="education">
        <Education
          place="Sofia University St. Kliment Ohridski, Bulgaria"
          degrees="Physics and Mathematics Program"
          period="October 2024 - Present"
        >
        </Education>

        <Education
          place="Technical University Sofia, Bulgaria"
          degrees="Bachelor of Engineering, Master of Engineering"
          period="September 2007 - September 2013"
        >
        </Education>

        <Education
          place='Highschool of Mathematics "Vasil Levski" Smolyan, Bulgaria'
          degrees="Mathematics and Computer Science"
          period="September 2002 - June 2007"
        >
        </Education>
      </Section>

      <Section title="interests">
        <SkillSet
          title="Open Source"
          subtitle="Privacy-preserving and decentralized tech"
        >
        </SkillSet>
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
