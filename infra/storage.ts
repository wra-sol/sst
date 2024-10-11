export const bucket = new sst.aws.Bucket("Uploads");

export const table = new sst.aws.Dynamo("Contacts", {
  fields: {
    id: "number",
    name: "string",
    phone: "string",
    streetAddress: "string",
    city: "string",
    region: "string",
    postal: "string",
  },
  primaryIndex: { hashKey: "name", rangeKey: "id" },
  globalIndexes: {
    byPhone: { hashKey: "phone" },
    byCity: { hashKey: "city" },
    byRegion: { hashKey: "region" },
    byPostal: { hashKey: "postal" },
    byStreet:{hashKey:"streetAddress"}
  },
});
