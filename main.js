window.onload =() => {
  'use strict';
  
  if('serviceWorker' in navigator) {
    nagivator.serviceWorker.register('/sw.js');
    }
   }
