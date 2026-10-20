import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { afterEach, describe, expect, it } from 'vitest';

import { getPdfWorkerSrc } from '../src/lib/pdfWorker';

const setRootPath = (rootPath: string) => {
  const meta = document.createElement('meta');
  meta.setAttribute('property', 'og:root_path');
  meta.setAttribute('content', rootPath);
  document.head.appendChild(meta);
};

describe('getPdfWorkerSrc', () => {
  afterEach(() => {
    document
      .querySelectorAll('meta[property="og:root_path"]')
      .forEach((meta) => meta.remove());
  });

  it('uses the bundled worker URL when the app is served at the root', () => {
    expect(getPdfWorkerSrc()).toBe(workerUrl);
  });

  it('prefixes the bundled worker URL with the app root path', () => {
    setRootPath('/spec_bot');

    expect(getPdfWorkerSrc()).toBe(`/spec_bot${workerUrl}`);
  });
});
