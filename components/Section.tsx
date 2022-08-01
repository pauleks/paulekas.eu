import styles from "../styles/Home.module.css";

interface SectionInterface {
  children: React.ReactNode;
  sectionName: string;
}

const Section = ({ children, sectionName }: SectionInterface) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionName}>{sectionName}</div>
      <div className={styles.sectionContent}>{children}</div>
    </div>
  );
};

export default Section;
