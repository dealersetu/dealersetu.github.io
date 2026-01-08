import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "User Management",
    image: require("@site/static/img/logo.png").default,
    description: (
      <>
        Comprehensive user management system with onboarding, role assignment,
        and access control features to manage your team effectively.
      </>
    ),
  },
  {
    title: "Workflow Automation",
    image: require("@site/static/img/logo.png").default,
    description: (
      <>
        Streamline your business processes with automated workflows that improve
        efficiency and reduce manual tasks.
      </>
    ),
  },
  {
    title: "Step-by-Step Guides",
    image: require("@site/static/img/logo.png").default,
    description: (
      <>
        Detailed documentation with visual guides and step-by-step instructions
        to help you master DealerSetu quickly.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={image}
          alt={title}
          width={200}
          height={200}
          className={styles.featureSvg}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
