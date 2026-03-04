export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export interface EmailResponseData {
  recipientEmail: string;
  timestamp: string;
}

export interface ApiResponse<T = any> {
  data: T | null;
  message: string;
  error: string | null;
  statusCode: number;
}
