import { Fragment, type ReactNode } from "react";

/**
 * Minimal, dependency-free Markdown renderer for the writing section.
 * Supports: h2/h3 headings, paragraphs, unordered/ordered lists,
 * blockquotes, and inline bold, code, and links.
 */

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const key = `${keyPrefix}-${i++}`;
    if (match[2] !== undefined) {
      nodes.push(<strong key={key} className="font-semibold text-foreground">{match[2]}</strong>);
    } else if (match[3] !== undefined) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]"
        >
          {match[3]}
        </code>
      );
    } else if (match[4] !== undefined) {
      nodes.push(
        <a
          key={key}
          href={match[5]}
          className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
          target={match[5]?.startsWith("http") ? "_blank" : undefined}
          rel={match[5]?.startsWith("http") ? "noreferrer noopener" : undefined}
        >
          {match[4]}
        </a>
      );
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function Markdown({ content }: { content: string }) {
  const blocks = content.split(/\n{2,}/);

  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const key = `b-${i}`;
        const lines = block.split("\n");

        if (block.startsWith("### ")) {
          return (
            <h3 key={key} className="pt-2 text-xl font-semibold tracking-tight">
              {renderInline(block.slice(4), key)}
            </h3>
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2 key={key} className="pt-4 text-2xl font-semibold tracking-tight">
              {renderInline(block.slice(3), key)}
            </h2>
          );
        }
        if (lines.every((l) => l.startsWith("> "))) {
          return (
            <blockquote
              key={key}
              className="border-l-2 border-border pl-5 text-lg italic text-muted-foreground"
            >
              {renderInline(lines.map((l) => l.slice(2)).join(" "), key)}
            </blockquote>
          );
        }
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={key} className="list-decimal space-y-2 pl-6 text-muted-foreground marker:text-muted-foreground">
              {lines.map((l, j) => (
                <li key={`${key}-${j}`} className="pl-1.5 leading-relaxed">
                  {renderInline(l.replace(/^\d+\.\s/, ""), `${key}-${j}`)}
                </li>
              ))}
            </ol>
          );
        }
        if (lines.every((l) => l.startsWith("- "))) {
          return (
            <ul key={key} className="list-disc space-y-2 pl-6 text-muted-foreground marker:text-muted-foreground">
              {lines.map((l, j) => (
                <li key={`${key}-${j}`} className="pl-1.5 leading-relaxed">
                  {renderInline(l.slice(2), `${key}-${j}`)}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={key} className="text-pretty text-lg leading-relaxed text-muted-foreground">
            <Fragment>{renderInline(block.replace(/\n/g, " "), key)}</Fragment>
          </p>
        );
      })}
    </div>
  );
}
