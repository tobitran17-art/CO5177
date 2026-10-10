import React from 'react';
import rolesFigure from '../reports/figures/01-roles.png';
import missingFigure from '../reports/figures/02-missing.png';
import labelsFigure from '../reports/figures/03-labels.png';
import patientsFigure from '../reports/figures/04-patients.png';

const figures = {
  'figures/01-roles.png': rolesFigure,
  'figures/02-missing.png': missingFigure,
  'figures/03-labels.png': labelsFigure,
  'figures/04-patients.png': patientsFigure,
};

function parseInline(text, keyPrefix) {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const nodes = [];
  let last = 0;
  let index = 0;
  let match = pattern.exec(text);
  while (match) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    const key = `${keyPrefix}-${index}`;
    if (token.indexOf('**') === 0) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.indexOf('*') === 0) {
      nodes.push(<em key={key}>{token.slice(1, -1)}</em>);
    } else if (token.indexOf('`') === 0) {
      nodes.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      const href = link[2];
      const external = /^https?:\/\//.test(href);
      const linkNode = (
        <a
          key={key}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {link[1]}
        </a>
      );
      nodes.push(linkNode);
    }
    last = match.index + token.length;
    index += 1;
    match = pattern.exec(text);
  }
  if (last < text.length) {
    nodes.push(text.slice(last));
  }
  return nodes;
}

function splitRow(line) {
  return line.replace(/^\|/, '').replace(/\|$/, '').split('|').map(cell => cell.trim());
}

function parseBlocks(source) {
  const lines = source.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
    } else if (line.indexOf('```') === 0) {
      const code = [];
      index += 1;
      while (index < lines.length && lines[index].indexOf('```') !== 0) {
        code.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: 'code', text: code.join('\n') });
      index += 1;
    } else if (line.indexOf('|') === 0) {
      const rows = [];
      while (index < lines.length && lines[index].indexOf('|') === 0) {
        rows.push(splitRow(lines[index]));
        index += 1;
      }
      blocks.push({ type: 'table', rows });
    } else if (/^#{1,3}\s/.test(line)) {
      blocks.push({
        type: 'heading',
        level: line.match(/^#+/)[0].length,
        text: line.replace(/^#{1,3}\s/, ''),
      });
      index += 1;
    } else if (line.trim() === '---') {
      blocks.push({ type: 'rule' });
      index += 1;
    } else if (/^[-*]\s/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s/.test(lines[index])) {
        items.push(lines[index].replace(/^[-*]\s/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: false, items });
    } else if (/^\d+\.\s/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) {
        items.push(lines[index].replace(/^\d+\.\s/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: true, items });
    } else {
      const paragraph = [];
      while (
        index < lines.length
        && lines[index].trim()
        && lines[index].indexOf('|') !== 0
        && !/^#{1,3}\s/.test(lines[index])
        && !/^[-*]\s/.test(lines[index])
        && !/^\d+\.\s/.test(lines[index])
        && lines[index].indexOf('```') !== 0
        && lines[index].trim() !== '---'
      ) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      const text = paragraph.join(' ');
      const image = text.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
      if (image) {
        blocks.push({ type: 'image', alt: image[1], src: image[2] });
      } else {
        blocks.push({ type: 'paragraph', text });
      }
    }
  }

  return blocks;
}

function renderTable(rows) {
  const header = rows[0];
  const body = rows.slice(2);
  return (
    <div className="report-table-wrap">
      <table>
        <thead>
          <tr>
            {header.map(cell => (
              <th key={cell}>{parseInline(cell, `th-${cell}`)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map(row => (
            <tr key={row.join('|')}>
              {row.map((cell, cellIndex) => (
                <td key={`${header[cellIndex]}-${cell}`}>
                  {parseInline(cell, `td-${header[cellIndex]}-${cell}`)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderList(block) {
  const ListTag = block.ordered ? 'ol' : 'ul';
  return (
    <ListTag>
      {block.items.map(item => (
        <li key={item}>{parseInline(item, `li-${item}`)}</li>
      ))}
    </ListTag>
  );
}

function renderBlock(block, index) {
  if (block.type === 'code') {
    return <pre key={`code-${block.text}`}><code>{block.text}</code></pre>;
  }
  if (block.type === 'table') {
    return <div key={`table-${index}`}>{renderTable(block.rows)}</div>;
  }
  if (block.type === 'heading') {
    const Tag = `h${block.level}`;
    return <Tag key={`h-${block.text}`}>{parseInline(block.text, `h-${block.text}`)}</Tag>;
  }
  if (block.type === 'rule') {
    return <hr key={`hr-${index}`} />;
  }
  if (block.type === 'list') {
    return <div key={`list-${block.items[0]}`}>{renderList(block)}</div>;
  }
  if (block.type === 'image') {
    return (
      <figure key={`img-${block.src}`}>
        <img src={figures[block.src] || block.src} alt={block.alt} />
        {block.alt ? <figcaption>{block.alt}</figcaption> : null}
      </figure>
    );
  }
  return <p key={`p-${block.text}`}>{parseInline(block.text, `p-${block.text}`)}</p>;
}

export default function Markdown({ source }) {
  const blocks = parseBlocks(source);
  return (
    <div className="report-body">
      {blocks.map((block, index) => renderBlock(block, index))}
    </div>
  );
}
