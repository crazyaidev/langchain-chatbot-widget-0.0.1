import { AnalyticsEvent } from '../types/widget.types';

declare class AnalyticsService {
    private apiUrl;
    private enabled;
    private queue;
    private isOnline;
    constructor();
    init(apiUrl: string, enabled?: boolean): void;
    send(event: AnalyticsEvent): Promise<void>;
    private sendEvent;
    private flushQueue;
    trackPageView(chatbotId: string, tenantId: string): void;
    trackWidgetLoad(chatbotId: string, tenantId: string, loadTime: number): void;
    trackEngagement(chatbotId: string, tenantId: string, sessionId: string, action: string): void;
    trackConversion(chatbotId: string, tenantId: string, sessionId: string, conversionType: string, value?: number): void;
    private generateSessionId;
}
declare const analytics: AnalyticsService;
export declare const sendAnalyticsEvent: (event: AnalyticsEvent) => void;
export { analytics };
export declare const trackChatStart: (chatbotId: string, tenantId: string, sessionId: string) => void;
export declare const trackMessageSent: (chatbotId: string, tenantId: string, sessionId: string, messageLength: number) => void;
export declare const trackFormStart: (chatbotId: string, tenantId: string, sessionId: string, formId: string) => void;
export declare const trackFormComplete: (chatbotId: string, tenantId: string, sessionId: string, formId: string, completionTime: number) => void;
export declare const trackSatisfactionRating: (chatbotId: string, tenantId: string, sessionId: string, rating: number) => void;
