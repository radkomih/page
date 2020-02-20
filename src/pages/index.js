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
    <Sidebar/>

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
          I have strong math and technical foundations. I thrive in scenarios where I have no prior knowledge or experience, 
          as I am predominantly a self-taught and self-motivated individual.
        </p>

        <SocialIcons/>
      </Section>

      <Section title="experience">
        <Experience
        title="Senior Blockchain Engineer"
        company="LimeChain - limechain.tech"
        description="Web3 & Blockchain Solutions - Blockchain infrastructure | ZK | DeFi | dApps | NFTs | DAOs | Tooling"
        period="May 2022 - Present"
        projects={[
          "Polkadot Runtime research",
          "Substrate compatible Runtime implementation in Go - toolchain based on TinyGo, GC implementation with external allocator, SCALE codec, runtime modules implementation",
        ]}
        responsibilities={[
          "Research",
          "Architecture of blockchain solutions",
          "Blockchain protocol development",
          "Documentation",
        ]}
        stack="Go, Rust, Solidity, Javascript, React Js, Hardhat, WebAssembly, Docker, Polkadot, Ethereum"
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
            "Full-stack web development",
            "Design and implementation of new system components",
            "Redesign and improvement of legacy components",
            "Maintenance of efficient and extendable codebase",
            "Monitoring and investigation of bugs, scalability, and performance problems"
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
          stack="Ruby on Rails, MySQL, Clickhouse, Kafka, Elasticsearch, Redis, Docker"
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
          subtitle="Web, Blockchain, Smart Contracts, Cryptography, Big Data, Analytics, E-commerce, Advertisement, VFX"
        >
        </SkillSet>

        <SkillSet
          title="Paradigms"
          subtitle="Object-oriented Programming, Functional Programming, Test-driven Development"
        >
        </SkillSet>

        <SkillSet
          title="Languages"
          subtitle="Go, Solidity, Javascript, Python, Ruby, Bash"
        >
        </SkillSet>

        <SkillSet
          title="Frameworks/Libraries"
          subtitle="Rails, Sidekiq, Ember Js, React Js, Hardhat, Web3/Ethers Js"
        >
        </SkillSet>

        <SkillSet
          title="Storage"
          subtitle="MySQL, Clickhouse, Kafka, MongoDB, Redis, IPFS"
        >
        </SkillSet>

        <SkillSet
          title="Infrastructure"
          subtitle="Docker, Docker Compose, Kubernetes, GCP, AWS, GitHub"
        >
        </SkillSet>

        <SkillSet
          title="Tools"
          subtitle="Git, VS Code"
        >
        </SkillSet>
      </Section>

      <Section title="education">
        <Education
          place="Technical University Sofia, Bulgaria"
          degrees="Bachelor of Engineering, Master of Engineering"
          period="September 2007 - September 2013"
        >
        </Education>

        <Education
          place="PMG Vasil Levski Smolyan, Bulgaria"
          degrees="High School, Mathematics and Computer Science"
          period="September 2002 - June 2007"
        >
        </Education>
      </Section>

      <Section title="interests">
        <SkillSet
          title="Open Source"
          subtitle="Contributing to general privacy-preserving and decentralized tech, Ethereum and Polkadot"
        >
        </SkillSet>
      </Section>
    </div>
  </Layout>
);

export default IndexPage;
