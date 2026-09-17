import request from "supertest";

// Mock the Mongoose model so tests exercise validation, controller, and
// service logic without needing a real MongoDB connection.
jest.mock("../src/models/contact.model", () => ({
  ContactEnquiry: {
    create: jest.fn().mockResolvedValue({ _id: "mock-id" }),
  },
}));

import { createApp } from "../src/app";
import { ContactEnquiry } from "../src/models/contact.model";

process.env.NODE_ENV = "test";
const app = createApp();

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

beforeEach(() => {
  jest.clearAllMocks();
});

describe("POST /api/contact", () => {
  it("201s and stores a valid enquiry", async () => {
    const res = await request(app).post("/api/contact").send(validPayload);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(ContactEnquiry.create).toHaveBeenCalledTimes(1);
    expect((ContactEnquiry.create as jest.Mock).mock.calls[0][0].email).toBe("jane@example.com");
  });

  it("400s when required fields are missing", async () => {
    const res = await request(app).post("/api/contact").send({});

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.errors).toBeDefined();
    expect(res.body.errors.name).toBeDefined();
    expect(res.body.errors.email).toBeDefined();
    expect(ContactEnquiry.create).not.toHaveBeenCalled();
  });

  it("400s on an invalid email", async () => {
    const res = await request(app)
      .post("/api/contact")
      .send({ ...validPayload, email: "not-an-email" });

    expect(res.status).toBe(400);
    expect(res.body.errors.email).toBeDefined();
  });

  it("400s on an invalid phone number", async () => {
    const res = await request(app)
      .post("/api/contact")
      .send({ ...validPayload, phone: "abc" });

    expect(res.status).toBe(400);
    expect(res.body.errors.phone).toBeDefined();
  });

  it("400s on an invalid service value", async () => {
    const res = await request(app)
      .post("/api/contact")
      .send({ ...validPayload, service: "Not A Real Service" });

    expect(res.status).toBe(400);
    expect(res.body.errors.service).toBeDefined();
  });

  it("400s on an invalid budget value", async () => {
    const res = await request(app)
      .post("/api/contact")
      .send({ ...validPayload, budget: "a billion dollars" });

    expect(res.status).toBe(400);
    expect(res.body.errors.budget).toBeDefined();
  });

  it("400s on an invalid request body shape", async () => {
    const res = await request(app).post("/api/contact").send({ name: 12345 });

    expect(res.status).toBe(400);
  });

  it("500s and returns a safe message when the database write fails", async () => {
    (ContactEnquiry.create as jest.Mock).mockRejectedValueOnce(new Error("connection refused at mongodb://internal-host:27017"));

    const res = await request(app).post("/api/contact").send(validPayload);

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
    expect(JSON.stringify(res.body)).not.toMatch(/mongodb:\/\//i);
  });

  it("does not leak internal error details in a validation error response", async () => {
    const res = await request(app).post("/api/contact").send({});
    const body = JSON.stringify(res.body);

    expect(body).not.toMatch(/mongo/i);
    expect(body).not.toMatch(/stack/i);
  });
});

describe("GET /api/health", () => {
  it("returns ok", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
  });
});

describe("Unknown routes", () => {
  it("404s", async () => {
    const res = await request(app).get("/api/does-not-exist");
    expect(res.status).toBe(404);
  });
});
