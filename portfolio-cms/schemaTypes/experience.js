// portfolio-cms/schemaTypes/hero.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'My-Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'experienceTitle',
      title: 'Experience Title',
      type: 'string',
    }),
    defineField({
      name: 'experienceDescription',
      title: 'Experience Description',
      type: 'text',
    }),
        defineField({
        name: 'experienceTimeframe',
        title: 'Experience Timeframe',
        type: 'string',
        }),
    

  ],
})
