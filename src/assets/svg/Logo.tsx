export default function Logo() {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 500 120" width="100%" height="100%">
  <defs>
    
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0066FF" />
      <stop offset="100%" stop-color="#003399" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF9900" />
      <stop offset="100%" stop-color="#FF6600" />
    </linearGradient>
  </defs>


  <g transform="translate(10, 10)">
  
    <circle cx="50" cy="50" r="30" fill="none" stroke="url(#brandGrad)" stroke-width="8" />
    
    <path d="M50,12 L50,22 M50,78 L50,88 M12,50 L22,50 M78,50 L88,50 M23,23 L30,30 M70,70 L77,77 M23,77 L30,70 M70,23 L77,30" 
          stroke="url(#brandGrad)" stroke-width="8" stroke-linecap="round" />
    
    
    <path d="M25,75 L55,45 M50,40 L60,50" stroke="url(#accentGrad)" stroke-width="10" stroke-linecap="round" />

    <path d="M52,32 C50,35 52,42 58,44 L68,34 C64,28 58,26 55,29 Z" fill="url(#accentGrad)" />
  </g>

 
  <text x="120" y="75" font-family="Arial, sans-serif" font-weight="900" font-size="54" fill="url(#brandGrad)" letter-spacing="-1">FixIt</text>
  

  <text x="245" y="75" font-family="Arial, sans-serif" font-weight="900" font-style="italic" font-size="54" fill="url(#accentGrad)" letter-spacing="-1">Now</text>

  <text x="122" y="100" font-family="Arial, sans-serif" font-weight="600" font-size="14" fill="#666666" letter-spacing="4">FAST &amp; RELIABLE REPAIR</text>
</svg>

  );
}
