import getRouterBasename from '@/lib/router';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

/**
 * Resolve the pdf.js worker URL for deployments served under a root path.
 *
 * Vite bakes `workerUrl` into the bundle as an origin-absolute path such as
 * `/assets/pdf.worker.min-<hash>.mjs`. Chainlit serves its assets under
 * `CHAINLIT_ROOT_PATH`, so the worker has to be requested from the same prefix.
 */
export const getPdfWorkerSrc = () => `${getRouterBasename()}${workerUrl}`;
