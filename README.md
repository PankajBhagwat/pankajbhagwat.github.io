# Pankaj Bhagwat — Academic Website

A single-page academic site: plain HTML/CSS/JS, no build step, no framework,
no dependencies to keep updated. Everything renders from **`data.js`** —
that's the only file you'll normally touch.

## Files
```
index.html    page structure (rarely needs edits)
style.css     colors, type, layout (edit to restyle)
data.js       ← YOUR CONTENT — publications, talks, awards, etc.
script.js     turns data.js into HTML (rarely needs edits)
assets/       put your CV PDF and a headshot here
```

## 1. Try it locally
Just double-click `index.html`, or from a terminal in this folder:
```bash
python3 -m http.server 8000
```
then open `http://localhost:8000`.

## 2. Update your content
Open `data.js` in any text editor. To add a new publication, copy an existing
object inside the `PUBLICATIONS` array and edit the fields — the page
re-sorts by year and re-tags automatically. Same pattern for `NEWS`,
`PRESENTATIONS`, `AWARDS`, etc. You do not need to touch HTML or CSS for
routine updates.

Before you publish, replace these placeholders in `data.js`:
- `links.scholar`, `links.github`, `links.orcid`, `links.linkedin`
- Add your real CV as `assets/Pankaj_Bhagwat_CV.pdf` (or update `links.cv`)

### Lab members
Each lab tab already contains one example member and a placeholder photograph.
The placeholder files are:

```text
assets/lab/postdoc-01.jpg
assets/lab/phd-01.jpg
assets/lab/masters-01.jpg
assets/lab/undergrad-01.jpg
```

Replace any of these files with your own photograph **using the same filename**;
no code change is needed for the image. Edit the corresponding `name`, `role`,
`topic`, and optional `website` fields in `LAB_MEMBERS`. Copy an existing object
when you need additional members.

### Course webpages
Teaching is separated into Term Instructor and Teaching Assistant tabs. To
link a course page, add a `page` field to that course in `TEACHING`, for example:
```js
{ course: "STAT 151 — Introduction to Applied Statistics I",
  place: "University of Alberta", term: "Fall 2025",
  role: "Term Instructor", page: "courses/stat-151.html" }
```

### Photo gallery
Six ready-made placeholders are included:

```text
assets/gallery/gallery-01.jpg
assets/gallery/gallery-02.jpg
assets/gallery/gallery-03.jpg
assets/gallery/gallery-04.jpg
assets/gallery/gallery-05.jpg
assets/gallery/gallery-06.jpg
```

Replace them with your photographs while keeping the filenames. The gallery will
update automatically. Change the matching `alt` and `caption` fields in `GALLERY`
inside `data.js`. You may remove unused entries or copy an entry to add more photos.
For the best crop, use landscape images close to a 4:3 aspect ratio.

**Note:** I left your five references off the public page on purpose —
publishing colleagues' direct phone numbers/emails invites scraping and
spam. If you want a references section, I'd suggest names + affiliations
only, with "contact details on request," or a private page you only send
to search committees.

**Note on the file name:** the CV you uploaded is titled
`..._CV_UManitoba.pdf` but the content lists University of Alberta
throughout — worth double-checking you attached the right version before
this goes live.

## 3. Host it for free
**GitHub Pages** is the standard choice for academic sites — free,
reliable, and works with a custom domain if you want one later.

1. Create a GitHub account (if you don't have one) and a new repository,
   e.g. `pankaj-bhagwat.github.io` (using exactly `<username>.github.io`
   gives you a live site at that URL with zero configuration).
2. Upload these files (`index.html`, `style.css`, `data.js`, `script.js`,
   `assets/`) to the repository — drag-and-drop works fine on
   github.com, no command line needed.
3. Go to **Settings → Pages**, set source to the `main` branch, root
   folder, and save.
4. Your site is live at `https://<username>.github.io` within a minute or
   two. Every time you edit `data.js` on GitHub and commit, the live site
   updates automatically.

**Alternatives**, if you'd rather not use GitHub: **Netlify** or
**Cloudflare Pages** — both free, both let you drag-and-drop this same
folder into a browser to deploy, no git required.

### Custom domain (optional)
Buy a domain (e.g. `pankajbhagwat.com`, ~$10–15/year from Namecheap,
Cloudflare, or Google Domains) and point it at GitHub Pages by adding a
`CNAME` file and updating your domain's DNS — GitHub's docs walk through
this in about 10 minutes. Not required, but reads well on a CV/email
signature.

## 4. Add traffic tracking (free)
Pick one:

- **GoatCounter** (recommended) — free for personal sites, no cookie
  banner required under most privacy laws since it doesn't track
  individuals. Sign up at goatcounter.com, then uncomment the
  GoatCounter `<script>` tag near the top of `index.html` and put in
  your code.
- **Cloudflare Web Analytics** — free, also privacy-friendly, useful if
  you're already using Cloudflare for your domain.
- **Google Analytics** — free, more powerful/familiar dashboard, but
  cookie-based, so technically requires a cookie-consent notice for EU
  visitors. Uncomment the GA snippet in `index.html` and add your
  measurement ID.

Either way, all your dashboard needs is that one script tag — nothing
else in the site changes.

## 5. Nice-to-have upgrades for later
- **Google Scholar badge**: link your Scholar profile (already wired up)
  so citation counts stay current without you maintaining them here.
- **BibTeX buttons**: add a `bibtex` field to each publication in
  `data.js` and a small "cite" button/modal — handy for readers.
- **RSS feed for News**: a tiny `feed.xml` generated from the `NEWS`
  array lets people subscribe instead of checking back.
- **Structured data**: add a `Person` JSON-LD block to `index.html` so
  Google can show a knowledge panel with your affiliation and links.
- **Sitemap + robots.txt**: trivial for a one-page site, but worth it
  for SEO once you add more pages (e.g. a dedicated CV or blog page).
- **Print stylesheet**: a `@media print` rule so visitors can print a
  clean version of the page without nav bars/backgrounds.
- **Dark mode**: already built in (the ◐ button, top right) — remove it
  from `index.html`/`script.js` if you'd rather not offer it.

## Design notes
Paper-white background, ink-black text, an indigo primary and a muted
ochre accent — deliberately avoiding the generic "cream + terracotta" and
"dark + neon" looks that AI-generated sites tend to default to. The hero
graphic is a stylized conformal-prediction interval, a nod to your own
research area rather than a generic decorative shape. Publication
numbering, the appointments timeline, and talk ordering are all genuine
chronological sequences, so the numbering/markers carry real information
rather than being decorative.


## Lab section
The lab section is controlled by `LAB` and the flat `LAB_MEMBERS` array in `data.js`.

- Edit `LAB.name`, `LAB.intro`, and `LAB.joinNote` to update the group text.
- Add one object to `LAB_MEMBERS` for each person.
- Put portraits in `assets/lab/` and set each person's `photo` path.
- If an image is missing or the path is incorrect, the site automatically displays the person's initials rather than a broken image.

The included replaceable filenames are:

```text
assets/lab/pankaj-bhagwat.jpg
assets/lab/zhixian-yang.jpg
assets/lab/yihao-wang.jpg
assets/lab/jiamei-wu.jpg
assets/lab/aditya-chilwal.jpg
```

Replace a placeholder with the corresponding portrait while keeping its filename unchanged. Square photographs work best.
