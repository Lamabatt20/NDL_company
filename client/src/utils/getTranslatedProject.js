import { projectTranslations } from "../translations/projectTranslations";

export function getTranslatedProject(project, language) {
  if (!project) return project;

  if (language === "ar" && projectTranslations.ar?.[project.id]) {
    return {
      ...project,
      ...projectTranslations.ar[project.id],
    };
  }

  return project;
}