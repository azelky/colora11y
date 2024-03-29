export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('🦊');

    // Initialize filter class
    let visibleOverlay = 'trichromacy';

    browser.runtime.onMessage.addListener(({ type, value }) => {
      if (type === 'msg_from_popup') {
        const classToActivate = value;
        // Remove active filter
        document.body.classList.remove(visibleOverlay);

        if (visibleOverlay === classToActivate) {
          // Toggle active filter
          document.body.classList.remove(visibleOverlay);
        } else {
          // Set new filter
          visibleOverlay = classToActivate;
          document.body.classList.toggle(visibleOverlay);
        }
      }

      return true;
    });

    /**
     * POC > add filters and styles on browser tab
     */
    function addSvgFilters() {
      document.body.innerHTML += `<style>
.trichromacy {
  filter: none;
}

.protanomaly {
  filter: url(#protanomaly);
}

.protanopia {
  filter: url(#protanopia);
}

.deuteranomaly {
  filter: url(#deuteranomaly);
}

.deuteranopia {
  filter: url(#deuteranopia);
}

.tritanomaly {
  filter: url(#tritanomaly);
}

.tritanopia {
  filter: url(#tritanopia);
}

.achromatomaly {
  filter: url(#achromatomaly);
}

.achromatopsia {
  filter: url(#achromatopsia);
}
</style>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    height="0"
    width="0"
  >
    <filter id="protanomaly">
      <feColorMatrix
        type="matrix"
        values="0.817, 0.183, 0,     0, 0
                0.333, 0.667, 0,     0, 0
                0,     0.125, 0.875, 0, 0
                0,     0,     0,     1, 0" />
    </filter>

    <filter id="protanopia">
      <feColorMatrix
        type="matrix"
        values="0.567, 0.433, 0,     0, 0
                0.558, 0.442, 0,     0, 0
                0,     0.242, 0.758, 0, 0
                0,     0,     0,     1, 0" />
    </filter>

    <filter id="deuteranomaly">
      <feColorMatrix
        type="matrix"
        values="0.8,   0.2,   0,     0, 0
                0.258, 0.742, 0,     0, 0
                0,     0.142, 0.858, 0, 0
                0,     0,     0,     1, 0" />
    </filter>

    <filter id="deuteranopia">
      <feColorMatrix
        type="matrix"
        values="0.625, 0.375, 0,   0, 0
                0.7,   0.3,   0,   0, 0
                0,     0.3,   0.7, 0, 0
                0,     0,     0,   1, 0" />
    </filter>

    <filter id="tritanomaly">
      <feColorMatrix
        type="matrix"
        values="0.967, 0.033, 0,     0, 0
                0,     0.733, 0.267, 0, 0
                0,     0.183, 0.817, 0, 0
                0,     0,     0,     1, 0" />
    </filter>

    <filter id="tritanopia">
      <feColorMatrix
        type="matrix"
        values="0.95, 0.05,  0,     0, 0
          0,    0.433, 0.567, 0, 0
          0,    0.475, 0.525, 0, 0
          0,    0,     0,     1, 0" />
    </filter>

    <filter id="achromatomaly">
      <feColorMatrix
        type="matrix"
        values="0.618, 0.320, 0.062, 0, 0
                0.163, 0.775, 0.062, 0, 0
                0.163, 0.320, 0.516, 0, 0
                0,     0,     0,     1, 0" />
    </filter>

    <filter id="achromatopsia">
      <feColorMatrix
        type="matrix"
        values=".299 .587 .114 0 0
                .299 .587 .114 0 0
                .299 .587 .114 0 0
                0    0    0    1 0" />
    </filter>
  </svg>`;
    }

    addSvgFilters();
  }
});
