export const initializeScreenshotPrevention = () => {
  // Prevent right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent keyboard shortcuts and PrintScreen
  document.addEventListener('keydown', (e) => {
    // Block ALL possible screenshot combinations
    if (
      // PrintScreen key
      e.key === 'PrintScreen' ||
      // Windows + Shift + S
      (e.key.toLowerCase() === 's' && e.shiftKey && (e.metaKey || e.ctrlKey)) ||
      // Windows snipping tool
      (e.key.toLowerCase() === 's' && e.shiftKey && e.getModifierState('Meta')) ||
      // Cmd + Shift + 3/4/5 (Mac)
      ((e.key === '3' || e.key === '4' || e.key === '5') && e.shiftKey && (e.metaKey || e.ctrlKey)) ||
      // Additional Mac screenshot combinations
      ((e.key === '3' || e.key === '4' || e.key === '5') && e.metaKey) ||
      // Windows + PrtScn
      (e.key === 'PrintScreen' && e.getModifierState('Meta'))
    ) {
      e.preventDefault();
      try {
        if (document.hasFocus()) {
          navigator.clipboard.writeText('');
        }
      } catch (error) {
        console.error('Failed to clear clipboard:', error);
      }
      return false;
    }
    
    // Block Dev Tools
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.metaKey && e.altKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'C') || 
        (e.metaKey && e.altKey && e.key === 'C') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.metaKey && e.altKey && e.key === 'J') ||
        e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Block printing
    if ((e.ctrlKey && e.key === 'p') || 
        (e.metaKey && e.key === 'p')) {
      e.preventDefault();
      return false;
    }
    
    // Block text selection
    if ((e.ctrlKey && e.key === 'a') || 
        (e.metaKey && e.key === 'a')) {
      e.preventDefault();
      return false;
    }
  });

  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Clear clipboard on copy attempt
  document.addEventListener('copy', (e) => {
    e.preventDefault();
    try {
      if (document.hasFocus()) {
        navigator.clipboard.writeText('');
      }
    } catch (error) {
      console.error('Failed to clear clipboard:', error);
    }
    return false;
  });

  // Block drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Block screen capture API
  if (navigator.mediaDevices) {
    navigator.mediaDevices.getDisplayMedia = () => {
      return Promise.reject(new Error('Screen capture is disabled'));
    };
  }

  // Enhanced CSS protection
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-tap-highlight-color: transparent !important;
    }
    
    body {
      -webkit-user-select: none !important;
      -webkit-touch-callout: none !important;
      -webkit-user-drag: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    
    img, video {
      pointer-events: none !important;
      -webkit-touch-callout: none !important;
      -webkit-user-drag: none !important;
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
      filter: blur(0);
      transform: translateZ(0);
    }
    
    video::-webkit-media-controls-enclosure,
    video::-webkit-media-controls {
      display: none !important;
    }
    
    @media print {
      body { display: none !important; }
      html { display: none !important; }
    }
  `;
  document.head.appendChild(style);

  // Watch for visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (window.getSelection) {
        window.getSelection()?.removeAllRanges();
      }
      try {
        if (document.hasFocus()) {
          navigator.clipboard.writeText('');
        }
      } catch (error) {
        console.error('Failed to clear clipboard:', error);
      }
    }
  });

  // Block mobile screenshot attempts
  window.addEventListener('blur', () => {
    if (document.hasFocus()) {
      try {
        navigator.clipboard.writeText('');
      } catch (error) {
        console.error('Failed to clear clipboard:', error);
      }
    }
  });
};
