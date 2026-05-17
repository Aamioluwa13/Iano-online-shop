// Brand configuration - easily update logo and name here
const brand = {
  name: 'Iano',
  tagline: '',
  // Add your logo from public/images/ folder
  // Recommended logo size: 150x50 px (width x height) or any aspect ratio with max-width: 150px
  logo: '/images/logo.png', // Change this to your logo file (e.g., '/images/logo.png', '/images/logo.svg')
  
  // Currency settings
  currency: {
    primary: 'USD', // 'USD' or 'NGN'
    showBoth: true, // Display both currencies
    nairaToUsd: 1550 // Exchange rate: 1 USD = 1550 NGN (update as needed)
  }
}

export default brand
