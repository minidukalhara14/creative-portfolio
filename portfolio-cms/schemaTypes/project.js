// portfolio-cms/schemaTypes/project.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'My Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // ෆොටෝ එක ලස්සනට Crop කරගන්න
      },
    }),
    defineField({
      name: 'projectUrl',
      title: 'Live Link (Optional)',
      type: 'url',
    }),
  ],
})