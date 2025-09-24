# A&J Mobile Detailing Services - Deployment Guide

## Deploy to Vercel

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and configure build settings

3. **Environment Variables**
   - No environment variables needed for basic deployment
   - If you want to use Formspree for contact forms, add `NEXT_PUBLIC_FORMSPREE_ID`

## Customization

### Update Contact Information
- Edit `components/contact.tsx` to update phone, email, and service areas
- Update `components/footer.tsx` with correct contact details
- Modify `app/layout.tsx` metadata and JSON-LD schema

### Replace Logo
- Replace the logo URL in `components/navbar.tsx` and `components/footer.tsx`
- Update the logo reference in `public/manifest.json`

### Connect Formspree (Optional)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace the mailto functionality in `components/contact.tsx` with Formspree integration

### Update Images
- Replace placeholder images with actual photos
- Optimize images for web (WebP format recommended)
- Update image queries in components to match your actual services

## SEO Optimization

### Update Metadata
- Edit `app/layout.tsx` to update title, description, and keywords
- Update JSON-LD schema with accurate business information
- Replace placeholder URLs in `public/sitemap.xml`

### Google Business Profile
- Claim your Google Business Profile
- Add consistent NAP (Name, Address, Phone) information
- Upload high-quality photos of your work

## Performance Tips

- Images are automatically optimized by Next.js
- The site uses modern CSS with Tailwind for fast loading
- All animations respect `prefers-reduced-motion`
- Mobile-first responsive design

## Support

For technical support with deployment, contact Vercel support or refer to the [Next.js documentation](https://nextjs.org/docs).
