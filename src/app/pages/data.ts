export enum ID {
    introduction = 'owPuQjInzO8',
    basic = 'TkvQPNdGAKc',
    advanced = 'rivbQcxzmpk'
  }

  export interface RootObject {
    courses: CoursesItem[];
  }
  export interface CoursesItem {
    courseId: number;
    courseName?: string;
    description: string;
    topics: TopicsItem[];
  }
  export interface TopicsItem {
    topicId: number;
    name: string;
    videoId: string;
    videoURL: string;
    editor: Editor;
    project: Project;
  }
  export interface Editor {
    codeId: number;
    src: string;
  }
  export interface Project {
    codeURL: string;
  }
  