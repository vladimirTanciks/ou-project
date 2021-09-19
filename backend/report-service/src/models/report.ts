import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a new Report
interface ReportAttrs {
  location: string;
  image: string;
  size: string;
  type: string;
  details: string;
  user: string;
}

// And interface that describes the properties
// that a Report Document has
interface ReportDoc extends mongoose.Document {
  location: string;
  image: string;
  size: string;
  type: string;
  details: string;
  user: string;
}

// An interface that describes the properties
// that User Model has
interface ReportModel extends mongoose.Model<ReportDoc> {
  build(attrs: ReportAttrs): ReportDoc;
}

const reportSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: false,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

reportSchema.statics.build = (attrs: ReportAttrs) => new Report(attrs);

const Report = mongoose.model<ReportDoc, ReportModel>("Report", reportSchema);

export { Report };
