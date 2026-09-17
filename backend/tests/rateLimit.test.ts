import request from "supertest";

jest.mock("../src/models/contact.model", () => ({
  ContactEnquiry: {
    create: jest.fn().mockResolvedValue({ _id: "mock-id" }),
  },
}));

process.env.NODE_ENV = "test";
process.env.RATE_LIMIT_MAX = "3";
process.env.RATE_LIMIT_WINDOW_MS = "60000";

const validPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+91 98765 43210",
  company: "Acme Co",
  service: "Business Website",
  projectType: "New build",
  budget: "₹5,000 – ₹10,000",
  timeline: "1–2 Weeks",
  preferredContact: "Email",
  message: "We need a new company website with a contact form and basic SEO.",
};

describe("Rate limiting on POST /api/contact", () => {
  it("blocks requests after the configured max is exceeded", async () => {
    jest.resetModules();
    const { createApp: freshCreateApp } = await import("../src/app");
    const app = freshCreateApp();

    let lastStatus = 0;
    for (let i = 0; i < 5; i++) {
      const res = await request(app).post("/api/contact").send(validPayload);
      lastStatus = res.status;
    }

    expect(lastStatus).toBe(429);
  });
});
