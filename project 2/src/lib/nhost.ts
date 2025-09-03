import { NhostClient } from '@nhost/nhost-js';

export const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN || 'your-subdomain',
  region: import.meta.env.VITE_NHOST_REGION || 'your-region',
});