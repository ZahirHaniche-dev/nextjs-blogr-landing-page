import Link from 'next/link';
import styles from './css/Buttons.module.css';

interface ButtonLinkProps {
  label: string;
  mode: 'primary' | 'secondary';
  href: string;
}

function ButtonLink({ label, mode, href }: ButtonLinkProps): JSX.Element {
  return (
    <div className={`d-flex align-items-center ${styles.authButtons}`}>
      <Link
        href={href}
        className={`d-block ${mode === 'primary' ? styles.buttonPrimary : styles.buttonSecondary}`}
      >
        {label}
      </Link>
    </div>
  );
}

export default ButtonLink;
