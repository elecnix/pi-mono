import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

/**
 * Handles transient provider errors during streaming by detecting retryable errors.
 * Matches patterns like: over capacity, rate limit, 500/502/503/504 errors, timeout, terminated.
 *
 * Note: This extension demonstrates error handling patterns. The agent automatically
 * retries transient errors via the _isRetryableError check in agent-session.ts.
 */
export default function (pi: ExtensionAPI) {
	const FALLBACK_MODELS = ["gpt-4.1", "claude-sonnet-4-20250514", "gemini-2.5-flash"];
	const RETRYABLE_PATTERN =
		/over capacity|rate limit|too many requests|429|500|502|503|504|service unavailable|server error|internal error|connection error|connection refused|other side closed|fetch failed|upstream connect|reset before headers|terminated|retry delay exceeded|provider returned error/i;

	// Detect when streaming ends after potential provider errors
	pi.on("agent_end", async () => {
		// This event fires after each agent loop ends
		// Provider errors are handled automatically by the retry logic in agent-session.ts
		// This extension is a placeholder for custom handling if needed
	});
}
