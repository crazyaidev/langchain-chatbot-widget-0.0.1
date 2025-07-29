/**
 * ChatBot Widget Embed Script
 * This script handles the loading and initialization of the chatbot widget
 */

(function() {
  'use strict';

  // Configuration from script attributes
  const getCurrentScript = () => {
    const scripts = document.querySelectorAll('script[data-chatbot-id]');
    return scripts[scripts.length - 1];
  };

  const script = getCurrentScript();
  const config = {
    chatbotId: script.getAttribute('data-chatbot-id'),
    apiUrl: script.getAttribute('data-api-url') || 'https://api.chatbotpro.com',
    theme: script.getAttribute('data-theme') || 'auto',
    autoOpen: script.getAttribute('data-auto-open') === 'true',
    language: script.getAttribute('data-language') || 'en',
    version: script.getAttribute('data-version') || 'latest',
  };

  // Validate required configuration
  if (!config.chatbotId) {
    console.error('ChatBot Widget: data-chatbot-id is required');
    return;
  }

  // CDN base URL (would be your actual CDN)
  const CDN_BASE = 'https://cdn.chatbotpro.com/widget';
  const version = config.version === 'latest' ? 'v1' : config.version;

  // Load widget assets
  const loadAssets = () => {
    // Load CSS
    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = `${CDN_BASE}/${version}/widget.css`;
    cssLink.crossOrigin = 'anonymous';
    document.head.appendChild(cssLink);

    // Load JavaScript
    const jsScript = document.createElement('script');
    jsScript.src = `${CDN_BASE}/${version}/widget.js`;
    jsScript.crossOrigin = 'anonymous';
    jsScript.async = true;
    
    jsScript.onload = () => {
      // Initialize widget when script is loaded
      if (window.ChatbotWidget) {
        window.ChatbotWidget.init({
          chatbotId: config.chatbotId,
          apiUrl: config.apiUrl,
          theme: config.theme,
          autoOpen: config.autoOpen,
          language: config.language,
          onReady: () => {
            console.log('ChatBot Widget loaded successfully');
            
            // Dispatch ready event
            window.dispatchEvent(new CustomEvent('chatbot-widget-ready', {
              detail: { chatbotId: config.chatbotId }
            }));
          },
          onError: (error) => {
            console.error('ChatBot Widget error:', error);
            
            // Dispatch error event
            window.dispatchEvent(new CustomEvent('chatbot-widget-error', {
              detail: { error, chatbotId: config.chatbotId }
            }));
          }
        });
      } else {
        console.error('ChatBot Widget failed to load');
      }
    };

    jsScript.onerror = () => {
      console.error('Failed to load ChatBot Widget script');
    };

    document.head.appendChild(jsScript);
  };

  // Check if widget is already loaded
  if (window.ChatbotWidget && window.ChatbotWidget.isInitialized()) {
    console.warn('ChatBot Widget is already initialized');
    return;
  }

  // Load assets when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAssets);
  } else {
    loadAssets();
  }

  // Expose configuration for debugging
  window.ChatbotWidgetConfig = config;
})();