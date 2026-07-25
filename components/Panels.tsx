import type { Panel } from '@/lib/types';

/** Reference content, rendered as mounted plates rather than article prose. */
export function Panels({ panels }: { panels: Panel[] }) {
  return (
    <div className="panels">
      {panels.map((panel, i) => {
        const wide =
          panel.kind === 'note' ||
          (panel.kind === 'links' && panel.items.length > 8) ||
          (panel.kind === 'facts' && panel.rows.length > 9) ||
          (panel.kind === 'list' && panel.items.length > 9);

        if (panel.kind === 'note') {
          return (
            <aside className="aside-note panel--wide mountable" key={i} data-mount-delay={String((i % 2) * 80)}>
              <p>{panel.text}</p>
            </aside>
          );
        }

        return (
          <section
            className={`plate plate__pad mountable${wide ? ' panel--wide' : ''}`}
            key={i}
            data-mount-delay={String((i % 2) * 80)}
          >
            {'heading' in panel && panel.heading && <h3 className="panel__heading">{panel.heading}</h3>}

            {panel.kind === 'prose' && (
              <div className="panel__prose">
                {panel.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            )}

            {panel.kind === 'facts' && (
              <dl className="rows">
                {panel.rows.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            )}

            {panel.kind === 'list' && (
              <ul className="bullets">
                {panel.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {panel.kind === 'links' && (
              <>
                {panel.note && <p className="panel__note">{panel.note}</p>}
                <ul className="entries">
                  {panel.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer">
                          <span className="e-label">{item.label}</span>
                          {item.meta && <span className="e-meta">{item.meta}</span>}
                        </a>
                      ) : (
                        <span className="dead">
                          <span className="e-label">{item.label}</span>
                          {item.meta && <span className="e-meta">{item.meta}</span>}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        );
      })}
    </div>
  );
}
