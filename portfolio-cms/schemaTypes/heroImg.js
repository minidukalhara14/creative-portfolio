// portfolio-cms/schemaTypes/hero.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroImg',
  title: 'Hero Image Update',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Upload Hero Image',
      type: 'image',
      options: {
        hotspot: true, 
      },
    }),
  ],
})