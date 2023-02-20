import { css } from '@emotion/react';

import { GrafanaTheme2 } from '@grafana/data';

export function getCustomStyles(theme: GrafanaTheme2) {
  return css`
    .css-1gmyc7n {
      background: none !important;
    }
    .css-xcflq3,
    .css-1vgnjsk,
    .css-pfdq40 {
      display: none !important;
    }
  `;
}
