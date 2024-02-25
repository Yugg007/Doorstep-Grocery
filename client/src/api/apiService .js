// apiService.js
import axiosConfig from './axiosConfig';

const apiService = {
  // Create
  createItem: async (resource, data) => {
    try {
      const response = await axiosConfig.post(`/${resource}`, data);
      return response.data;
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  },

  // Read
  getItem: async (resource, id) => {
    try {
      const response = await axiosConfig.get(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error getting item:', error);
      throw error;
    }
  },

  // Update
  updateItem: async (resource, id, data) => {
    try {
      const response = await axiosConfig.put(`/${resource}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  },

  // Delete
  deleteItem: async (resource, id) => {
    try {
      const response = await axiosConfig.delete(`/${resource}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  },
};

export default apiService;
