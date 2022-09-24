/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didn't fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */
// https://gist.github.com/fijiwebdesign/3b0bf8e88ceef7518844

export const detectFont = () => {
  // a font will be compared against all the three default fonts.
  // and if it doesn't match all 3 then that font is not available.
  const baseFonts = ['monospace', 'sans-serif', 'serif']

  // we use m or w because these two characters take up the maximum width.
  // And we use a LLi so that the same matching fonts can get separated
  const testString = 'mmmmmmmmmmlli'

  // we test using 72px font size, we may use any size. I guess larger the better.
  const testSize = '72px'

  const h = document.body

  // create a SPAN in the document to get the width of the text we use to test
  const s = document.createElement('span')
  s.style.fontSize = testSize
  s.innerHTML = testString
  const defaultWidth: Record<string, number> = {}
  const defaultHeight: Record<string, number> = {}
  for (const font of baseFonts) {
    // get the default width for the three base fonts
    s.style.fontFamily = font
    h.append(s)
    defaultWidth[font] = s.offsetWidth // width for the default font
    defaultHeight[font] = s.offsetHeight // height for the default font
    s.remove()
  }

  return (fontName: string) => {
    for (const font of baseFonts) {
      s.style.fontFamily = `"${fontName}",${font}` // name of the font along with the base font for fallback.
      h.append(s)
      const matched =
        s.offsetWidth !== defaultWidth[font] ||
        s.offsetHeight !== defaultHeight[font]
      s.remove()
      if (matched) return true
    }
    return false
  }
}
