import {
  about,
  activities,
  contact,
  getAge,
  identity,
  resume,
  skills,
  techHighlights,
} from './profile';
import { projects } from './projects';

const sections: Record<string, () => string> = {
  getPresentation: () =>
    `${identity.name}, ${getAge()} years old, ${identity.location}\n${about.intro}\nFocus areas: ${about.focusAreas.join(', ')}`,
  getProjects: () =>
    projects
      .map(
        (p) =>
          `- ${p.title} (${p.date}): ${p.description} Tech: ${p.techStack.join(', ')}`
      )
      .join('\n'),
  getSkills: () =>
    skills.map((s) => `- ${s.category}: ${s.items.join(', ')}`).join('\n'),
  getSports: () =>
    `${activities.summary}\nPhotos: ${activities.photos.map((p) => p.caption).join('; ')}`,
  getContact: () =>
    [
      `TL;DR: ${about.tldr}`,
      `Email: ${contact.email}`,
      `LinkedIn: ${contact.linkedin}`,
      `GitHub: ${contact.github}`,
      `Tech stack: ${techHighlights.join(', ')}`,
      `What I bring: ${about.whatIBring}`,
      `Passion & Interests: ${about.passion}`,
    ].join('\n'),
  getResume: () =>
    `My resume PDF (last updated ${resume.lastUpdated}, ${resume.fileSize}) with a download button.`,
};

export function getSectionContext(toolName: string) {
  const section = sections[toolName];
  return section && `Card shown to the user:\n${section()}`;
}
