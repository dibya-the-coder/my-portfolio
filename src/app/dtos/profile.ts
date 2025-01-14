import { Certification } from "./certification";
import { Education } from "./education";
import { Experience } from "./experience";
import { Mail } from "./mail";
import { PersonalInfo } from "./personalInfo";
import { Project } from "./project";
import { Technology } from "./technology";


export type Profile = {
    personalInfo: PersonalInfo;
    technologies: Technology;
    programmingLanguages: string[];
    operatingSystems: string[];
    experience: Experience[];
    education: Education[];
    certifications: Certification[];
    mails: Mail[];
    projects: Project[];
};
