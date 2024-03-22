/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
async redirects() {
    return [
      {
        source: '/',
        destination: 'https://youtube.com/playlist?list=PLcp1KqeP2Wdm68qTEx9LsF4IhqLjmPaFV&si=o5vh3lJSkoYbH4y-',
        permanent: true,
      },
    ]
  }, 
  output: 'export',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig
