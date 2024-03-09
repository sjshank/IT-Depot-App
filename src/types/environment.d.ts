declare namespace NodeJS {
  export interface ProcessEnv {
    readonly X_FRAME_OPTION: string;
    readonly X_CONTENT_TYPE_OPTION: string;

    readonly REFERRER_POLICY: string;
    readonly STRICT_TRANSPORT_SECURITY: string;
  }
}
