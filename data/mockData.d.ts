import { ChatbotConfig, AIForm, Message } from '../types/widget.types';

export declare const mockChatbotConfigs: Record<string, ChatbotConfig>;
export declare const mockForms: Record<string, AIForm>;
export declare const mockResponses: Record<string, string[]>;
export declare const mockQuickReplies: {
    text: string;
    value: string;
    icon: string;
}[];
export declare const mockSessions: Record<string, any>;
export declare const mockMessageHistory: Record<string, Message[]>;
export declare const getRandomResponse: (category: keyof typeof mockResponses) => string;
export declare const generateSessionId: () => string;
export declare const simulateTypingDelay: () => Promise<void>;
export declare const mockApiResponses: {
    createSession: (chatbotId: string) => {
        id: string;
        chatbotId: string;
        userId: string;
        messages: any[];
        status: "active";
        metadata: {
            userAgent: string;
            referrer: string;
            startTime: Date;
            lastActivity: Date;
        };
    };
    sendMessage: (sessionId: string, content: string) => {
        id: string;
        type: "bot";
        content: string;
        timestamp: Date;
        metadata: {
            quickReplies: {
                text: string;
                value: string;
                icon: string;
            }[];
        };
    };
};
export declare const mockValidationResponses: {
    email: {
        'test@gmail.com': {
            isValid: boolean;
            suggestion: any;
            confidence: number;
        };
        'test@gmai.com': {
            isValid: boolean;
            suggestion: string;
            confidence: number;
        };
        'invalid-email': {
            isValid: boolean;
            suggestion: string;
            confidence: number;
        };
    };
    name: {
        'John Doe': {
            isValid: boolean;
            suggestion: any;
            confidence: number;
        };
        J: {
            isValid: boolean;
            suggestion: string;
            confidence: number;
        };
    };
};
export declare const mockOCRResponses: {
    success: {
        success: boolean;
        extractedText: string;
        confidence: number;
        detectedFields: {
            name: string;
            email: string;
            phone: string;
        };
    };
    failure: {
        success: boolean;
        error: string;
    };
};
export declare const mockAnalyticsEvents: any[];
export declare const addMockAnalyticsEvent: (event: any) => void;
