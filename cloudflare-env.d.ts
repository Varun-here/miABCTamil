declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    ANTHROPIC_API_KEY?: string;
    ANTHROPIC_MODEL?: string;
    BUCKET?: R2Bucket;
  }
}
