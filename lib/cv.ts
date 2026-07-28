// The certified copy. One source of truth for the header, the cover and the
// mobile index.
//
// There is a single CV and it is written in English only, so both locales
// serve the same file; the Romanian labels mark the language so a Romanian
// reader is not surprised by what opens.
export const CV_HREF = "/cv/CV_BejanValentin_2026_Summer.pdf";

export function cvHref(_locale?: string) {
  return CV_HREF;
}
