const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

exports.handler = async function(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Use POST to generate a weekly review." });
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return jsonResponse(500, {
      error: "AI review is not configured yet. Add OPENAI_API_KEY in Netlify environment variables, then redeploy."
    });
  }

  let body;

  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, { error: "The weekly review request was not valid JSON." });
  }

  const prompt = String(body.prompt || "").trim();
  const weeklyData = body.weeklyData || {};

  if (!prompt) {
    return jsonResponse(400, { error: "No weekly dashboard data was provided for review." });
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.35,
        max_tokens: 900,
        messages: [
          {
            role: "system",
            content: "You are a disciplined, faith-friendly self-improvement coach. You give honest but encouraging feedback. You help the user grow physically, mentally, spiritually, academically, and financially. Be specific, practical, and direct. Do not flatter. Do not be vague. Do not shame the user. Avoid medical, legal, financial, or extreme claims."
          },
          {
            role: "user",
            content: `${prompt}

Return structured text with exactly these sections:
1. Weekly Summary
2. Wins
3. Weak Spots
4. Pattern Detected
5. Next Week's Battle Plan
6. Top 3 Priorities

Keep the tone disciplined, honest, masculine, and faith-friendly, but not cheesy.`
          }
        ]
      })
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return jsonResponse(response.status, {
        error: result.error && result.error.message
          ? result.error.message
          : "The AI provider could not generate a weekly review right now."
      });
    }

    const review = result.choices
      && result.choices[0]
      && result.choices[0].message
      && result.choices[0].message.content;

    if (!review) {
      return jsonResponse(502, { error: "The AI provider returned an empty weekly review." });
    }

    return jsonResponse(200, { review });
  } catch {
    return jsonResponse(502, {
      error: "AI review could not connect right now. Use Copy AI Prompt as a fallback."
    });
  }
};

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(body)
  };
}
