export type AppConfig = {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  clientDomain?: string;
  serverDomain: string;
  apiPrefix: string;
  assetsPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
  uploadFolder: string;
};

export type AuthConfig = {
  secret?: string;
  refreshSecret?: string;
  expires?: string;
  refreshExpires?: string;
};

export type FileConfig = {
  uploadFolder: string;
  maxFileSize: number;
};

export type GoogleConfig = {
  clientId?: string;
  clientSecret?: string;
};

export type AllConfigType = {
  app: AppConfig;
  auth: AuthConfig;
  file: FileConfig;
  google: GoogleConfig;
};
