

export interface Project {
    id?: string;
    project_name?: string;
    project_description?: string;
    project_location?: string;
    project_cover_image?:string | FormData;
    project_images?: Array<{ Image_id: string; image: string | FormData; caption: string }>;
  }

export interface AuthResponse {
    email: string;
    password: string;
  }

  export interface ProjectImage {
    Image_id?: string;
    image: string;
    caption?: string;
  }