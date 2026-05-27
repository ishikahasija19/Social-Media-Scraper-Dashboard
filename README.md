# Social Media Scraper Dashboard

A clean, filterable dashboard prototype for monitoring passport-related social media posts from the last 24 hours. The app presents NLP-enriched posts with summaries, categories, sentiment, duplicate clustering, translation controls, search, filters, and export tools.

## Features

- Real-time style passport feed across major platforms such as Twitter/X, Facebook, Instagram, LinkedIn, YouTube, Reddit, and TikTok.
- Spam, bot, and gibberish filtering so only meaningful posts appear.
- NLP-style categorisation into topics including Application, Renewal, Appointments, Tatkal, Visa, Travel Issues, Government Announcements, Scams/Fraud, News, and Personal Experiences.
- Concise AI-style summary for every post.
- Clustered duplicate/similar posts so repeated topics appear as one card.
- One-click translation display for English, Hindi, Punjabi, Spanish, French, German, Arabic, Chinese, Russian, and Japanese.
- Search across post text, creator handles, summaries, regions, and translated content.
- Filters and sorting by platform, region, language, category, sentiment, engagement, and time.
- CSV and PDF export for the currently filtered view.
- Offline-friendly static frontend with no external package install required.

## Tech Stack

- HTML
- CSS
- Vanilla JavaScript
- Node.js static server for local preview

## Getting Started

Clone the repository and run the local server:

```bash
git clone https://github.com/ishikahasija19/Social-Media-Scraper-Dashboard.git
cd Social-Media-Scraper-Dashboard
node server.mjs
```

Open the dashboard:

```text
http://127.0.0.1:4173
```

You can also open `index.html` directly in a browser, but running the local server gives the most reliable preview.

## Project Structure

```text
.
├── app.js       # Dashboard data, filtering, NLP-style processing, charts, export logic
├── index.html   # Dashboard markup
├── server.mjs   # Tiny local static server
└── styles.css   # Responsive dashboard styling
```

## Notes on Real Scraping

This repository currently includes a working frontend prototype with realistic sample data. Live scraping from platforms such as X, Facebook, Instagram, LinkedIn, YouTube, Reddit, and TikTok usually requires official APIs, credentials, rate-limit handling, and compliance with each platform's terms.

To connect real data, replace the sample `posts` array in `app.js` with an API response from a backend service that:

- Pulls passport-related posts from approved platform APIs or data providers.
- Filters content to the last 24 hours.
- Runs language detection, spam/gibberish detection, translation, summarisation, classification, sentiment analysis, and duplicate clustering.
- Returns normalized post objects matching the dashboard schema.

## Dashboard Schema

Each post should follow this shape:

```js
{
  id: 1,
  platform: "Twitter/X",
  creator: "@passporthelpdesk",
  region: "India",
  language: "English",
  category: "Appointments",
  sentiment: "Neutral",
  engagement: 1840,
  minutesAgo: 22,
  title: "Post title",
  content: "Original post content",
  summary: "Short summary of the post",
  cluster: "Cluster name",
  duplicates: 18,
  spam: false,
  source: "https://example.com"
}
```

## Exports

The dashboard exports the currently filtered results:

- `passport-social-posts.csv`
- `passport-social-posts.pdf`

## License

This project is intended for assignment/demo use.
