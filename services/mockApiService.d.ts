import { ChatbotConfig, AIForm, Message, ChatSession, ConversationalForm } from '../types/widget.types';

declare class MockApiService {
    private sessions;
    private formContexts;
    getChatbotConfig(chatbotId: string): Promise<ChatbotConfig>;
    createChatSession(chatbotId: string): Promise<ChatSession>;
    sendMessage(sessionId: string, content: string): Promise<Message>;
    getMessageHistory(sessionId: string): Promise<Message[]>;
    escalateToAgent(sessionId: string): Promise<void>;
    getForm(formId: string): Promise<AIForm>;
    startForm(sessionId: string, formId: string): Promise<ConversationalForm>;
    submitFormField(sessionId: string, fieldId: string, value: any): Promise<{
        isValid: boolean;
        message?: string;
    }>;
    submitForm(sessionId: string): Promise<{
        success: boolean;
        submissionId?: string;
    }>;
    smartValidateField(fieldType: string, value: any): Promise<{
        isValid: boolean;
        suggestion?: string;
        confidence: number;
    }>;
    processOCR(file: File): Promise<{
        success: boolean;
        extractedText?: string;
        confidence?: number;
        detectedFields?: Record<string, string>;
        error?: string;
    }>;
    sendAnalyticsEvent(event: any): Promise<void>;
    createMockWebSocket(sessionId: string): MockWebSocket;
    private simulateNetworkDelay;
    private validateFormField;
}
declare class MockWebSocket {
    private sessionId;
    private apiService;
    private listeners;
    private isConnected;
    constructor(sessionId: string, apiService: MockApiService);
    addEventListener(event: string, callback: Function): void;
    removeEventListener(event: string, callback: Function): void;
    send(data: string): void;
    close(): void;
    private handleMessage;
    private emit;
}
export declare const mockApiService: MockApiService;
export { MockWebSocket };
