import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary';
import deskStructure from './src/deskStructure';
import schemas from './schemas/schema';
export default defineConfig({
  title: "GymTom Admin",
  projectId: "s1k3b826",
  dataset: "production",
  plugins: [deskTool({ structure: deskStructure }), cloudinarySchemaPlugin()],
  schema: {
    types: schemas,
  },
});