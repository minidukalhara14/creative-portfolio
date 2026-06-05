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
  name: 'images', // බහුවචනයක් (Plural) පාවිච්චි කිරීම වඩාත් සුදුසුයි
  title: 'Project Images',
  type: 'array', // මුලින්ම type එක array එකක් විදිහට දෙනවා
  of: [
    {
      type: 'image', // Array එක ඇතුලට දාන්නේ images කියලා කියනවා
      options: {
        hotspot: true, // හැම image එකකටම hotspot option එක මෙතනින් ලැබෙනවා
      },
    },
  ],
  options: {
    layout: 'grid', // සැනිටි ඩෑෂ්බෝඩ් එකේ ඉමේජස් ටික ග්‍රිඩ් එකක් වගේ ලස්සනට පේන්න මේක දාන්න පුළුවන් (Optional)
  },

    }),
    defineField({
      name: 'projectUrl',
      title: 'Live Link (Optional)',
      type: 'url',
    }),
  ],
})