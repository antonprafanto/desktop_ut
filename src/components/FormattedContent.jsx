import React from 'react';

/**
 * Component untuk format konten materi dengan markdown-like parsing
 * Menangani: bold, list, headings, dan paragraphs
 */
export default function FormattedContent({ content }) {
  // Parse content dan convert ke JSX elements
  const parseContent = (text) => {
    if (!text) return null;

    // Split by newlines tapi keep structure
    const lines = text.split('\n');
    const elements = [];
    let currentList = [];
    let currentListType = null; // 'ul' or 'ol'
    let inTable = false;
    let tableRows = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          currentListType === 'ol' ? (
            <ol key={elements.length} className="list-decimal list-outside ml-6 mb-4 space-y-2">
              {currentList.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {parseInline(item)}
                </li>
              ))}
            </ol>
          ) : (
            <ul key={elements.length} className="list-disc list-outside ml-6 mb-4 space-y-2">
              {currentList.map((item, idx) => (
                <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {parseInline(item)}
                </li>
              ))}
            </ul>
          )
        );
        currentList = [];
        currentListType = null;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const hasHeader = tableRows.length > 0;
        const headerRow = hasHeader ? tableRows[0] : null;
        const bodyRows = hasHeader ? tableRows.slice(1) : tableRows;

        elements.push(
          <div key={elements.length} className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
              {headerRow && (
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    {headerRow.map((cell, idx) => (
                      <th
                        key={idx}
                        className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left font-bold text-gray-900 dark:text-white"
                      >
                        {parseInline(cell.trim())}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {bodyRows.map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300"
                      >
                        {parseInline(cell.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();

      // Detect table row (contains |)
      if (trimmedLine.includes('|')) {
        flushList();

        // Skip separator lines (|---|---|)
        if (/^\|[\s-|]+\|$/.test(trimmedLine)) {
          return;
        }

        // Parse table row
        const cells = trimmedLine
          .split('|')
          .filter(cell => cell.trim())
          .map(cell => cell.trim());

        if (cells.length > 0) {
          tableRows.push(cells);
          inTable = true;
        }
        return;
      }

      // If we were in a table and hit non-table content, flush it
      if (inTable) {
        flushTable();
      }

      // Empty line
      if (!trimmedLine) {
        flushList();
        flushTable();
        // Add spacing
        if (elements.length > 0) {
          elements.push(<div key={`space-${lineIndex}`} className="h-2" />);
        }
        return;
      }

      // Numbered list (1. 2. 3.)
      if (/^\d+\.\s+/.test(trimmedLine)) {
        if (currentListType !== 'ol') {
          flushList();
          currentListType = 'ol';
        }
        const content = trimmedLine.replace(/^\d+\.\s+/, '');
        currentList.push(content);
        return;
      }

      // Bullet list (-, *)
      if (/^[-*]\s+/.test(trimmedLine)) {
        if (currentListType !== 'ul') {
          flushList();
          currentListType = 'ul';
        }
        const content = trimmedLine.replace(/^[-*]\s+/, '');
        currentList.push(content);
        return;
      }

      // If we have a list and hit non-list content, flush it
      flushList();

      // Subheading (text followed by colon or text ending with colon)
      if (/^[A-Z][^:]+:$/.test(trimmedLine) || /^\*\*[^*]+:\*\*/.test(trimmedLine)) {
        elements.push(
          <h4 key={lineIndex} className="text-lg font-bold text-gray-900 dark:text-white mt-6 mb-3">
            {parseInline(trimmedLine.replace(/[*:]/g, ''))}
          </h4>
        );
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={lineIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          {parseInline(trimmedLine)}
        </p>
      );
    });

    // Flush any remaining list or table
    flushList();
    flushTable();

    return elements;
  };

  // Parse inline formatting (bold, italic, code)
  const parseInline = (text) => {
    const parts = [];
    let currentText = text;
    let key = 0;

    // Pattern untuk bold **text**
    const boldPattern = /\*\*([^*]+)\*\*/g;
    // Pattern untuk inline code `text`
    const codePattern = /`([^`]+)`/g;

    // Split by bold and code patterns
    const segments = [];
    let lastIndex = 0;
    let match;

    // Process all patterns
    const allPattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;

    while ((match = allPattern.exec(currentText)) !== null) {
      // Add text before match
      if (match.index > lastIndex) {
        segments.push({
          type: 'text',
          content: currentText.substring(lastIndex, match.index)
        });
      }

      // Add matched content
      if (match[0].startsWith('**')) {
        segments.push({
          type: 'bold',
          content: match[0].replace(/\*\*/g, '')
        });
      } else if (match[0].startsWith('`')) {
        segments.push({
          type: 'code',
          content: match[0].replace(/`/g, '')
        });
      }

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < currentText.length) {
      segments.push({
        type: 'text',
        content: currentText.substring(lastIndex)
      });
    }

    // Convert segments to JSX
    return segments.map((segment, idx) => {
      if (segment.type === 'bold') {
        return <strong key={idx} className="font-bold text-gray-900 dark:text-white">{segment.content}</strong>;
      } else if (segment.type === 'code') {
        return (
          <code key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono text-blue-600 dark:text-blue-400">
            {segment.content}
          </code>
        );
      } else {
        return <span key={idx}>{segment.content}</span>;
      }
    });
  };

  return <div className="formatted-content">{parseContent(content)}</div>;
}
