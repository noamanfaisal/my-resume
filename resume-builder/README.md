# Resume Builder

Generates a clean, white, Canadian-style `.docx` resume — separate from the
website, for actual job applications.

## Style

Left-aligned, black text on white, Calibri, no photo, no decoration — standard
ATS-friendly Canadian resume conventions. This is intentionally different from
the website's dark/technical theme; the website is your portfolio, this is
your submittable resume.

## Usage

```bash
cd resume-builder
npm install
npm run build
```

Output: `resume-builder/output/Noaman_Faisal_Bin_Badar_Resume.docx`

Convert to PDF however you prefer (Word, Google Docs, or LibreOffice:
`soffice --headless --convert-to pdf output/Noaman_Faisal_Bin_Badar_Resume.docx`).

## Customizing per job application

Currently the content is hardcoded directly in `build.js` (not yet wired to
`resume-data/*.md` the way the website is). To tailor for a specific job:

1. Copy `build.js` to something like `build-<company>.js`
2. Edit the `sectionHeading("Summary")` text and which projects appear under
   `sectionHeading("Selected Projects")` to match the role
3. Run `node build-<company>.js` (update the output filename inside the
   script too, so you don't overwrite previous versions)

## Known limitation

This does not yet read from `../resume-data/*.md` automatically like the
website does — content here is manually maintained. If this becomes a
recurring need, it's worth extending to import the same parsed JSON the
website uses, so both stay in sync automatically.
