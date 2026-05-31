// portfolio-cms/schemaTypes/hero.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'services',
  title: 'My-Services',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceTitle',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceDescription',
      title: 'Service Description',
      type: 'text',
    }),
        defineField({
        name: 'serviceIcon',
        title: 'Service Icon',
        type: 'image',
        options: {
            hotspot: true,
        },
        }),
  ],
})
