// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import deskStructure from './src/deskStructure';
import { Logo } from './logo/gymtom-logo';

/* Plugins */
import { muxInput } from 'sanity-plugin-mux-input';


export default defineConfig({
  title: "GymTom Admin",
  projectId: "s1k3b826",
  dataset: "production",
  plugins: [deskTool({
    structure: deskStructure,
  }),muxInput()],
  schema: {
    types: schemas,
  },
  studio: {
    components: {
      logo: Logo
    }
  }
});
