# SM Marketing Group — Website

**Sinead Murphy | Fractional CMO | Dublin, Ireland**

Static HTML/CSS website for SM Marketing Group. Built for GitHub Pages deployment.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `about.html` | About page |
| `services.html` | Services page |
| `results.html` | Results and case studies |
| `contact.html` | Contact page |
| `style.css` | Shared stylesheet |
| `sitemap.xml` | XML sitemap for search engines |
| `robots.txt` | Search engine crawl instructions |
| `llms.txt` | AI engine readability file |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |
| `CNAME` | Custom domain configuration |

## Deployment

1. Push all files to the `main` branch of your GitHub repository
2. Go to Settings > Pages in your GitHub repository
3. Set Source to `Deploy from a branch`, branch `main`, folder `/` (root)
4. GitHub Pages will publish the site, typically within 60 seconds

## Custom domain

The CNAME file is set to `www.smmarketinggroup.com`. You will need to add the following DNS records with your domain registrar:

- **CNAME record**: `www` pointing to `yourusername.github.io`
- **A records** (for apex/root domain): point to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

## Updating content

- **Copy changes**: edit the relevant `.html` file, find the text, replace it, commit and push
- **Colours**: all brand colours are CSS custom properties in `style.css` under `:root`
- **Images**: base64-encoded images are embedded in the HTML. Replace with file references once assets are in a folder

## Contact

sinead@smmarketinggroup.com
