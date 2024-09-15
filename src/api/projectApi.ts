import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Project } from './types';
import { baseUrl } from './apiConnection';
import { toast } from '@/components/ui/use-toast';

const getAuthToken = () => localStorage.getItem('authToken') || '';

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const token = getAuthToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Projects', 'Project'],
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/projects',
      providesTags: [{ type: 'Projects', id: 'LIST' }],
    }),
    getProjectById: builder.query<Project, string>({
      query: (id) => `/projects/${id}`,
      providesTags: (result, error, id) => [{ type: 'Project', id }],
    }),
    createProject: builder.mutation<Project, Partial<Project>>({
      query: (newProject) => ({
        url: '/projects',
        method: 'POST',
        body: newProject,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(projectApi.util.invalidateTags([{ type: 'Projects', id: 'LIST' }]));
        } catch {}
      },
    }),
    updateProject: builder.mutation<any, { id: string; updatedProject: { project_name?: string; project_description?: string; project_location?: string; project_cover_image?: FormData } }>({
      query: ({ id, updatedProject }) => {
        const formData = new FormData();
    
        // Manually append the form data
        if (updatedProject.project_cover_image) {
          updatedProject.project_cover_image.forEach((value, key) => {
            formData.append(key, value as string | Blob);
          });
        }
    
        // Append other fields
        if (updatedProject.project_name) formData.append("project_name", updatedProject.project_name);
        if (updatedProject.project_description) formData.append("project_description", updatedProject.project_description);
        if (updatedProject.project_location) formData.append("project_location", updatedProject.project_location);
    
        return {
          url: `/projects/${id}`,
          method: 'PATCH',
          body: formData,
        };
      },
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(projectApi.util.invalidateTags([
            { type: 'Projects', id: 'LIST' },
            { type: 'Project', id },
          ]));
        } catch (error) {
          console.error("Error updating project:", error);
        }
      },
    }),
    
    
    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // const { data } = await queryFulfilled;
          dispatch(projectApi.util.invalidateTags([{ type: 'Projects', id: 'LIST' }]));
          toast({
            title: `Success`,
            // description: ` ${data.message}`,
          });
       
        } catch (err: any){
          toast({
            title: `${err.error.data.message}`,
            // description: ` ${error.error.data.message}`,
            variant: "destructive",
          });
        }
      },
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectByIdQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
