import { SOCIALS } from '@/lib/site';
import { SOCIAL_ICON, SOCIAL_LABEL } from './icons';

/** Social buttons. Placeholder profiles render disabled with a "soon" title. */
export function Socials({ soonLabel }: { soonLabel: string }) {
  return (
    <>
      {SOCIALS.map(({ kind, href }) => {
        const Icon = SOCIAL_ICON[kind];
        const label = SOCIAL_LABEL[kind];
        if (!href) {
          return (
            <span
              key={kind}
              className="social"
              aria-disabled="true"
              title={`${label} — ${soonLabel}`}
              aria-label={`${label} — ${soonLabel}`}
            >
              <Icon />
            </span>
          );
        }
        return (
          <a
            key={kind}
            className="social"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon />
          </a>
        );
      })}
    </>
  );
}
