import mongoose, { Schema, Document } from "mongoose";

export interface ContactEnquiryDocument extends Document {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  projectType?: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  message: string;
  createdAt: Date;
}

const ContactEnquirySchema = new Schema<ContactEnquiryDocument>({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 180 },
  phone: { type: String, required: true, trim: true, maxlength: 30 },
  company: { type: String, trim: true, maxlength: 150, default: "" },
  service: { type: String, required: true, trim: true, maxlength: 100 },
  projectType: { type: String, trim: true, maxlength: 150, default: "" },
  budget: { type: String, required: true, trim: true, maxlength: 60 },
  timeline: { type: String, required: true, trim: true, maxlength: 60 },
  preferredContact: { type: String, required: true, trim: true, maxlength: 30 },
  message: { type: String, required: true, trim: true, maxlength: 4000 },
  createdAt: { type: Date, default: Date.now },
});

export const ContactEnquiry = mongoose.model<ContactEnquiryDocument>(
  "ContactEnquiry",
  ContactEnquirySchema
);
