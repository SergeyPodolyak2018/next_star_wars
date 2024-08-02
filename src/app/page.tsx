import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.startButton}>
          <Link
            href='/dashboard/people'
            className={styles.navButton}
          >
            GO
          </Link>
        </div>
        <section className={styles.starWars}>
          <div className={styles.crawl}>
            <div className={styles.title}>
              <p>Episodio XIII</p>
              <h1>PRODUSED BY SERGEY PODOLYAK</h1>
              <h1>by NEXT.js and React.js </h1>
            </div>
            <p>TECHNICAL SKILLS</p>
            JavaScript, Typescript, ReactJS, Redux, HTML5, CSS, SASS LESS,
            SVG,NodeJS, Express.js, Jest, Docker, MongoDB, MySQL,
            ElasticSearch,Vue3/pinia, Salesforce (SFDC)
            <p>
              EDUCATION & TRAINING 2011 – 2014 Odessa National Technical
              University. Specialization: Automation and robotics. 2002 – 2007
              Zaporizhya National Technical University. Specialization: Welding
              technology.
            </p>
            <p>PROFESSIONAL EXPERIENCE</p>
            <p>02.2024 - 06.2024 Front-end development — Tring</p>
            <p>10.2019 – 02.2024 Front-end development — Tring, Genesys</p>
            <p>
              Project: Genesys Professional Services, Workforce Management‬ ‭●‬
              ‭●‬ ‭●‬ ‭●‬ ‭●‬ ‭ evelop a new generation of WFM service tailored
              for specific customer.‬ D ‭Implement UI modules responsible for
              organizing the work hours of agents.‬ ‭Incorporate modern features
              to enhance User Experience, such as drag-and-drop functionality,
              hotkey‬ ‭support, and interactive dashboards.‬ ‭Implement flexible
              search options within the UI.‬ ‭Ensure the UI supports cross-time
              zone functionality in a single view.‬ ‭Technologies: React, Redux,
              Typescript, grid and flex layout systems, internationalization
              (i18n), GitLab.‬ ‭Project: Genesys Outbound Contact‬ ‭●‬ ‭●‬ ‭●‬
              ‭●‬ ‭●‬ ‭ evelop a new generation of the legacy Outbound service
              for on-premise customers.‬ D ‭Focus on fixing vulnerabilities and
              supporting new security standards.‬ ‭Participate in planning
              sessions and architecture planning.‬ ‭Implement integration with
              REST services.‬ ‭Implement Auth mechanism.‬ ‭ echnologies:
              JavaScript, Typescript, React, Redux, internationalization (i18n),
              Material UI, Ark-Components,‬ T ‭Custom components.‬
            </p>
            <p>‭06.2018 – 05.2019 Front-end development — Criticalcase‬</p>
            <p>
              Responsibilities:‬ ‭‬ ● ‭●‬ I‭ mplement new futures.‬ ‭Support
              existing functionality.‬ ‭ bout project –Implement UI that can
              build flexible query to DB (Elasticsearch) and visualize response‬
              A ‭main technology – Angular2, Typescript‬
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
