// portfolio-cms/schemaTypes/reviews.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Client Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation / Company',
      description: 'e.g., CEO of TechCorp, Product Manager',
      type: 'string',
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Photo (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})