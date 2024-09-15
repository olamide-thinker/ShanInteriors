import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProjectImage } from './types'; // Adjust the import path accordingly
import { baseUrl } from './apiConnection';

const getAuthToken = () => localStorage.getItem('authToken') || '';

export const projectImagesApi = createApi({
  reducerPath: 'projectImagesApi',
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
  refetchOnReconnect: true,
  tagTypes: ['ProjectImage'],

  endpoints: (builder) => ({

    // Fetch all images for a project
    getProjectImages: builder.query<any, { projectId: string }>({
      query: ({ projectId }) => `/projects/${projectId}/images`,
      providesTags: (result, error, { projectId }) => 
        result 
          ? [
              { type: 'ProjectImage', id: `PROJECT_${projectId}` }, // Tag for the entire list of images for the project
              ...result.map(({ Image_id }:any) => ({ type: 'ProjectImage', id: Image_id })) // Tag individual images
            ]
          : [{ type: 'ProjectImage', id: `PROJECT_${projectId}` }],
    }),

    // Create a new image for a project
    createProjectImage: builder.mutation<ProjectImage, { projectId: string; newImage: FormData }>({
      query: ({ projectId, newImage }) => ({
        url: `/projects/${projectId}/images`,
        method: 'POST',
        body: newImage,
      }),
      invalidatesTags: (result, error, { projectId }) => [
        { type: 'ProjectImage', id: `PROJECT_${projectId}` }
      ],
    }),

    // Update an image for a project
    updateProjectImage: builder.mutation<ProjectImage, { projectId: string; imageId: string; updatedImage: Partial<ProjectImage> }>({
      query: ({ projectId, imageId, updatedImage }) => ({
        url: `/projects/${projectId}/images/${imageId}`,
        method: 'PATCH',
        body: updatedImage,
      }),
      invalidatesTags: (result, error, { projectId, imageId }) => [
        { type: 'ProjectImage', id: `PROJECT_${projectId}` },
        { type: 'ProjectImage', id: imageId }
      ],
    }),

    // Delete an image for a project
    deleteProjectImage: builder.mutation<void, { projectId: string; imageId: string }>({
      query: ({ projectId, imageId }) => ({
        url: `/projects/${projectId}/images/${imageId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, { projectId, imageId }) => [
        { type: 'ProjectImage', id: `PROJECT_${projectId}` },
        { type: 'ProjectImage', id: imageId }
      ],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetProjectImagesQuery,
  useCreateProjectImageMutation,
  useUpdateProjectImageMutation,
  useDeleteProjectImageMutation,
} = projectImagesApi;
