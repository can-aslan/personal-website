import { Timeline, Container } from "@mantine/core";
import styles from './Experience.module.css';
import Title from "../../title/Title";
import ExperienceCard from "../../cards/experience/ExperienceCard";
import { LINE_SIZE, LINE_WIDTH } from "../../../utils/consts";

const Experience = () => {
  return (
    <Container className={styles.experienceContent}>
      <Title text="Experience"/>
      <Timeline active={3} bulletSize={LINE_SIZE} lineWidth={LINE_WIDTH}>
        <Timeline.Item>
          <ExperienceCard
            logo={require('../../../assets/images/yapi_kredi.jfif')}
            institution="Yapı Kredi Teknoloji"
            location="💻 Remote / 📍 İstanbul, Türkiye"
            positions={["Software Engineer", "Part-Time Software Engineer"]}
            duration="Jan 2023 - Present"
            positionDurations={["Jul 2024 - Present", "Jan 2023 - Jun 2024"]}
            highlights={[
              [
                "Leading pilot project to <b>automatize</b> cross-deparment architectural and software <b>quality control</b> checklists with <b>100+ items</b>.",
                "Fixed <b>25+ business critical bugs</b> by engineering creative solutions utilizing <b>Java Spring Boot</b>, <b>ReactJS</b> and <b>TypeScript</b>.",
                "Implemented various <b>business requirements</b> effectively to <b>Java Spring Boot</b>, <b>ReactJS</b> and <b>TypeScript</b> projects.",
                "Coordinated <b>deployment</b> of various UI, BFF and Backend projects with <b>Helm</b>, <b>Kubernetes</b> and <b>Bamboo</b>.",
                "<b>Mentored an intern</b> regarding company processes, technical problems and potential future paths.",
              ],
              [
                "Selected from amongst <b>more than 300 applicants</b> to work Part-Time while studying.",
                "Designed comprehensive search functionality for a project using <b>ReactJS</b> with <b>TypeScript</b> and <b>Redux</b>.",
                "Developed multiple endpoints for various <b>Java Spring Boot</b> APIs with <b>Microservices</b> architecture.",
                "Fixed multiple bugs based on logs reported to the <b>ELK Stack</b> and various other channels.",
                "Engineered <b>450+ unit tests</b> (<b>~16,000 lines</b>) with more than <b>80% coverage</b> for <b>26,000+ lines of code</b>.",
                "Supported deployment of production code to German subsidiary, utilizing <b>Helm</b>, <b>Kubernetes</b> and <b>Redis</b>.",
                "Utilized <b>VMware Horizon</b> for connecting to the development machine.",
                "Took part in regular organizational training programs aimed at enhancing technical and interpersonal skills.",
                "Assited technical and organizational <b>onboarding</b> of 5 new team members.",
                "Participated in the team's <b>Scrum</b> workflow using <b>Jira</b>, <b>Confluence</b> and <b>Bitbucket</b>.",
                "Offered Full-Time position upon graduation via Kartezya Technology based on <b>proven technical</b> and <b>interpersonal skills</b>.",
              ]
            ]}
            skills={["Microservices", "Domain Driven Design", "H2", "Hibernate", "SAP PowerDesigner", "Swagger", "SQL", "Java", "JavaScript", "ReactJS", "TypeScript", "Spring Boot", "ELK Stack", "Unit/Integration Testing", "Mockito", "JUnit", "Jira", "Git", "Bitbucket", "Confluence", "Bamboo", "SonarQube", "SonarLint", "Redis", "Kubernetes", "Helm", "IntelliJ IDEA", "VS Code", "VMware Horizon", "Microsoft Teams", "Scrum"]}
          />
        </Timeline.Item>

        <Timeline.Item>
        <ExperienceCard
            logo={require('../../../assets/images/fiverr.jfif')}
            institution="Fiverr"
            location="💻 Remote"
            positions={["Freelance Developer"]}
            duration="Jan 2021 - Aug 2023"
            positionDurations={[]}
            highlights={[
              [
                "Designed and developed <b>20+ custom mods</b> tailored to the specific needs of customers with combined <b>32,500+ unique subscribers</b> and <b>88,500+ unique visitors</b> in the <b>Steam Workshop</b>.",
                "Negotiated with customers to understand <b>project requirements</b> and to make recommendations.",
                "Automated large data interpretation and file generation for mods using <b>Java</b>",
                "Designed, developed and debugged <b>custom servers</b> with plugins and maps for customers.",
                "Designed <b>custom artwork</b> and <b>preview videos</b> for projects using <b>Paint.net</b>, <b>Camtasia Studio 8</b> and <b>DaVinci Resolve 17</b>.",
                "<b>Promoted</b> from 'New Seller' to 'Level 1 Seller' within the first 11 months.",
              ]
            ]}
          />
        </Timeline.Item>

        <Timeline.Item>
          <ExperienceCard
            logo={require('../../../assets/images/mobileaction.jfif')}
            institution="MobileAction"
            location="📍 Ankara, Türkiye"
            positions={["Frontend & Backend Engineer Intern"]}
            duration="Aug 2022 - Sep 2022"
            positionDurations={[]}
            highlights={[
              [
                "Negotiated with customers to understand <b>project requirements</b> and to make recommendations.",
                "Automated large data interpretation and file generation for mods using <b>Java</b>",
                "Designed, developed and debugged <b>custom servers</b> with plugins and maps for customers.",
                "Designed <b>custom artwork</b> and <b>preview videos</b> for projects using <b>Paint.net</b>, <b>Camtasia Studio 8</b> and <b>DaVinci Resolve 17</b>.",
                "<b>Promoted</b> from 'New Seller' to 'Level 1 Seller' within the first 11 months.",
              ]
            ]}
          />
        </Timeline.Item>

        <Timeline.Item>
          <ExperienceCard
            logo={require('../../../assets/images/vodafone.jfif')}
            institution="Vodafone"
            location="💻 Remote"
            positions={["DevOps Engineer Intern"]}
            duration="Jul 2022 - Aug 2022"
            positionDurations={[]}
            highlights={[
              [
                "Negotiated with customers to understand <b>project requirements</b> and to make recommendations.",
                "Automated large data interpretation and file generation for mods using <b>Java</b>",
                "Designed, developed and debugged <b>custom servers</b> with plugins and maps for customers.",
                "Designed <b>custom artwork</b> and <b>preview videos</b> for projects using <b>Paint.net</b>, <b>Camtasia Studio 8</b> and <b>DaVinci Resolve 17</b>.",
                "<b>Promoted</b> from 'New Seller' to 'Level 1 Seller' within the first 11 months.",
              ]
            ]}
          />
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Experience;
