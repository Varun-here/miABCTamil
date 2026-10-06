declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    ANTHROPIC_API_KEY?: string;
    ANTHROPIC_MODEL?: string;
    ANTHROPIC_WORKSPACE_ID?: string;
    BUCKET?: R2Bucket;
  }
}
