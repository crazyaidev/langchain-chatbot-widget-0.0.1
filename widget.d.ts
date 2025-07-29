
interface WidgetInitOptions {
    chatbotId: string;
    apiUrl: string;
    container?: string;
    autoOpen?: boolean;
    theme?: 'auto' | 'light' | 'dark';
    language?: string;
    customCSS?: string;
    onReady?: () => void;
    onMessage?: (message: any) => void;
    onError?: (error: Error) => void;
}
declare class ChatbotWidgetAPI {
    private initialized;
    private root;
    private container;
    init(options: WidgetInitOptions): void;
    destroy(): void;
    isInitialized(): boolean;
    getVersion(): string;
    sendEvent(eventType: string, data?: any): void;
    on(eventType: string, callback: (event: CustomEvent) => void): void;
    off(eventType: string, callback: (event: CustomEvent) => void): void;
}
declare const widgetAPI: ChatbotWidgetAPI;
declare global {
    interface Window {
        ChatbotWidget: ChatbotWidgetAPI;
    }
}
export default widgetAPI;
export { ChatbotWidgetAPI };
export type { WidgetInitOptions };
