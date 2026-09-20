import type { ContactFormData } from "@/types";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://devcraft-backend-z0qk.onrender.com";

const CONTACT_ENDPOINT = `${API_BASE.replace(/\/api\/?$/, "")}/api/contact`;

export class ApiError extends Error {
  status: number;
  fieldErrors?: Record<string, string>;

  constructor(
    message: string,
    status: number,
    fieldErrors?: Record<string, string>
  ) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

export async function submitContactEnquiry(
  data: ContactFormData
): Promise<{ message: string }> {
  let response: Response;

  const controller = new AbortController();

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 10000);

  try {
    response = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
  } catch (err: any) {
    if (err?.name === "AbortError") {
      throw new ApiError(
        "Request timed out. Please check your connection and try again.",
        408
      );
    }

    throw new ApiError(
      "Network error. Check your connection and try again.",
      0
    );
  } finally {
    clearTimeout(timeoutId);
  }

  let payload: any = null;

  try {
    payload = await response.json();
  } catch {
    // Non-JSON response.
  }

  if (!response.ok) {
    if (response.status === 400 && payload?.errors) {
      throw new ApiError(
        payload.message || "Please check the form for errors.",
        400,
        payload.errors
      );
    }

    if (response.status === 429) {
      throw new ApiError(
        "Too many enquiries sent. Please try again in a little while.",
        429
      );
    }

    throw new ApiError(
      payload?.message || "Something went wrong. Please try again.",
      response.status || 500
    );
  }

  return payload;
}