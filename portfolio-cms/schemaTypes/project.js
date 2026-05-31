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
      name: 'projectType',
      title: 'Project Type / Tag (Short Description)',
      description: 'Enter a short category or tech stack (e.g., UI/UX, Frontend, MERN)',
      type: 'string', 
    }),

    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text', 
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'projectUrl',
      title: 'Live Link (Optional)',
      type: 'url',
    }),
  ],
})